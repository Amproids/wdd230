const themeSwitch = document.getElementById('night-theme');
const checkbox = themeSwitch.querySelector('input');
checkbox.checked = false;

themeSwitch.addEventListener('change', () => {
    const header = document.querySelector('header');
    const nav = document.querySelector('nav');
    const navLinks = document.querySelectorAll('nav a');
    const menu = document.querySelector('#menu');
    const main = document.querySelector('main');
    const cards = document.querySelectorAll('.card');
    const footer = document.querySelector('footer');

    if (checkbox.checked) {
        // Dark theme
        header.style.backgroundColor = '#444';
        header.style.color = '#fff';
        nav.backgroundColor = '#444';
        navLinks.forEach( a => {
            a.style.backgroundColor = '#444';
            a.style.color = '#fff';
            a.addEventListener('mouseover', () => {
                a.style.backgroundColor = '#666';
            })            
            a.addEventListener('mouseout', () => {
                a.style.backgroundColor = '#444';
            });
        })
        menu.style.color = '#fff';
        main.style.backgroundColor = '#222';
        cards.forEach(card => {
            card.style.backgroundColor = '#444';
            card.style.color = '#fff';
        })
        footer.style.backgroundColor = '#222';
        footer.style.color = '#fff';
    } else {
        // Light theme
        header.style.backgroundColor = '#666';
        header.style.color = '#000';
        nav.backgroundColor = '#666';
        navLinks.forEach( a => {
            a.style.backgroundColor = '#666';
            a.style.color = '#000';
            a.addEventListener('mouseover', () => {
                a.style.backgroundColor = '#888';
            })            
            a.addEventListener('mouseout', () => {
                a.style.backgroundColor = '#666';
            });
        })
        menu.style.color = '#000';
        main.style.backgroundColor = '#fff';
        cards.forEach(card => {
            card.style.backgroundColor = '#aaa';
            card.style.color = '#000';
        })
        footer.style.backgroundColor = '#fff';
        footer.style.color = '#000';
    }
});
