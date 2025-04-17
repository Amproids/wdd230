document.addEventListener('DOMContentLoaded', function() {
    const banner = document.getElementById('banner');
    const closeButton = document.getElementById('banner-close');
    
    // Check day
    const today = new Date().getDay();
    
    // Show banner only if it's Monday, Tuesday, or Wednesday
    if (today >= 1 && today <= 3) {
        const bannerClosed = localStorage.getItem('bannerClosed');
        const currentDate = new Date().toDateString();
        
        if (bannerClosed !== currentDate) {
            banner.style.display = 'block';
        }
    }
    
    // Handle close button click
    closeButton.addEventListener('click', function() {
        banner.style.display = 'none';
        
        localStorage.setItem('bannerClosed', new Date().toDateString());
    });
});