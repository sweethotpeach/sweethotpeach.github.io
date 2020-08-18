
    let menu = document.querySelector('.burger-menu');
    let button = document.querySelector('.burger-menu__button');
    let links = document.querySelector('.burger-menu__link');
    let overlay = document.querySelector('.burger-menu__overlay');

button.addEventListener ('click', (e) => {
e.preventDefault ()
toggleMenu ()
});


[].forEach.call(links,function(el) {
    el.addEventListener('click',() => toggleMenu())
});

overlay.addEventListener('click', () => toggleMenu());

function toggleMenu () {
menu.classList.toggle('burger-menu_active');
if (menu.classList.contains('burger-menu_active')){
    document.body.style.overflow = 'hidden';
}else {
    document.body.style.overflow = 'visible';
}
}

