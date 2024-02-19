const toggleElement = document.querySelectorAll('.toggle-text');

toggleElement.forEach(element => {
    element.setAttribute('data-toggle-state', 'closed');
    element.style.display = 'none';

    const toggleButton = document.createElement('button');
    toggleButton.textContent = 'see more...';
    element.parentElement.appendChild(toggleButton);

    toggleButton.addEventListener('click', () => {
        const currentState = element.getAttribute('data-toggle-state');
        if (currentState == 'closed') {
            toggleButton.textContent = 'see less...';
            element.setAttribute('data-toggle-state', 'open');
            element.style.display = 'block';
        } else {
            toggleButton.textContent = 'see more...';
            element.setAttribute('data-toggle-state', 'closed');
            element.style.display = 'none';
        }
    })
});