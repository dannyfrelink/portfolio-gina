const hamburgerMenu = document.querySelector('#hamburger_menu');
const portfolioImages = document.querySelectorAll('#portfolio div img');
const footer = document.querySelector('footer');

hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('open');
});

if (location.pathname === '/' || location.pathname === '/portfolio') {
    footer.classList.add('transform_footer');
} else if (screen.width >= 1000) {
    footer.classList.add('transform_footer_large');
} else if (screen.width < 1000) {
    footer.classList.remove('transform_footer_large');
}

window.addEventListener('resize', () => {
    if (location.pathname === '/overmij' || location.pathname === '/tarieven') {
        if (screen.width >= 1000) {
            footer.classList.add('transform_footer_large');
        } else if (screen.width < 1000) {
            footer.classList.remove('transform_footer_large');
        }
    }
});

portfolioImages.forEach(image => {
    if (image.src.includes('portrait')) {
        image.classList.add('portrait');
    }
});

// if (location.pathname === '/overmij') {
//     hamburgerMenu
// }