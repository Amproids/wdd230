const membersURL = "https://Amproids.github.io/wdd230/chamber/data/members.json"
const membersElement = document.querySelector("#members");

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");

async function getmembers() {
    const response = await fetch(membersURL);
    const data = await response.json();
    displayMembers(data.companies);
}

const displayMembers = (companies) => {
    companies.forEach(company => {
        let card = document.createElement("section");
        let title = document.createElement("h2");
        let logo = document.createElement("img");
        let address = document.createElement("p");
        let phone = document.createElement("p");
        let url = document.createElement("a");

        card.setAttribute("class", "card");
        title.textContent = company.name;
        logo.setAttribute("src", `${'https://picsum.photos/200/200'}`);
        logo.setAttribute("loading", "lazy");
        address.textContent = company.address;
        phone.textContent = company.phone;
        url.textContent = company.url;
        url.setAttribute("href", company.url);

        card.appendChild(title);
        card.appendChild(logo);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(url);

        membersElement.appendChild(card);
    });
}
getmembers();

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	membersElement.classList.add("grid");
	membersElement.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	membersElement.classList.add("list");
	membersElement.classList.remove("grid");
}
