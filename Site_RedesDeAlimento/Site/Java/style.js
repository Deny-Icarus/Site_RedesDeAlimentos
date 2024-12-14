let currentIndex = 0;
const images = document.querySelectorAll('.carousel-images img');
const totalImages = images.length;
const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');
const carouselContainer = document.querySelector('.carousel-container');

function showImage(index) {
    if (index >= totalImages) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalImages - 1;
    } else {
        currentIndex = index;
    }

    const offset = -currentIndex * 100;
    carouselContainer.style.transform = `translateX(${offset}%)`;
}

prevButton.addEventListener('click', () => {
    showImage(currentIndex - 1);
});

nextButton.addEventListener('click', () => {
    showImage(currentIndex + 1);
});

setInterval(() => {
    showImage(currentIndex + 1);
}, 3000);
