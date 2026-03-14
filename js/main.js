// DOM Elements
const btnCollide = document.getElementById('btn-collide');
const btnAuto = document.getElementById('btn-auto');
const btnClear = document.getElementById('btn-clear');
const modeSelect = document.getElementById('mode-select');
const energySlider = document.getElementById('energy-slider');
const energyVal = document.getElementById('energy-val');
const energyLabel = document.getElementById('energy-label');
const ecmDisplay = document.getElementById('ecm-display');
const multSlider = document.getElementById('mult-slider');
const multVal = document.getElementById('mult-val');

// Auto mode state
let autoMode = false;
let autoTimer = null;

// Event Listeners
btnCollide.addEventListener('click', () => {
    spawnCollision(W/2 + (Math.random()-0.5)*60, H/2 + (Math.random()-0.5)*30);
});

btnAuto.addEventListener('click', function() {
    autoMode = !autoMode;
    this.textContent = autoMode ? 'STOP AUTO' : 'AUTO FIRE';
    this.className = autoMode ? 'btn btn-danger' : 'btn btn-gold';
    if (autoMode) {
        autoTimer = setInterval(() => {
            spawnCollision(W/2 + (Math.random()-0.5)*80, H/2 + (Math.random()-0.5)*40);
        }, 1200);
    } else {
        clearInterval(autoTimer);
    }
});

btnClear.addEventListener('click', () => {
    particles = [];
    ctx.clearRect(0, 0, W, H);
});

energySlider.addEventListener('input', function() {
    energy = parseFloat(this.value);
    energyVal.textContent = energy.toFixed(1) + ' TeV';
    energyLabel.textContent = energy.toFixed(1);
    ecmDisplay.textContent = energy.toFixed(1);
});

multSlider.addEventListener('input', function() {
    multiplicity = parseInt(this.value);
    multVal.textContent = '×' + multiplicity;
});

modeSelect.addEventListener('change', function() {
    mode = this.value;
    particles = [];
});

// Click on canvas
canvas.addEventListener('click', (e) => {
    const rect = canvas.getBoundingClientRect();
    const scaleX = W / rect.width;
    const scaleY = H / rect.height;
    spawnCollision((e.clientX - rect.left) * scaleX, (e.clientY - rect.top) * scaleY);
});

// Initialize
render();
drawFeynman('pp', 13.6);

// Initial collision burst
setTimeout(() => spawnCollision(W/2, H/2), 400);
setTimeout(() => spawnCollision(W/2 + 20, H/2 - 10), 900);