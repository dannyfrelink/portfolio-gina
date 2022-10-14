hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('open');
});

contactLink.addEventListener('click', () => {
    hamburgerMenu.classList.remove('open');
});