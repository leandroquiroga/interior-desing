// Menu desplegable

const menu = document.querySelector(".nav-menu");
const nav = document.querySelector(".list");
const showMenu = document.querySelector(".menu-bar");
const close = document.querySelector(".nav-close");

menu.addEventListener('click', () => {
    nav.classList.toggle('show');
    showMenu.style.display = 'block';
    close.style.display = 'block';
    close.style.zIndex = '2';
})  

nav.addEventListener('click', () => { 
    nav.classList.toggle('show');
    showMenu.style.display = 'none';
})

close.addEventListener('click', () => {
    nav.classList.toggle('show');
    showMenu.style.display = 'none'
} ) 