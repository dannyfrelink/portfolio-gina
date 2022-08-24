const hamburgerMenu = document.querySelector('#hamburger_menu');
const footer = document.querySelector('footer');

hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('open');
});

if (location.pathname === '/') {
    footer.classList.add('tranform_footer');
}

// if (location.pathname === '/overmij') {
//     hamburgerMenu
// }