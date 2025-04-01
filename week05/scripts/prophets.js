const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphets() {
  const response = await fetch(url);
  const data = await response.json();
  displayProphets(data.prophets);
}

function displayProphets(prophets) {
  prophets.forEach(prophet => {
    // Create elements
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let portrait = document.createElement('img');
    let birthdate = document.createElement('p');
    let place = document.createElement('p');
    
    // Add content to elements
    h2.textContent = `${prophet.name} ${prophet.lastname}`;
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
    portrait.setAttribute('loading', 'lazy');
    
    birthdate.textContent = `Date of Birth: ${prophet.birthdate}`;
    place.textContent = `Place of Birth: ${prophet.birthplace}`;
    
    // Append all elements to card
    card.appendChild(h2);
    card.appendChild(portrait);
    card.appendChild(birthdate);
    card.appendChild(place);
    
    // Append card to cards container
    cards.appendChild(card);
  });
}


getProphets();
displayProphets();