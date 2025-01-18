const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('ul');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});

const $viewer = document.querySelector('.myOwnDiv'); // Test div voor de viewer
const sections = document.querySelectorAll('.color-pick'); // Alle secties
const prevButton = document.getElementById('prev'); // Vorige knop
const nextButton = document.getElementById('next'); // Volgende knop

const colorSteps = [ // Kleuropties
    { name: 'laces', colors: ['red', 'blue', 'green'] },
    { name: 'badge', colors: ['purple', 'yellow', 'cyan'] },
    { name: 'base', colors: ['orange', 'pink', 'gray'] }
];

let currentStep = 0; // Start bij de eerste stap

function updateSlider() {

    sections.forEach((section, index) => {
        section.hidden = index !== currentStep; // Toon alleen de huidige sectie
    });

    const { name, colors } = colorSteps[currentStep]; //update de buttons aan de hand van de huidige stap
    const colorButtons = sections[currentStep].querySelectorAll('button');

    colorButtons.forEach((button, index) => {
        button.style.backgroundColor = colors[index]; // Geef de knop een kleur
        button.onclick = () => changeColor(name, colors[index]); // Voeg klikfunctie toe
    });
}

// Verander de kleur van een object in de viewer
function changeColor(name, color) {
    $viewer.setColor({ name, color });
}

// Navigatie tussen stappen
prevButton.addEventListener('click', () => {
    currentStep = (currentStep - 1 + colorSteps.length) % colorSteps.length; // Ga naar de vorige stap
    updateSlider();
});

nextButton.addEventListener('click', () => {
    currentStep = (currentStep + 1) % colorSteps.length; // Ga naar de volgende stap
    updateSlider();
});

// Initialiseer de viewer en de slider
TSDViewer.create($viewer, {
    model: 'hva-shoe',
    plugins: 'customizer',
    onLoadComplete: () => {
        console.log('Model geladen:', $viewer);
        updateSlider(); // Stel de slider in op de eerste stap
    },
});