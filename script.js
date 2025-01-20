const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('ul');

// Toggle menu
menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});

const $viewer = document.querySelector('.myOwnDiv'); // Viewer-element
const sections = document.querySelectorAll('.color-pick'); // Kleurkeuze-secties
const prevButton = document.getElementById('prev'); // Vorige knop
const nextButton = document.getElementById('next'); // Volgende knop

// Kleuropties met camera-posities
const colorSteps = [
    { 
        name: 'laces', 
        colors: ['red', 'blue', 'green', 'pink', 'cyan'],
        cameraPosition: '45,45' // Diagonaal bovenaanzicht
    },
    { 
        name: 'badge', 
        colors: ['purple', 'yellow', 'cyan', 'gold', 'black'],
        cameraPosition: '0,90' // Frontale hoek
    },
    { 
        name: 'base', 
        colors: ['black', 'white', 'orange', 'pink', 'gray'],
        cameraPosition: '90,90' // Rechterkant
    }
];

let currentStep = 0; // Start bij de eerste stap

function updateSlider() {
    // Verberg of toon de juiste secties
    sections.forEach((section, index) => {
        section.hidden = index !== currentStep;
    });

    // Update knoppen met kleuren
    const { name, colors, cameraPosition } = colorSteps[currentStep];
    const colorButtons = sections[currentStep].querySelectorAll('button');

    colorButtons.forEach((button, index) => {
        button.style.backgroundColor = colors[index]; // Stel de kleur in
        button.onclick = () => changeColor(name, colors[index]); // Voeg klikfunctie toe
    });

    // Update de camera-positie
    $viewer.setCameraPosition(cameraPosition);
    console.log(`Camera verplaatst naar: ${cameraPosition}`);
}

// Verander de kleur van een object in de viewer
function changeColor(name, color) {
    $viewer.setColor({ name, color });
    console.log(`Kleur veranderd: ${name} -> ${color}`);
}

// Navigatie tussen stappen
prevButton.addEventListener('click', () => {
    currentStep = (currentStep - 1 + colorSteps.length) % colorSteps.length;
    updateSlider();
});

nextButton.addEventListener('click', () => {
    currentStep = (currentStep + 1) % colorSteps.length;
    updateSlider();
});

// Initialiseer de viewer
TSDViewer.create($viewer, {
    model: 'hva-shoe',
    plugins: 'customizer',
    onLoadComplete: () => {
        console.log('Model geladen:', $viewer);
        updateSlider(); // Start met de eerste stap
    },
});
