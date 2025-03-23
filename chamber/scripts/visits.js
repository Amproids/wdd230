document.addEventListener("DOMContentLoaded", function () {
    const visitMessage = document.getElementById("visit-message");
    const lastVisit = localStorage.getItem("lastVisit");
    const now = new Date();

    if (!lastVisit) {
        // First-time visitor
        visitMessage.innerHTML = "<p>Welcome! Let us know if you have any questions.</p>";
    } else {
        // Calculate days since last visit
        const lastVisitDate = new Date(parseInt(lastVisit));
        const timeDiff = now - lastVisitDate;
        const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

        if (daysDiff < 1) {
            visitMessage.innerHTML = "<p>Back so soon! Awesome!</p>";
        } else if (daysDiff === 1) {
            visitMessage.innerHTML = `<p>You last visited ${daysDiff} day ago.</p>`;
        } else {
            visitMessage.innerHTML = `<p>You last visited ${daysDiff} days ago.</p>`;
        }
    }

    // Update last visit time
    localStorage.setItem("lastVisit", now.getTime());
});