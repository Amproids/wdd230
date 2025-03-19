document.addEventListener('DOMContentLoaded', () => {
    // Set the last modified date in the footer
    const lastModified = document.querySelector('#lastModified');
    if (lastModified) {
        lastModified.textContent = `Last Modified: ${document.lastModified}`;
    }

    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    
    // Create an intersection observer to detect when images come into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add a class to trigger the fade-in animation
                entry.target.classList.add('fade-in');
                // Once the animation is triggered, no need to observe this image anymore
                observer.unobserve(entry.target);
            }
        });
    });
    
    // Observe all lazy-loaded images
    lazyImages.forEach(img => {
        observer.observe(img);
    });
});