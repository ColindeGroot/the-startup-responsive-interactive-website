const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('ul');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});