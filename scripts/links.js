const baseURL = 'https://amproids.github.io/wdd230/chamber/';
const linksURL = "https://amproids.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);
    return data;
}

getLinks();