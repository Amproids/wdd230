const visitsDisplay = document.querySelector(".visits");

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (numVisits !== 0) {
	visitsDisplay.textContent = `Page Visits: ${numVisits}`;
} else {
	visitsDisplay.textContent = `This is you first visit! Welcome!`;
}

numVisits++;

localStorage.setItem("numVisits-ls", numVisits);