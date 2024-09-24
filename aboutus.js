let currentSlide = 0; // Track the current slide index
const slides = document.querySelectorAll('.slide'); // Get all slides
const totalSlides = slides.length; // Total number of slides

function showSlide(index) {
    const slideWidth = 100 / totalSlides; // Calculate slide width in percentage
    const offset = index * slideWidth; // Calculate offset
    document.querySelector('.slider').style.transform = `translateX(-${offset}%)`; // Move the slider
}

// Show the next slide every 5 seconds
setInterval(() => {
    currentSlide = (currentSlide + 1) % totalSlides; // Move to the next slide
    showSlide(currentSlide); // Display the next slide
}, 5000); // 5000 milliseconds = 5 seconds

// Show the first slide initially
showSlide(currentSlide);
