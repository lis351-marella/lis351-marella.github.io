document.addEventListener('DOMContentLoaded', function () {
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.carousel-btn-right');
    const prevButton = document.querySelector('.carousel-btn-left');
    const container = document.querySelector('.carousel-track-container');
    let currentIndex = 0;

    function updatePosition() {
        const slideWidth = slides[0].getBoundingClientRect().width;
        track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }

    function updateContainerHeight() {
        const currentSlide = slides[currentIndex];
        if (!currentSlide) return;
        const card = currentSlide.querySelector('.project-card');
        if (!card) return;
        const styles = window.getComputedStyle(card);
        const marginTop = parseFloat(styles.marginTop) || 0;
        const marginBottom = parseFloat(styles.marginBottom) || 0;
        const baseHeight = card.getBoundingClientRect().height;
        container.style.height = `${baseHeight + marginTop + marginBottom}px`;
    }
    
    window.addEventListener('resize', () => {
        updatePosition();
        updateContainerHeight();
    });

    nextButton.addEventListener('click', () => {
        currentIndex = Math.min(currentIndex + 1, slides.length - 1);
        updatePosition();
        updateContainerHeight();
        nextButton.blur();
    });

    prevButton.addEventListener('click', () => {
        currentIndex = Math.max(currentIndex - 1, 0);
        updatePosition();
        updateContainerHeight();
        prevButton.blur();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') {
            currentIndex = Math.min(currentIndex + 1, slides.length - 1);
            updatePosition();
            updateContainerHeight();
        } else if (e.key === 'ArrowLeft') {
            currentIndex = Math.max(currentIndex - 1, 0);
            updatePosition();
            updateContainerHeight();
        }
    });

    updatePosition();
    updateContainerHeight();
    window.addEventListener('load', updateContainerHeight);
});