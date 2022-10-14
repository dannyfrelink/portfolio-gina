let imageCounter = 9;
portfolioImages.forEach((image, i) => {
    if (image.src.includes('portrait')) {
        image.classList.add('portrait');
    }

    if(i > imageCounter) {
        image.classList.add('hidden');
    }
});

loadMoreButton.addEventListener('click', () => {
    imageCounter = imageCounter + 10;

    portfolioImages.forEach((image, i) => {
        if(i <= imageCounter) {
            image.classList.remove('hidden');
        }
    });

    if(imageCounter >= portfolioImages.length) {
        loadMoreButton.classList.add('hidden');
    }
});