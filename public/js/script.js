const hamburgerMenu = document.querySelector('#hamburger_menu');
const navigation = document.querySelector('header nav');
const navigationSocialsImg = document.querySelectorAll('header nav #socials a img');
const contactLink = document.querySelector('header nav #contact_link');

const carouselImages = document.querySelectorAll('#carousel ul li');
const previousButton = document.querySelector('#carousel #previous');
const nextButton = document.querySelector('#carousel #next');

const portfolioImages = document.querySelectorAll('#portfolio div img');
const footer = document.querySelector('footer');

hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('open');
});

window.addEventListener('scroll', () => {
    if (window.innerWidth >= 1000) {
        if (window.scrollY >= 60) {
            navigation.classList.add('scrolled_navigation');
            if (location.pathname === '/' || location.pathname.includes('/portfolio')) {
                navigation.classList.add('black_navigation');
                navigationSocialsImg.forEach(social => {
                    social.src = social.src.split('-black').join('');
                    social.src = social.src.split('-64').join('-64-black');
                });
            }
        } else {
            navigation.classList.remove('scrolled_navigation');
            if (location.pathname === '/' || location.pathname.includes('/portfolio')) {
                navigation.classList.remove('black_navigation');
                navigationSocialsImg.forEach(social => {
                    social.src = social.src.split('-black').join('');
                });
            }
        }
    }
});

if (location.pathname === '/overmij' || location.pathname.includes('/tarieven') || location.pathname === '/bedankt') {
    navigation.classList.add('black_navigation');
    navigationSocialsImg.forEach(social => {
        social.src = social.src.split('-64').join('-64-black');
    });
}

contactLink.addEventListener('click', () => {
    hamburgerMenu.classList.remove('open');
});

let carouselCounter = carouselImages.length - 1;
const moveCarousel = (e) => {
    if (e.target.id === 'next') {
        carouselImages[carouselCounter].classList.remove('show');
        carouselCounter--
        if (carouselCounter < 0) {
            carouselCounter = carouselImages.length - 1
        }
    } else {
        carouselImages[carouselCounter].classList.remove('show');
        carouselCounter++
        if (carouselCounter > carouselImages.length - 1) {
            carouselCounter = 0
        }
    }
    carouselImages[carouselCounter].classList.add('show');
}

if (location.pathname === '/') {
    previousButton.addEventListener('click', moveCarousel);
    nextButton.addEventListener('click', moveCarousel);
}

portfolioImages.forEach(image => {
    if (image.src.includes('portrait')) {
        image.classList.add('portrait');
    }
});

if (location.pathname === '/' || location.pathname.includes('/portfolio')) {
    footer.classList.add('transform_footer');
}
if (window.innerWidth >= 1000) {
    if (location.pathname === '/overmij') {
        footer.classList.add('transform_footer_larger');
    } else if (location.pathname.includes('/tarieven')) {
        footer.classList.add('transform_footer_large');
    }
} else {
    if (location.pathname === '/overmij') {
        footer.classList.remove('transform_footer_larger');
    } else if (location.pathname.includes('/tarieven')) {
        footer.classList.remove('transform_footer_large');
    } else {
        navigationSocialsImg.forEach(social => {
            social.src = social.src.split('-64').join('-64-black');
        });
    }
}

window.addEventListener('resize', () => {
    if (window.innerWidth >= 1000) {
        if (location.pathname === '/overmij') {
            footer.classList.add('transform_footer_larger');
        } else if (location.pathname.includes('/tarieven')) {
            footer.classList.add('transform_footer_large');
        } else if (location.pathname !== '/bedankt') {
            navigationSocialsImg.forEach(social => {
                social.src = social.src.split('-black').join('');
            });
        }
    } else {
        navigationSocialsImg.forEach(social => {
            social.src = social.src.split('-black').join('');
            social.src = social.src.split('-64').join('-64-black');
        });
        if (location.pathname === '/overmij') {
            footer.classList.remove('transform_footer_larger');
        } else if (location.pathname.includes('/tarieven')) {
            footer.classList.remove('transform_footer_large');
        }
    }
});
