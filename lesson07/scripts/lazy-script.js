const lasModifiedElement = document.getElementById("lastModified");
const copyWriteYearElement = document.getElementById("copyright");

copyWriteYearElement.textContent = `©${new Date().getFullYear()} | Andrew Parry | Utah, USA`;
lasModifiedElement.textContent = `Last Modification: ${document.lastModified}`;
