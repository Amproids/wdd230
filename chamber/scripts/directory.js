const main = document.querySelector("main");
const directoryURL = "https://amproids.github.io/wdd230/chamber/data/members.json";

// Add grid/list view toggle buttons
const gridButton = document.createElement("button");
gridButton.textContent = "Grid View";
gridButton.classList.add("grid-button", "active");

const listButton = document.createElement("button");
listButton.textContent = "List View";
listButton.classList.add("list-button");

// Create container for the view toggle buttons
const viewToggle = document.createElement("div");
viewToggle.classList.add("view-toggle");
viewToggle.appendChild(gridButton);
viewToggle.appendChild(listButton);

// Insert view toggle before the main content
const directoryContainer = document.createElement("div");
directoryContainer.classList.add("directory-container", "grid");
main.appendChild(viewToggle);
main.appendChild(directoryContainer);

// Event listeners for toggle buttons
gridButton.addEventListener("click", () => {
  if (!gridButton.classList.contains("active")) {
    listButton.classList.remove("active");
    gridButton.classList.add("active");
    directoryContainer.classList.remove("list");
    directoryContainer.classList.add("grid");
  }
});

listButton.addEventListener("click", () => {
  if (!listButton.classList.contains("active")) {
    gridButton.classList.remove("active");
    listButton.classList.add("active");
    directoryContainer.classList.remove("grid");
    directoryContainer.classList.add("list");
  }
});

async function getDirectory() {
  try {
    const response = await fetch(directoryURL);
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const data = await response.json();
    displayDirectory(data);
  } catch (error) {
    console.error("Could not fetch directory data:", error);
    const errorMessage = document.createElement("p");
    errorMessage.textContent = "Failed to load directory data. Please try again later.";
    errorMessage.classList.add("error-message");
    directoryContainer.appendChild(errorMessage);
  }
}

function displayDirectory(data) {
  data.members.forEach(member => {
    // Create card container
    const card = document.createElement("section");
    card.classList.add("member-card");
    
    card.classList.add(member.membershipLevel.toLowerCase());
    
    // Create and add company logo/image
    const logoContainer = document.createElement("div");
    logoContainer.classList.add("logo-container");
    
    const logo = document.createElement("img");
    logo.src = member.image;
    logo.alt = `${member.name} Logo`;
    logo.loading = "lazy";
    logoContainer.appendChild(logo);
    card.appendChild(logoContainer);
    
    // Company information container
    const infoContainer = document.createElement("div");
    infoContainer.classList.add("info-container");
    
    // Company name
    const h2 = document.createElement("h2");
    h2.textContent = member.name;
    infoContainer.appendChild(h2);
    
    // Address with icon
    const addressContainer = document.createElement("div");
    addressContainer.classList.add("contact-info");
    addressContainer.innerHTML = `<i class="bi bi-envelope" aria-hidden="true"></i>
    <p>${member.address}</p>`;
    infoContainer.appendChild(addressContainer);
    
    // Phone with icon
    const phoneContainer = document.createElement("div");
    phoneContainer.classList.add("contact-info");
    phoneContainer.innerHTML = `<i class="bi bi-telephone" aria-hidden="true"></i>
    <p>${member.phone}</p>`;
    infoContainer.appendChild(phoneContainer);
    
    // Website as a link with icon
    const websiteContainer = document.createElement("div");
    websiteContainer.classList.add("contact-info");
    websiteContainer.innerHTML = `<i class="bi bi-globe" aria-hidden="true"></i>
    <a href="${member.website}" target="_blank">${member.website}</a>`;
    infoContainer.appendChild(websiteContainer);
    
    // Membership level
    const membershipLevel = document.createElement("p");
    membershipLevel.classList.add("membership-level");
    membershipLevel.textContent = `Membership: ${member.membershipLevel}`;
    infoContainer.appendChild(membershipLevel);
    
    if (member.description) {
      const description = document.createElement("p");
      description.classList.add("description");
      description.textContent = member.description;
      infoContainer.appendChild(description);
    }
    
    // Append info container to card
    card.appendChild(infoContainer);
    
    // Append completed card to the directory container
    directoryContainer.appendChild(card);
  });
}

getDirectory();