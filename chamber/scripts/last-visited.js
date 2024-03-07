const lastVisitedElement = document.querySelector("#last-visited");
const lastVisited = localStorage.getItem("last-visited");
if (lastVisited) {
    let timeSinceVisit = Math.floor((Date.now() - lastVisited) / 1000);
    if (timeSinceVisit < 86400) {
        lastVisitedElement.textContent = "Back so soon! Awesome!";
    }
    else {
        daysSinceVisit = Math.floor(timeSinceVisit / 86400);
        lastVisitedElement.textContent = `You last visited ${daysSinceVisit} day${daysSinceVisit > 1 ? 's' : ''} ago.`;
    }
}
else {
    lastVisitedElement.textContent = "Welcome! Let us know if you have any questions.";
}
localStorage.setItem("last-visited", Date.now());