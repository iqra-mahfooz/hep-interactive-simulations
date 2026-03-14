# ⚛️ Particle Physics Interactive Simulations

A **canvas-based particle collision engine** built for visualizing high-energy physics processes directly in the browser.

This project simulates simplified particle collision events inspired by experiments at the **CERN** and the **Large Hadron Collider**, providing an interactive event display with real-time particle generation, process visualization, and a structured roadmap toward more advanced physics simulations.

The simulator is designed as part of a **computational High Energy Physics (HEP) portfolio**, demonstrating both **physics intuition and interactive web visualization**.

---

# 🚀 Features

### ⚡ Canvas-based collision engine

Interactive particle collision simulation rendered using the **HTML5 Canvas API**.

* Click anywhere on the beam region to trigger a collision at that point
* Particle showers propagate outward from the interaction vertex
* Real-time rendering of event evolution

---

### 🔬 Multiple physics modes

The simulator supports **three collision environments** inspired by real particle accelerators:

| Mode                  | Description                                         |
| --------------------- | --------------------------------------------------- |
| **p–p collisions**    | Proton–proton collisions similar to LHC experiments |
| **e⁺e⁻ annihilation** | Electron–positron annihilation processes            |
| **Pb–Pb collisions**  | Heavy ion collisions producing dense QCD matter     |

Each mode changes the **particle production behavior and event types**.

---

### ⚙️ Adjustable collision energy

An **energy slider** allows control of the center-of-mass energy:

```
√s = 1 – 14 TeV
```

Particle production follows **basic physics thresholds**:

* Heavy gauge bosons (W/Z) only appear at sufficiently high energies
* Low energy collisions produce mostly lighter particles
* Event multiplicity scales with collision parameters

---

### 📈 Auto-fire mode (high luminosity)

Automatic collision generation simulates **high-luminosity runs**, continuously producing events for observation and testing.

---

### 📊 Real-time collision statistics

The sidebar tracks:

* Total events
* Particle count
* Boson production
* Jet production

This mimics the **live monitoring tools used in collider experiments**.

---

### 📜 Event log

Each collision generates an **event record** showing:

* Interaction type
* Tagged particle species
* Event classification

Particles are categorized into:

* bosons
* leptons
* hadrons
* quarks

---

### 📉 Live Feynman diagram generator

Every event randomly draws a simplified **Feynman diagram** representing the underlying interaction.

Possible processes include:

* QCD scattering
* W/Z boson production
* Dijet production
* e⁺e⁻ → μ⁺μ⁻ annihilation

These diagrams are generated dynamically in a dedicated canvas.

---

# 🧪 Simulation Roadmap

The project is designed as a **progressive High Energy Physics simulation suite**.

A total of **16 simulations** are planned across four tiers, covering topics from introductory particle physics to research-level ideas.

---

## Tier 1 — Foundation

| Simulation      | Topic                              |
| --------------- | ---------------------------------- |
| PP Collider     | QCD particle showers               |
| Wave Functions  | Schrödinger equation visualization |
| EM Fields       | Maxwell equations and field lines  |
| Feynman Builder | Interactive diagram construction   |

---

## Tier 2 — Intermediate

| Simulation      | Topic                                   |
| --------------- | --------------------------------------- |
| Lorentz Boosts  | Special relativity & spacetime diagrams |
| Cross Sections  | Differential scattering visualizer      |
| Parton Showers  | QCD evolution and jet formation         |
| QGP / Heavy Ion | Quark-gluon plasma dynamics             |

---

## Tier 3 — Advanced

| Simulation          | Topic                                  |
| ------------------- | -------------------------------------- |
| Higgs Mechanism     | Spontaneous symmetry breaking          |
| Color Confinement   | QCD flux tubes and hadronization       |
| Cosmic Rays         | Atmospheric particle showers           |
| Detector Simulation | CMS/ATLAS-style detector visualization |

---

## Tier 4 — Research

| Simulation            | Topic                         |
| --------------------- | ----------------------------- |
| BSM Explorer          | Supersymmetry and dark matter |
| Black Hole Production | TeV-scale gravity scenarios   |
| Path Integrals        | Lattice QFT visualization     |
| Early Universe        | Baryogenesis & cosmology      |

---

# 🏗️ Project Structure

```
hep-simulations/
│
├── index.html
│
├── css/
│   └── styles.css
│
└── js/
    ├── constants.js
    ├── feynman.js
    ├── simulation.js
    ├── ui.js
    └── main.js
```

---

## Live Demo

🚀 **Launch the simulator**

👉 https://iqra-mahfooz.github.io/hep-interactive-simulations/
```

Then open:

```
index.html
```

No build tools or frameworks are required.

---

# 🎯 Purpose

This project demonstrates:

* Interactive physics visualization
* Browser-based simulation design
* Computational physics concepts
* Scientific UI/UX design

It also serves as a **growing portfolio of High Energy Physics simulations**.

---

# 📚 Physics Topics Covered

* Quantum Field Theory
* Quantum Chromodynamics
* Electroweak interactions
* Particle collider phenomenology
* Heavy ion physics
* Detector simulation concepts

---

# 📜 License

MIT License

---

