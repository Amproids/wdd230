const copyrightYearElement = document.getElementById("current-year");
const lastModifiedElement = document.getElementById("modification-date");

copyrightYearElement.textContent = `${new Date().getFullYear()}`;
lastModifiedElement.textContent = `${document.lastModified}`;