// Feynman diagram drawing utilities
function feynLine(fc, x1, y1, x2, y2, color='rgba(0,212,255,0.8)', dash=[]) {
    fc.save();
    fc.strokeStyle = color; 
    fc.lineWidth = 1.5;
    fc.setLineDash(dash);
    fc.shadowBlur = 6; 
    fc.shadowColor = color;
    fc.beginPath(); 
    fc.moveTo(x1,y1); 
    fc.lineTo(x2,y2); 
    fc.stroke();
    fc.restore();
}

function feynWavy(fc, x1, y1, x2, y2, color='#ffc847', waves=6) {
    fc.save();
    fc.strokeStyle = color; 
    fc.lineWidth = 1.5;
    fc.shadowBlur = 8; 
    fc.shadowColor = color;
    const dx = x2-x1, dy = y2-y1, len = Math.sqrt(dx*dx+dy*dy);
    const nx = -dy/len, ny = dx/len;
    fc.beginPath(); 
    fc.moveTo(x1,y1);
    for (let i = 1; i <= waves*2; i++) {
        const t = i / (waves*2);
        const amp = 5 * (i % 2 === 0 ? 1 : -1);
        fc.lineTo(x1+dx*t+nx*amp, y1+dy*t+ny*amp);
    }
    fc.lineTo(x2,y2); 
    fc.stroke();
    fc.restore();
}

function feynLabel(fc, x, y, text, color='rgba(255,255,255,0.6)') {
    fc.save();
    fc.font = '10px Share Tech Mono';
    fc.fillStyle = color; 
    fc.textAlign = 'center';
    fc.fillText(text, x, y);
    fc.restore();
}

function drawQCDScatter(fc, fw, fh) {
    const cx = fw/2, cy = fh/2;
    feynLine(fc, 10, 20, cx-10, cy, 'rgba(255,68,68,0.8)');
    feynLine(fc, 10, fh-20, cx-10, cy, 'rgba(255,68,68,0.8)');
    feynWavy(fc, cx-10, cy, cx+10, cy, '#ff6a00', 4);
    feynLine(fc, cx+10, cy, fw-10, 20, 'rgba(57,255,154,0.8)');
    feynLine(fc, cx+10, cy, fw-10, fh-20, 'rgba(57,255,154,0.8)');
    feynLabel(fc, 5, 14, 'q', 'rgba(255,68,68,0.8)');
    feynLabel(fc, 5, fh-10, 'q̄', 'rgba(255,68,68,0.8)');
    feynLabel(fc, cx, cy-14, 'g', '#ff6a00');
    feynLabel(fc, fw-5, 14, 'q', 'rgba(57,255,154,0.8)');
    feynLabel(fc, fw-5, fh-10, 'q̄', 'rgba(57,255,154,0.8)');
}

function drawWProduction(fc, fw, fh) {
    const cx = fw/2, cy = fh/2;
    feynLine(fc, 10, 25, cx, cy, 'rgba(255,200,71,0.8)');
    feynLine(fc, 10, fh-25, cx, cy, 'rgba(255,200,71,0.8)');
    feynWavy(fc, cx, cy, fw-20, cy, '#ffc847', 5);
    feynLine(fc, fw-20, cy, fw-5, 25, '#80cfff');
    feynLine(fc, fw-20, cy, fw-5, fh-25, 'rgba(200,200,255,0.6)');
    feynLabel(fc, 5, 18, 'u', 'rgba(255,200,71,0.9)');
    feynLabel(fc, 5, fh-18, 'd̄', 'rgba(255,200,71,0.9)');
    feynLabel(fc, cx+30, cy-12, 'W⁺', '#ffc847');
    feynLabel(fc, fw-3, 18, 'e⁺', '#80cfff');
    feynLabel(fc, fw-3, fh-18, 'νₑ', 'rgba(200,200,255,0.7)');
}

function drawZProduction(fc, fw, fh) {
    const cx = fw/2, cy = fh/2;
    feynLine(fc, 10, 25, cx, cy, 'rgba(255,100,0,0.8)');
    feynLine(fc, 10, fh-25, cx, cy, 'rgba(255,100,0,0.8)');
    feynWavy(fc, cx, cy, fw-20, cy, '#ff9f00', 5);
    feynLine(fc, fw-20, cy, fw-5, 25, '#b06fff');
    feynLine(fc, fw-20, cy, fw-5, fh-25, '#b06fff');
    feynLabel(fc, 5, 18, 'q', 'rgba(255,100,0,0.9)');
    feynLabel(fc, 5, fh-18, 'q̄', 'rgba(255,100,0,0.9)');
    feynLabel(fc, cx+24, cy-12, 'Z⁰', '#ff9f00');
    feynLabel(fc, fw-3, 18, 'μ⁺', '#b06fff');
    feynLabel(fc, fw-3, fh-18, 'μ⁻', '#b06fff');
}

function drawDijet(fc, fw, fh) {
    const cx = fw/2, cy = fh/2;
    feynLine(fc, 10, 25, cx, cy, 'rgba(57,255,154,0.7)');
    feynLine(fc, 10, fh-25, cx, cy, 'rgba(57,255,154,0.7)');
    feynWavy(fc, cx-15, cy, cx+15, cy, '#ff6a00', 3);
    feynLine(fc, cx+15, cy, fw-10, 30, 'rgba(255,215,0,0.8)');
    feynLine(fc, cx+15, cy, fw-10, fh-30, 'rgba(255,215,0,0.8)');
    feynLabel(fc, 5, 18, 'g', 'rgba(57,255,154,0.8)');
    feynLabel(fc, 5, fh-18, 'g', 'rgba(57,255,154,0.8)');
    feynLabel(fc, cx, cy-12, 'g', '#ff6a00');
    feynLabel(fc, fw-5, 24, 'jet', 'rgba(255,215,0,0.8)');
    feynLabel(fc, fw-5, fh-22, 'jet', 'rgba(255,215,0,0.8)');
}

function drawEEAnnihilation(fc, fw, fh) {
    const cx = fw/2, cy = fh/2;
    feynLine(fc, 10, 25, cx, cy, '#80cfff');
    feynLine(fc, 10, fh-25, cx, cy, '#80cfff');
    feynWavy(fc, cx, cy, fw-20, cy, '#ffffff', 6);
    feynLine(fc, fw-20, cy, fw-5, 25, '#b06fff');
    feynLine(fc, fw-20, cy, fw-5, fh-25, '#b06fff');
    feynLabel(fc, 5, 18, 'e⁻', '#80cfff');
    feynLabel(fc, 5, fh-18, 'e⁺', '#80cfff');
    feynLabel(fc, cx+14, cy-12, 'γ', '#fff');
    feynLabel(fc, fw-3, 18, 'μ⁻', '#b06fff');
    feynLabel(fc, fw-3, fh-18, 'μ⁺', '#b06fff');
}