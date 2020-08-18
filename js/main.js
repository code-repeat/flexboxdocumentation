// Menu mobile script
const menu = document.getElementById('menu-area');
const menuIcon = document.querySelector('.menu-icon').addEventListener('click', ()=> {
    if(menu.style.width == '200px') {
        menu.style.width = '0px';
    } else {
        menu.style.width = '200px';
    }
    
});