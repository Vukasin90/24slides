var menutToggler = document.querySelector('.template-nav-toggler');
var nav = document.querySelector('.template-nav');
var close = document.querySelector('.menu-close');

menutToggler.addEventListener('click', function() {
    nav.classList.add('menu-toggle');
});

close.addEventListener('click', function() {
    nav.classList.remove('menu-toggle');
});