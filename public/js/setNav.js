window.addEventListener('scroll', () => {
    if (window.innerWidth >= 1000) {
        if (window.scrollY >= 50) {
            navigation.classList.add('scrolled_navigation');
            if (location.pathname === '/' || location.pathname === '/en' || location.pathname === '/portfolio' || location.pathname === '/en/portfolio' || location.pathname === '/portfolio/' || location.pathname === '/en/portfolio/') {
                navigation.classList.add('black_navigation');
                navigationSocialsImg.forEach(social => {
                    social.src = social.src.split('-black').join('');
                    social.src = social.src.split('-64').join('-64-black');
                });
            }
        } else {
            navigation.classList.remove('scrolled_navigation');
            if (location.pathname === '/' || location.pathname === '/en' || location.pathname === '/portfolio' || location.pathname === '/en/portfolio' || location.pathname === '/portfolio/' || location.pathname === '/en/portfolio/') {
                navigation.classList.remove('black_navigation');
                navigationSocialsImg.forEach(social => {
                    social.src = social.src.split('-black').join('');
                });
            }
        }
    }
});

if (window.scrollY >= 50) {
    navigation.classList.add('scrolled_navigation');
    if (location.pathname === '/' || location.pathname === '/en' || location.pathname === '/portfolio' || location.pathname === '/en/portfolio' || location.pathname === '/portfolio/' || location.pathname === '/en/portfolio/') {
        navigation.classList.add('black_navigation');
        navigationSocialsImg.forEach(social => {
            social.src = social.src.split('-black').join('');
            social.src = social.src.split('-64').join('-64-black');
        });
    }
}

if (location.pathname.includes('/overmij') || location.pathname.includes('/tarieven') || location.pathname.includes('/bedankt') || location.pathname.includes('.webp')) {
    navigation.classList.add('black_navigation');
    navigationSocialsImg.forEach(social => {
        social.src = social.src.split('-64').join('-64-black');
    });
}