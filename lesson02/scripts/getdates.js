let lasModifiedElement = document.getElementById("lastModified");
let copyWriteYearElement = document.getElementById("copyright");

copyWriteYearElement.textContent = `©${new Date().getFullYear()} | Andrew Parry | Utah, USA`;
lasModifiedElement.textContent = `Last Updated: ${document.lastModified}`;