document.querySelector('.menu-open').addEventListener('click', () => {
    document.querySelector('.menu').classList.add('menu__active');
})

document.querySelector('.menu-close').addEventListener('click', () => {
    document.querySelector('.menu').classList.remove('menu__active');
})