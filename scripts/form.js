// Get DOM elements
const form = document.querySelector('form');
const password1 = document.getElementById('password');
const password2 = document.getElementById('password2');
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
        event.preventDefault(); // Prevent form submission
        alert('Passwords do not match. Please try again.');
        // Clear password fields
        password1.value = '';
        password2.value = '';
        // Focus back to the first password field
        password1.focus();
    }
});

// Set initial rating value when page loads
document.addEventListener('DOMContentLoaded', function() {
    ratingValue.textContent = ratingInput.value;
});