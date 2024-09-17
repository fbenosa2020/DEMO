document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Message sent! We will get back to you shortly.');
});
document.addEventListener('DOMContentLoaded', function() {
    const testimonials = document.querySelectorAll('.testimonial');

    function handleScroll() {
        testimonials.forEach(testimonial => {
            const rect = testimonial.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                testimonial.classList.add('scroll-up');
            } else {
                testimonial.classList.remove('scroll-up');
            }
        });
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on load
});

    // Select the services link and dropdown
    const servicesLink = document.getElementById('services-link');
    const servicesDropdown = document.getElementById('services-dropdown');

    // Add click event listener to toggle the dropdown
    servicesLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior

        // Toggle the dropdown visibility
        if (servicesDropdown.style.display === 'block') {
            servicesDropdown.style.display = 'none';
        } else {
            servicesDropdown.style.display = 'block';
        }
    });

    // Optional: Close the dropdown if you click outside of it
    document.addEventListener('click', function(event) {
        if (!servicesLink.contains(event.target) && !servicesDropdown.contains(event.target)) {
            servicesDropdown.style.display = 'none';
        }
    });

