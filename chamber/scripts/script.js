
const lastModifiedElement = document.getElementById("modification-date");
const copyrightYearElement = document.getElementById("current-year");

copyrightYearElement.textContent = `${new Date().getFullYear()}`;
lastModifiedElement.textContent = `${document.lastModified}`;