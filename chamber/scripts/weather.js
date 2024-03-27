const weatherDate = document.querySelector("#weather-date");
const weatherElement = document.querySelector("#weather");
const weatherIcon = document.querySelector("#weather-icon");
const conditionsElement = document.querySelector("#conditions");
const temperatureElement = document.querySelector("#temperature");
const windspeedElement = document.querySelector("#windspeed");
const windchillElement = document.querySelector("#windchill");
const forecastElement = document.querySelector("#forecast");

const url = "https://api.openweathermap.org/data/2.5/weather?lat=49.7565&lon=6.6412&units=imperial&appid=d665ebd1da3ac4f6cce02014053f4591";
const forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=49.7565&lon=6.6412&units=imperial&appid=d665ebd1da3ac4f6cce02014053f4591";

const today = new Date();

async function getForecast() {
    try {
        const response = await fetch(forecastUrl);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayForecast(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

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
    weatherIcon.setAttribute('src', iconsrc);
    const description = data.weather[0].description;
    const temperature = data.main.temp;
    const windspeed = data.wind.speed;
    let windchill = temperature;

    weatherDate.textContent = `${returnWeekday(today.getDay())}, ${today.getMonth()}-${today.getDate()}-${today.getFullYear()}`;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', description);
    conditionsElement.textContent = description[0].toUpperCase() + description.substring(1);
    temperatureElement.textContent = `Temperature: ${Math.round(temperature)} °F`;
    windspeedElement.textContent = `Windspeed: ${Math.round(windspeed)} mph`;

    //calculate windchill
    if (temperature <= 50 && windspeed > 3) {
        windchill = 35.74 + 0.6215 * temperature - 35.75 * windspeed ** 0.16 + 0.4275 * temperature * windspeed ** 0.16;
        windchill = Math.round(windchill * 10)/10;
        windchillElement.textContent = `Windchill: ${Math.round(windchill)} °F`
    }
    else {
        windchillElement.textContent = "Windchill: N/A";
    }
}

function displayForecast(data) {
    const forecast1 = document.createElement("span");
    const forecast2 = document.createElement("span");
    const forecast3 = document.createElement("span");

    forecastInsert(data, forecast1, 1);
    forecastInsert(data, forecast2, 2);
    forecastInsert(data, forecast3, 3);

    forecastElement.appendChild(forecast1);
    forecastElement.appendChild(forecast2);
    forecastElement.appendChild(forecast3);
}

function forecastInsert(data, parentElement, day) {
    //Pull weather data.
    let iconsrc = `https://openweathermap.org/img/w/${data.list[day].weather[0].icon}.png`;
    let icondesc = data.list[day].weather[0].description;
    const temperature = data.list[day].main.temp;
    const forecastDay = new Date();
    const forecastDayNum = (forecastDay.getDay() + day) % 7;

    //Create HTML elements.
    const dayElement = document.createElement("h3");
    const forecastIcon = document.createElement("img");
    const tempElement = document.createElement("p");
    //windspeed

    //Add forecast data.
    forecastIcon.setAttribute("src", iconsrc);
    forecastIcon.setAttribute("alt", icondesc);
    dayElement.textContent = `${returnWeekday(forecastDayNum)}`;
    tempElement.textContent = `${Math.round(temperature)} °F`;

    //Append forecast data to page.
    parentElement.appendChild(dayElement);
    parentElement.appendChild(forecastIcon);
    parentElement.appendChild(tempElement);
}

function returnWeekday(dayNum) {
    weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return weekDays[dayNum];
}

getWeatherData();
getForecast();
