const preLoader = document.querySelector('.loading-page');
const fixedNavbar = document.querySelector('#navbar');
const firstPage = document.querySelector('.onePage-section');

window.addEventListener('load', function() {
    console.log('completed load');
    //setTimeout(afterPreload, 100);
    afterPreload();
});

function afterPreload() {
    preLoader.classList.add('hidden');
    fadeOut(preLoader);
}

function fadeOut(element) {
    element.addEventListener('animationend', function() {
        this.style.display = 'none';
        fadeIn(fixedNavbar);
        fadeIn(firstPage);
        presentBanner();
    });
}

function noneScreen(element) {
    element.style.display = 'none';
}

function fadeIn(element) {
    element.style.animation = 'fadeIn 1.5s forwards';
}

function presentBanner() {
    firstPage.querySelector('#bannerText').classList.remove('hidden');
}