let imageCounter = 9;
portfolioImages.forEach(image => {
    if (image.src.includes('portrait')) {
        image.parentNode.classList.add('portrait');
    }
});

portfolioAnchors.forEach((a, i) => {
    if(i > imageCounter) {
        a.classList.add('hidden');
    }
});

if(loadMoreButton) {
    loadMoreButton.addEventListener('click', () => {
        imageCounter = imageCounter + 10;

        portfolioAnchors.forEach((a, i) => {
            if(i <= imageCounter) {
                a.classList.remove('hidden');
            }
        });

        if(imageCounter >= portfolioImages.length) {
            loadMoreButton.classList.add('hidden');
        }
    });
}

if(portfolioDetailImage) {
    if (portfolioDetailImage.src.includes('portrait')) {
        portfolioDetailImage.classList.add('portrait');
    } else {
        portfolioDetailImage.classList.add('landscape');
    }
}