// UI Elements
const fCanvas = document.getElementById('feynman');
const fCtx = fCanvas.getContext('2d');

function updateStats() {
    document.getElementById('stat-events').textContent = events;
    document.getElementById('stat-particles').textContent = totalParticles;
    document.getElementById('stat-bosons').textContent = bosons;
    document.getElementById('stat-jets').textContent = jets;
}

function logEvent(pool, mode, energy) {
    const log = document.getElementById('event-log');
    const process = PROCESS_NAMES[mode][Math.floor(Math.random() * PROCESS_NAMES[mode].length)];
    const type = pool[Math.floor(Math.random() * pool.length)];
    const tagClass = `tag-${type.tag}`;
    const entry = document.createElement('div');
    entry.className = 'log-entry';
    entry.innerHTML = `<span class="tag ${tagClass}">${type.label}</span> <span>${process} · ${(energy * 0.7 + Math.random() * energy * 0.5).toFixed(1)} GeV</span>`;
    log.insertBefore(entry, log.firstChild);
    if (log.children.length > 30) log.removeChild(log.lastChild);
}

function drawFeynman(mode, energy) {
    const fc = fCtx;
    const fw = fCanvas.width, fh = fCanvas.height;
    fc.clearRect(0, 0, fw, fh);
    fc.fillStyle = 'rgba(0,5,12,0)';
    fc.fillRect(0, 0, fw, fh);

    const processes = {
        pp: [drawQCDScatter, drawWProduction, drawZProduction, drawDijet],
        ee: [drawEEAnnihilation, drawZProduction],
        heavy: [drawQCDScatter, drawDijet],
    };

    const diagrams = processes[mode] || processes.pp;
    const draw = diagrams[Math.floor(Math.random() * diagrams.length)];
    draw(fc, fw, fh);
}