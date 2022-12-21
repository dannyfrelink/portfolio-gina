if (location.pathname === '/' || location.pathname === '/en' || location.pathname === '/portfolio' || location.pathname === '/en/portfolio' || location.pathname === '/portfolio/' || location.pathname === '/en/portfolio/') {
    footer.classList.add('transform_footer');
}

if (window.innerWidth >= 1000) {
    hamburgerMenu.classList.remove('open');

    if (!(location.pathname.includes('/overmij') || location.pathname.includes('/tarieven') || location.pathname.includes('/bedankt') || location.pathname.includes('.webp')) && window.scrollY < 50) {
        navigationSocialsImg.forEach(social => {
            social.src = social.src.split('-black').join('');
        });
    }
} else if (!(location.pathname.includes('/overmij') || location.pathname.includes('/tarieven') || location.pathname.includes('/bedankt') || location.pathname.includes('.webp'))) {
    navigationSocialsImg.forEach(social => {
        social.src = social.src.split('-black').join('');
        social.src = social.src.split('-64').join('-64-black');
    });
}

window.addEventListener('resize', () => {
    if (window.innerWidth >= 1000) {
        hamburgerMenu.classList.remove('open');

        if (location.pathname.includes('/overmij') || location.pathname.includes('/tarieven') || location.pathname.includes('/bedankt') || location.pathname.includes('.webp')) {
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