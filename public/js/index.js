// Menu desplegable

const menu = document.querySelector(".nav-menu");
const nav = document.querySelector(".list");
const showMenu = document.querySelector(".menu-bar");

menu.addEventListener('click', () => {
    nav.classList.toggle('show');
    showMenu.style.display = 'block';
})

nav.addEventListener('click', () => {
    nav.classList.toggle('show');
    showMenu.style.display = 'none';
})
