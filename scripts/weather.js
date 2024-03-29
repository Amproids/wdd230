const weatherElement = document.querySelector('#weather');
const weatherIcon = document.querySelector('#weather-icon');
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.7565&lon=6.6412&units=imperial&appid=d665ebd1da3ac4f6cce02014053f4591';

async function getWeatherData() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    weatherElement.textContent = ` ${data.main.temp} °F - ${desc}`;
}

getWeatherData();