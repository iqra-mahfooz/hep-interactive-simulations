// Particle types with physics-inspired properties
const PARTICLE_TYPES = [
    { name:'gluon',   color:'#ff6a00', glow:'rgba(255,106,0,0.6)',   speed:0.85, tag:'hadron', size:2.5, label:'g' },
    { name:'quark-u', color:'#ff3355', glow:'rgba(255,51,85,0.6)',   speed:0.75, tag:'quark',  size:2,   label:'u' },
    { name:'quark-d', color:'#ff6699', glow:'rgba(255,102,153,0.5)', speed:0.75, tag:'quark',  size:2,   label:'d' },
    { name:'pion',    color:'#39ff9a', glow:'rgba(57,255,154,0.5)',  speed:0.65, tag:'hadron', size:3,   label:'π' },
    { name:'kaon',    color:'#00ffcc', glow:'rgba(0,255,204,0.5)',   speed:0.6,  tag:'hadron', size:3,   label:'K' },
    { name:'photon',  color:'#ffffff', glow:'rgba(255,255,255,0.7)', speed:1.0,  tag:'boson',  size:2,   label:'γ' },
    { name:'W boson', color:'#ffc847', glow:'rgba(255,200,71,0.7)',  speed:0.5,  tag:'boson',  size:4,   label:'W±'},
    { name:'Z boson', color:'#ff9f00', glow:'rgba(255,159,0,0.7)',   speed:0.45, tag:'boson',  size:4.5, label:'Z⁰'},
    { name:'muon',    color:'#b06fff', glow:'rgba(176,111,255,0.6)', speed:0.9,  tag:'lepton', size:2.5, label:'μ' },
    { name:'electron',color:'#80cfff', glow:'rgba(128,207,255,0.6)', speed:0.95, tag:'lepton', size:2,   label:'e' },
    { name:'neutrino',color:'rgba(200,200,255,0.4)', glow:'rgba(200,200,255,0.2)', speed:0.99, tag:'lepton', size:1.5, label:'ν'},
    { name:'proton',  color:'#ff4444', glow:'rgba(255,68,68,0.5)',   speed:0.4,  tag:'hadron', size:5,   label:'p' },
    { name:'jet',     color:'#ffd700', glow:'rgba(255,215,0,0.4)',   speed:0.55, tag:'hadron', size:3.5, label:'jet'},
];

const PROCESS_NAMES = {
    pp: ['Hard Scatter', 'Soft Diffraction', 'MPI Event', 'b-quark pair', 'tt̄ production', 'W+jets', 'Z+jets', 'QCD dijet'],
    ee: ['e⁺e⁻→μ⁺μ⁻', 'e⁺e⁻→hadrons', 'e⁺e⁻→γγ', 'Z peak', 'W pair'],
    heavy: ['Pb-Pb Central', 'QGP Formation', 'J/ψ suppression', 'Flow event', 'Jet quenching'],
};