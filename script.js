const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('ul');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});

const $viewer = document.querySelector('.myOwnDiv'); //myOwnDiv een test div voor op de site met customizer
TSDViewer.create($viewer, {

    model: 'hva-shoe',
    plugins: 'customizer',

    onLoadComplete: () => {
        console.log($viewer)
        $viewer.setColor({name: 'laces', color:'red'});
    },

    onCreate: () => {
        console.log('viewer gemaakt');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const viewerContainer = document.getElementById('viewer-container');

    // Maak de viewer aan
    TSDViewer.create(viewerContainer, {
        model: 'hva-shoe',
        plugins: 'customiser',
        onLoadComplete: () => {
            console.log('Viewer geladen en klaar voor gebruik');
        }
    });

    // Koppel klikbare bolletjes aan kleurverandering
    const colorCircles = document.querySelectorAll('.color-circle');
    colorCircles.forEach(circle => {
        circle.addEventListener('click', (e) => {
            const selectedColor = e.target.getAttribute('data-color');
            viewerContainer.setColor({ name: 'laces', color: selectedColor });
            console.log(`Kleur veranderd naar: ${selectedColor}`);
        });
    });
});