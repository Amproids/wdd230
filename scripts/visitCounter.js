document.addEventListener("DOMContentLoaded", function() {
    console.log("Visit Counter");
    const visitCounter = document.getElementById("visit-counter");
    let visits = localStorage.getItem("wdd230-visits") || 0;
    visits = Number(visits) + 1;
    visitCounter.textContent = visits;
    localStorage.setItem("wdd230-visits", visits);
});