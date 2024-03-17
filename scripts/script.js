const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('nav');
const lasModifiedElement = document.getElementById("lastModified");
const copyWriteYearElement = document.getElementById("copyright");

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});
copyWriteYearElement.textContent = `©${new Date().getFullYear()} | Andrew Parry | Utah, USA`;
lasModifiedElement.textContent = `Last Modification: ${document.lastModified}`;
