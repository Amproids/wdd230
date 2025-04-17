// Populates spotlight section with Gold/Silver members
document.addEventListener('DOMContentLoaded', () => {
    fetch('data/members.json')
        .then(response => response.ok ? response.json() : Promise.reject('Network error'))
        .then(data => {
            // Get Gold/Silver members only
            const eligibleMembers = data.members.filter(member => 
                ['Gold', 'Silver'].includes(member.membershipLevel));
            
            // Select random members (up to 3)
            const selected = [];
            const tempMembers = [...eligibleMembers];
            
            for (let i = 0; i < 3 && tempMembers.length > 0; i++) {
                const randomIndex = Math.floor(Math.random() * tempMembers.length);
                selected.push(tempMembers.splice(randomIndex, 1)[0]);
            }
            
            // Update DOM
            const container = document.querySelector('.spotlight-container');
            container.innerHTML = '';
            
            selected.forEach(member => {
                const domain = member.website.replace(/https?:\/\/(www\.)?/, '');
                container.innerHTML += `
                    <div class="spotlight">
                        <h3>${member.name}</h3>
                        <img src="${member.image}" alt="${member.name} Logo">
                        <p>"${member.description}"</p>
                        <hr>
                        <p><i class="bi bi-envelope" aria-hidden="true"></i> contact@${domain}</p>
                        <p><i class="bi bi-telephone" aria-hidden="true"></i> ${member.phone}</p>
                        <a href="${member.website}" class="spotlight-link"><i class="bi bi-globe" aria-hidden="true"></i> Website</a>
                    </div>
                `;
            });
        })
        .catch(error => {
            console.error('Error:', error);
            document.querySelector('.spotlight-container').innerHTML = 
                '<p class="error-message">Unable to load featured businesses. Please check back later.</p>';
        });
});