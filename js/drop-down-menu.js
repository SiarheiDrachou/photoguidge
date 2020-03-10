let dropdownEl = document.querySelector('.drop-down');
let menuEl = document.querySelector('.nav');
let listMenuEl = document.querySelector('.nav-list');

function dropdownElListener(event) {
    menuEl.classList.toggle('nav--active');
    listMenuEl.classList.toggle('nav-list--active');
    listMenuEl.classList.toggle('nav-list');
}

dropdownEl.addEventListener('click', dropdownElListener);