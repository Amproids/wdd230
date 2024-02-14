const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('nav');
const copyrightYearElement = document.getElementById("current-year");
const lastModifiedElement = document.getElementById("modification-date");

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

copyrightYearElement.textContent = `${new Date().getFullYear()}`;
lastModifiedElement.textContent = `${document.lastModified}`;