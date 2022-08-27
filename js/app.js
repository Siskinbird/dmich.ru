const hamburger = document.querySelector('.header .nav__bar .nav__list .hamburger');
const mobile__menu = document.querySelector('.header .nav__bar .nav__list ul');
const menu__item = document.querySelectorAll('.header .nav__bar .nav__list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile__menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
    var scroll__position = window.scrollY;
    if(scroll__position > 250) {
        header.style.backgroundColor = "#29323c";
    } else {
        header.style.backgroundColor = "transparent";
    }
});

menu__item.forEach((item) => {
    item.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobile__menu.classList.toggle('active');
    })
});
