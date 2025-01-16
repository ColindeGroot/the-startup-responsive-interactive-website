const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('ul');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});

const $viewer = document.querySelector('.myOwnDiv'); //myOwnDiv een test div voor op de site met customizer
TSDViewer.create($viewer,{
  
    model: 'hva-shoe',
    plugins: 'customizer',

    onLoadComplete: () => {
      console.log($viewer)
        // $viewer.setColor({name: 'laces', color:'red'});
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



//   // Selecteer de viewer en de container
// const hoverViewer = document.querySelector('.hover-viewer');
// const viewerContainer = document.querySelector('.viewer-container');

// // Functies om rotatie-instellingen aan te passen
// function startHoverRotation() {
//     TSDViewer.get(hoverViewer).setRotation(1, 0, 0); // Stel een andere rotatie-as in
// }

// function stopHoverRotation() {
//     TSDViewer.get(hoverViewer).setRotation(0, 0, 0); // Stop de rotatie
// }

// // Eventlisteners voor hover
// viewerContainer.addEventListener('mouseenter', () => {
//     TSDViewer.get(hoverViewer).startAutoRotate();
//     startHoverRotation();
// });

// viewerContainer.addEventListener('mouseleave', () => {
//     TSDViewer.get(hoverViewer).stopAutoRotate();
//     stopHoverRotation();
// });




  