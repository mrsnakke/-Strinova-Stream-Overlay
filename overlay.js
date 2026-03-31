const RANKS = [
    { name: "Substance", id: "substance", tiers: ["III", "II", "I"], image: "asset/Substance III-I.png" },
    { name: "Molecule", id: "molecule", tiers: ["III", "II", "I"], image: "asset/Molecule III-I.png" },
    { name: "Atom", id: "atom", tiers: ["IV", "III", "II", "I"], image: "asset/Atom IV-I.png" },
    { name: "Proton", id: "proton", tiers: ["IV", "III", "II", "I"], image: "asset/Proton IV-I.png" },
    { name: "Neutron", id: "neutron", tiers: ["IV", "III", "II", "I"], image: "asset/Neutron IV-I.png" },
    { name: "Electron", id: "electron", tiers: ["V", "IV", "III", "II", "I"], image: "asset/Electron IV-I.png" },
    { name: "Quark", id: "quark", tiers: ["V", "IV", "III", "II", "I"], image: "asset/Quark V-I.png" },
    { name: "Superstring", id: "superstring", tiers: [""], image: "asset/Superstring.png" },
    { name: "Singularity", id: "singularity", tiers: [""], image: "asset/Singularity.png" }
];

function updateUI() {
    const data = JSON.parse(localStorage.getItem('rankOverlayData')) || {
        rankIndex: 0,
        tierIndex: 0,
        score: 1000,
        wins: 0,
        losses: 0
    };

    const rank = RANKS[data.rankIndex];
    const tier = rank.tiers[data.tierIndex];

    const card = document.getElementById('rank-card');
    const rankNameElem = document.getElementById('rank-name');
    const rankTierElem = document.getElementById('rank-tier');
    const rankImgElem = document.getElementById('rank-image');
    const scoreElem = document.getElementById('current-score');
    const winsElem = document.getElementById('wins-count');
    const lossesElem = document.getElementById('losses-count');
    const pointsValElem = document.getElementById('points-val');

    // Update Theme
    card.className = card.className.split(' ').filter(c => !c.startsWith('theme-')).join(' ');
    card.classList.add(`theme-${rank.id}`);

    // Update Content
    rankNameElem.textContent = rank.name;
    rankTierElem.textContent = tier;
    rankImgElem.src = rank.image;
    scoreElem.textContent = data.score;
    winsElem.textContent = data.wins;
    lossesElem.textContent = data.losses;

    // Progress Logic
    const isSpecial = rank.id === 'superstring' || rank.id === 'singularity';
    if (isSpecial) {
        card.classList.add('no-progress');
    } else {
        card.classList.remove('no-progress');
        
        // Calculate points based on score (simulated from 1 to 100 as requested)
        // Using score % 100 as a simple way to show the 1-100 progress
        const points = (data.score % 100) || 0;
        pointsValElem.textContent = `${points}/100`;

        // Update 5 segments
        // Segment 1: 1-20, Segment 2: 21-40, etc.
        for (let i = 1; i <= 5; i++) {
            const fill = document.getElementById(`fill-${i}`);
            const min = (i - 1) * 20;
            const max = i * 20;
            
            let segmentFill = 0;
            if (points >= max) {
                segmentFill = 100;
            } else if (points > min) {
                segmentFill = ((points - min) / 20) * 100;
            }
            
            fill.style.width = `${segmentFill}%`;
        }
    }

    // Trigger animation
    card.classList.remove('updated');
    void card.offsetWidth; // Trigger reflow
    card.classList.add('updated');
}

// Listen for storage changes from control panel
window.addEventListener('storage', (event) => {
    if (event.key === 'rankOverlayData') {
        updateUI();
    }
});

// Initial load
updateUI();
