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

const rankGrid = document.getElementById('rank-grid');
const tierSelect = document.getElementById('tier-select');
const scoreInput = document.getElementById('score-input');
const winsInput = document.getElementById('wins-input');
const lossesInput = document.getElementById('losses-input');
const resetBtn = document.getElementById('reset-btn');

let currentData = JSON.parse(localStorage.getItem('rankOverlayData')) || {
    rankIndex: 0,
    tierIndex: 0,
    score: 1000,
    wins: 0,
    losses: 0
};

// Initialize Rank Grid with Thumbnails
function initRankGrid() {
    rankGrid.innerHTML = '';
    RANKS.forEach((rank, index) => {
        const item = document.createElement('div');
        item.className = `rank-item ${currentData.rankIndex === index ? 'active' : ''}`;
        item.innerHTML = `
            <img src="${rank.image}" alt="${rank.name}">
            <span>${rank.name}</span>
        `;
        item.onclick = () => selectRank(index);
        rankGrid.appendChild(item);
    });
}

function selectRank(index) {
    currentData.rankIndex = index;
    currentData.tierIndex = 0; // Reset tier when rank changes
    
    // Update active class
    document.querySelectorAll('.rank-item').forEach((el, i) => {
        el.classList.toggle('active', i === index);
    });
    
    updateTierOptions();
    saveData();
}

function updateTierOptions() {
    const tiers = RANKS[currentData.rankIndex].tiers;
    tierSelect.innerHTML = '';
    tiers.forEach((tier, index) => {
        const opt = document.createElement('option');
        opt.value = index;
        opt.textContent = tier || 'NO TIER';
        tierSelect.appendChild(opt);
    });
    tierSelect.value = currentData.tierIndex;
}

function loadData() {
    initRankGrid();
    updateTierOptions();
    scoreInput.value = currentData.score;
    winsInput.value = currentData.wins;
    lossesInput.value = currentData.losses;
}

function saveData() {
    currentData.tierIndex = parseInt(tierSelect.value) || 0;
    currentData.score = parseInt(scoreInput.value) || 0;
    currentData.wins = parseInt(winsInput.value) || 0;
    currentData.losses = parseInt(lossesInput.value) || 0;
    
    localStorage.setItem('rankOverlayData', JSON.stringify(currentData));
}

window.changeVal = function(type, delta) {
    const input = document.getElementById(`${type}-input`);
    let val = parseInt(input.value) + delta;
    if (val < 0) val = 0;
    input.value = val;
    saveData();
};

tierSelect.addEventListener('change', saveData);
scoreInput.addEventListener('input', saveData);
winsInput.addEventListener('input', saveData);
lossesInput.addEventListener('input', saveData);

resetBtn.addEventListener('click', () => {
    if (confirm('Are you sure you want to reset all statistics?')) {
        currentData = {
            rankIndex: 0,
            tierIndex: 0,
            score: 1000,
            wins: 0,
            losses: 0
        };
        loadData();
        saveData();
    }
});

// Sync data if changed elsewhere
window.addEventListener('storage', (e) => {
    if (e.key === 'rankOverlayData' && e.newValue) {
        currentData = JSON.parse(e.newValue);
        loadData();
    }
});

// Initial Load
loadData();
