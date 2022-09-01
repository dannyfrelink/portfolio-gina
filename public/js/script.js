const hamburgerMenu = document.querySelector('#hamburger_menu');
const navigation = document.querySelector('header nav');
const navigationSocialsImg = document.querySelectorAll('header nav #socials a img');

const carouselImages = document.querySelectorAll('#carousel ul li');
const previousButton = document.querySelector('#carousel #previous');
const nextButton = document.querySelector('#carousel #next');

const portfolioImages = document.querySelectorAll('#portfolio div img');
const footer = document.querySelector('footer');

hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('open');
});

window.addEventListener('scroll', () => {
    if (screen.width >= 1000 && window.scrollY >= 60) {
        navigation.classList.add('scrolled_navigation');
        if (location.pathname === '/' || location.pathname === '/portfolio') {
            navigation.classList.add('black_navigation');
            navigationSocialsImg.forEach(social => {
                social.src = social.src.split('-black').join('');
                social.src = social.src.split('-64').join('-64-black');
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

if (location.pathname === '/overmij' || location.pathname.includes('/tarieven')) {
    navigation.classList.add('black_navigation');
    navigationSocialsImg.forEach(social => {
        social.src = social.src.split('-64').join('-64-black');
    });
}

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

if (location.pathname === '/' || location.pathname === '/portfolio') {
    footer.classList.add('transform_footer');
}
if (screen.width >= 1000) {
    if (location.pathname === '/overmij') {
        footer.classList.add('transform_footer_larger');
    } else if (location.pathname.includes('/tarieven')) {
        footer.classList.add('transform_footer_large');
    }
} else {
    navigationSocialsImg.forEach(social => {
        social.src = social.src.split('-64').join('-64-black');
    });
    if (location.pathname === '/overmij') {
        footer.classList.remove('transform_footer_larger');
    } else if (location.pathname.includes('/tarieven')) {
        footer.classList.remove('transform_footer_large');
    }
}

window.addEventListener('resize', () => {
    if (screen.width >= 1000) {
        if (location.pathname === '/overmij') {
            footer.classList.add('transform_footer_larger');
        } else if (location.pathname.includes('/tarieven')) {
            footer.classList.add('transform_footer_large');
        } else {
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
