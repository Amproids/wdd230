const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('#header-nav');
const darkmodeButton = document.querySelector('#darkmode');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
    
    // Toggle between menu and close icons
    if (hamButton.textContent.trim() === 'menu') {
        hamButton.textContent = 'close';
    } else {
        hamButton.textContent = 'menu';
    }
});

darkmodeButton.addEventListener('click', () => {
    document.body.classList.toggle('darkmode');
   
    // Toggle between dark_mode and light_mode icons
    if (darkmodeButton.textContent.trim() === 'dark_mode') {
        darkmodeButton.textContent = 'light_mode';
    } else {
        darkmodeButton.textContent = 'dark_mode';
    }
});