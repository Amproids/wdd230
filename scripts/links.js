const baseURL = "https://Amproids.github.io/wdd230/";
const linksURL = "https://Amproids.github.io/wdd230/data/links.json";
const linksElement = document.querySelector("#lessons");


async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.lessons);
}

const displayLinks = (lessons) => {
    lessons.forEach(lesson => {
        let item = document.createElement("li");
        item.innerHTML = `${lesson.lesson}: `;
        lesson.links.forEach(link => {
            item.innerHTML += `<a href="${link.url}">${link.title}</a> | `;
        })
        item.innerHTML = item.innerHTML.slice(0, -3);
        linksElement.appendChild(item);
    });
}

getLinks();