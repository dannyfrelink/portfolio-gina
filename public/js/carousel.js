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

if (location.pathname === '/' || location.pathname === '/en') {
    previousButton.addEventListener('click', moveCarousel);
    nextButton.addEventListener('click', moveCarousel);
}