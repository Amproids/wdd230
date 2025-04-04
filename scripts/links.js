const baseURL = 'https://amproids.github.io/wdd230/chamber/';
const linksURL = "https://amproids.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
}

function displayLinks(data) {
    const links = document.querySelector('ul');
    data.weeks.forEach(week => {
        const li = document.createElement('li');
        const h2 = document.createElement('h3');
        h2.textContent = week.week;
        li.appendChild(h2);
        week.links.forEach(link => {
            const a = document.createElement('a');
            a.setAttribute('href', baseURL + link.url);
            a.textContent = link.title;
            li.appendChild(a);
            const br = document.createElement('br');
            li.appendChild(br);
        });
        links.appendChild(li);
    })
    console.log(data);
}

getLinks();