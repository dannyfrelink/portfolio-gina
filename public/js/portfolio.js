let imageCounter = 9;
portfolioImages.forEach(image => {
    if (image.src.includes('portrait')) {
        image.classList.add('portrait');
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