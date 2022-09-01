const hamburgerMenu = document.querySelector('#hamburger_menu');
const navigation = document.querySelector('header nav');
const navigationSocialsImg = document.querySelectorAll('header nav #socials a img');
const portfolioImages = document.querySelectorAll('#portfolio div img');
const footer = document.querySelector('footer');
let userHasScrolled = false;
window.addEventListener('scroll', () => {
    if (screen.width >= 1000 && window.scrollY >= 60) {
        navigation.classList.add('scrolled_navigation');
        if (location.pathname === '/' || location.pathname === '/portfolio') {
            navigation.classList.add('black_navigation');
            navigationSocialsImg.forEach(social => {
                social.src = social.src.split('-black').join('');
                social.src = social.src.split('4').join('4-black');
            });
        }
    } else {
        navigation.classList.remove('scrolled_navigation');
        if (location.pathname === '/' || location.pathname === '/portfolio') {
            navigation.classList.remove('black_navigation');
            navigationSocialsImg.forEach(social => {
                social.src = social.src.split('-black').join('');
            });
        }
    }
});

hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('open');
});

if (location.pathname === '/' || location.pathname === '/portfolio') {
    footer.classList.add('transform_footer');
}
if (screen.width >= 1000) {
    if (location.pathname === '/overmij') {
        footer.classList.add('transform_footer_larger');
    } else if (location.pathname === '/tarieven') {
        footer.classList.add('transform_footer_large');
    }
} else if (screen.width < 1000) {
    if (location.pathname === '/overmij') {
        footer.classList.remove('transform_footer_larger');
    } else if (location.pathname === '/tarieven') {
        footer.classList.remove('transform_footer_large');
    }
}

if (location.pathname === '/overmij' || location.pathname === '/tarieven') {
    navigation.classList.add('black_navigation');
    navigationSocialsImg.forEach(social => {
        social.src = social.src.split('4').join('4-black');
    });
}

window.addEventListener('resize', () => {
    if (screen.width >= 1000) {
        if (location.pathname === '/overmij') {
            footer.classList.add('transform_footer_larger');
        } else if (location.pathname === '/tarieven') {
            footer.classList.add('transform_footer_large');
        }
    } else if (screen.width < 1000) {
        if (location.pathname === '/overmij') {
            footer.classList.remove('transform_footer_larger');
        } else if (location.pathname === '/tarieven') {
            footer.classList.remove('transform_footer_large');
        }
    }
});

portfolioImages.forEach(image => {
    if (image.src.includes('portrait')) {
        image.classList.add('portrait');
    }
});
