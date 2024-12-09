document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.image-carousel');
    const images = carousel.querySelectorAll('.carousel-image');
    let currentIndex = 0;

    function showNextImage() {
        // Remove active class from current image
        images[currentIndex].classList.remove('active');
        
        // Move to next image
        currentIndex = (currentIndex + 1) % images.length;
        
        // Add active class to next image
        images[currentIndex].classList.add('active');
    }

    // Initially show the first image
    images[currentIndex].classList.add('active');

    // Change image every 4 seconds
    setInterval(showNextImage, 4000);

    // Button animation
    setTimeout(function() {
        document.getElementById('shopNowButton').classList.add('show-button');
    }, 9000);
});