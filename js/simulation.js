// Canvas elements
const canvas = document.getElementById('collider');
const ctx = canvas.getContext('2d');
const W = canvas.width, H = canvas.height;

// State
let events = 0;
let totalParticles = 0;
let bosons = 0;
let jets = 0;
let particles = [];
let energy = 13.6;
let multiplicity = 3;
let mode = 'pp';

// Pick particles based on process
function getParticlePool(mode, energy) {
    if (mode === 'ee') {
        return PARTICLE_TYPES.filter(p => ['photon','muon','electron','W boson','Z boson','quark-u','quark-d'].includes(p.name));
    }
    if (mode === 'heavy') {
        return PARTICLE_TYPES; // all
    }
    // pp default
    const pool = [...PARTICLE_TYPES];
    if (energy < 4) return pool.filter(p => !['W boson','Z boson'].includes(p.name));
    return pool;
}

function spawnCollision(cx, cy) {
    events++;
    const pool = getParticlePool(mode, energy);
    const n = multiplicity * (3 + Math.floor(Math.random() * 6));
    const nTotal = mode === 'heavy' ? n * 4 : n;

    for (let i = 0; i < nTotal; i++) {
        const type = pool[Math.floor(Math.random() * pool.length)];
        const angle = Math.random() * Math.PI * 2;
        const spd = (type.speed * energy / 14) * (2 + Math.random() * 3);
        const life = 180 + Math.random() * 180;

        // Track bosons and jets
        if (type.tag === 'boson') bosons++;
        if (type.name === 'jet') jets++;

        particles.push({
            x: cx, y: cy,
            vx: Math.cos(angle) * spd,
            vy: Math.sin(angle) * spd,
            type, life, maxLife: life,
            trail: [],
            size: type.size * (0.8 + Math.random() * 0.6),
        });
    }

    totalParticles += nTotal;
    updateStats();
    logEvent(pool, mode, energy);
    drawFeynman(mode, energy);
}

function drawBeamLine() {
    // Beam pipe — horizontal lines
    ctx.strokeStyle = 'rgba(0,212,255,0.08)';
    ctx.lineWidth = 1;
    ctx.setLineDash([6, 8]);
    ctx.beginPath(); ctx.moveTo(0, H/2 - 4); ctx.lineTo(W, H/2 - 4); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(0, H/2 + 4); ctx.lineTo(W, H/2 + 4); ctx.stroke();
    ctx.setLineDash([]);

    // Center cross
    ctx.strokeStyle = 'rgba(0,212,255,0.15)';
    ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(W/2-20, H/2); ctx.lineTo(W/2+20, H/2); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(W/2, H/2-20); ctx.lineTo(W/2, H/2+20); ctx.stroke();
}

function render() {
    // Fade trail
    ctx.fillStyle = 'rgba(2,4,8,0.18)';
    ctx.fillRect(0, 0, W, H);

    drawBeamLine();

    // Draw & update particles
    for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life--;

        // bounce off edges softly
        if (p.x < 0 || p.x > W) p.vx *= -0.3;
        if (p.y < 0 || p.y > H) p.vy *= -0.3;

        const alpha = (p.life / p.maxLife);
        if (alpha <= 0) { particles.splice(i, 1); continue; }

        // Trail
        p.trail.push({x: p.x, y: p.y, a: alpha});
        if (p.trail.length > 20) p.trail.shift();

        // Draw trail
        for (let t = 1; t < p.trail.length; t++) {
            const ta = p.trail[t].a * alpha * 0.5 * (t / p.trail.length);
            ctx.strokeStyle = p.type.glow.replace(/[\d.]+\)$/, `${ta.toFixed(2)})`);
            ctx.lineWidth = p.size * 0.5 * (t / p.trail.length);
            ctx.beginPath();
            ctx.moveTo(p.trail[t-1].x, p.trail[t-1].y);
            ctx.lineTo(p.trail[t].x, p.trail[t].y);
            ctx.stroke();
        }

        // Draw particle
        ctx.save();
        ctx.globalAlpha = Math.min(1, alpha * 1.5);
        ctx.shadowBlur = 12;
        ctx.shadowColor = p.type.glow;
        ctx.fillStyle = p.type.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    }

    // Prune array
    if (particles.length > 2000) particles.splice(0, 500);

    requestAnimationFrame(render);
}