// Hamburger menu functionality
const hamButton = document.querySelector('#hamburger');
const primaryNav = document.querySelector('#primary-nav');

hamButton.addEventListener('click', () => {
    primaryNav.classList.toggle('open');
    hamButton.classList.toggle('open');
    
    // Toggle between menu and close icons
    if (hamButton.querySelector('.bi').classList.contains('bi-list')) {
        hamButton.innerHTML = '<i class="bi bi-x-lg" aria-hidden="true"></i>';
    } else {
        hamButton.innerHTML = '<i class="bi bi-list" aria-hidden="true"></i>';
    }
});

// Set current date in the header
const currentDateElement = document.getElementById('current-date');
const options = { 
    weekday: 'long', 
    day: 'numeric', 
    month: 'long', 
    year: 'numeric' 
};
currentDateElement.textContent = new Date().toLocaleDateString('en-US', options);

// Footer year and last modified date
document.getElementById('current-year').textContent = new Date().getFullYear();
document.getElementById('last-modified').textContent = document.lastModified;