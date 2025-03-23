document.addEventListener("DOMContentLoaded", function () {
    const visitMessage = document.getElementById("visit-message");
    const lastVisit = localStorage.getItem("lastVisit");
    const now = new Date();

    if (!lastVisit) {
        // First-time visitor
        visitMessage.innerHTML = "<p>Welcome to the Mapleton City Chamber of Commerce! Let us know if you have any questions.</p>";
    } else {
        // Calculate days since last visit
        const lastVisitDate = new Date(lastVisit);
        const timeDiff = now - lastVisitDate;
        const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

        if (daysDiff < 1) {
            visitMessage.innerHTML = "<p>Welcome back! You last visited today.</p>";
        } else {
            visitMessage.innerHTML = `<p>Welcome back! Your last visit was ${daysDiff} days ago.</p>`;
        }
    }

    // Update last visit time
    localStorage.setItem("lastVisit", now);
});
