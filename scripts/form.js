const form = document.querySelector('form');
const password1 = document.getElementById('password');
const password2 = document.getElementById('password2');
const email = document.getElementById('email');
const ratingInput = document.getElementById('rating');
const ratingValue = document.querySelector('.rating-value');

// Update rating value display
ratingInput.addEventListener('input', function() {
    ratingValue.textContent = this.value;
});

// Form submission validation
form.addEventListener('submit', function(event) {
    // Check if passwords match
    if (password1.value !== password2.value) {
        event.preventDefault();
        alert('Passwords do not match. Please try again.');
        password1.value = '';
        password2.value = '';
        password1.focus();
    }

    // Check if email is valid
    const emailPattern = /^[a-zA-Z0-9._%+-]+@byui\.edu$/;
    if (!emailPattern.test(email.value)) {
        event.preventDefault();
        alert('Please enter a valid email address from byui.edu domain.');
        email.value = '';
        email.focus();
    }
});

// Set initial rating value when page loads
document.addEventListener('DOMContentLoaded', function() {
    ratingValue.textContent = ratingInput.value;
});