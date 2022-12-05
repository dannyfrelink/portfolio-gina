if (location.pathname === '/' || location.pathname === '/en' || location.pathname.includes('/portfolio')) {
    footer.classList.add('transform_footer');
}

if (window.innerWidth >= 1000) {
    hamburgerMenu.classList.remove('open');

    if ((!location.pathname.includes('/overmij') || !location.pathname.includes('/tarieven') || !location.pathname.includes('/bedankt')) && window.scrollY < 50) {
        navigationSocialsImg.forEach(social => {
            social.src = social.src.split('-black').join('');
        });
    }
} else {
    navigationSocialsImg.forEach(social => {
        social.src = social.src.split('-black').join('');
        social.src = social.src.split('-64').join('-64-black');
    });
}

window.addEventListener('resize', () => {
    if (window.innerWidth >= 1000) {
        hamburgerMenu.classList.remove('open');

        if ((location.pathname.includes('/overmij') || location.pathname.includes('/tarieven') || location.pathname.includes('/bedankt'))) {
            navigationSocialsImg.forEach(social => {
                social.src = social.src.split('-black').join('');
                social.src = social.src.split('-64').join('-64-black');
            });
        } else if(window.scrollY < 50) {
            navigationSocialsImg.forEach(social => {
                social.src = social.src.split('-black').join('');
            });
        }
    } else {
        navigationSocialsImg.forEach(social => {
            social.src = social.src.split('-black').join('');
            social.src = social.src.split('-64').join('-64-black');
        });
    }
});