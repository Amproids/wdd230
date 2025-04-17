const temp = document.querySelector('#temp');
const condition = document.querySelector('#condition');
const wind = document.querySelector('#wind');
const humidity = document.querySelector('#humidity');
const weatherIconContainer = document.querySelector('#icon');
const forecastContainer = document.querySelector('.forecast-container');
const currentUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=40.1302&lon=-111.5785&units=imperial&appid=d665ebd1da3ac4f6cce02014053f4591';
const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=40.1302&lon=-111.5785&units=imperial&appid=d665ebd1da3ac4f6cce02014053f4591';

// Map OpenWeatherMap icon codes to Bootstrap icons
const iconMap = {
    '01d': 'bi-sun-fill',
    '01n': 'bi-moon-fill',
    '02d': 'bi-cloud-sun-fill',
    '02n': 'bi-cloud-moon-fill',
    '03d': 'bi-cloud-fill',
    '03n': 'bi-cloud-fill',
    '04d': 'bi-clouds-fill',
    '04n': 'bi-clouds-fill',
    '09d': 'bi-cloud-drizzle-fill',
    '09n': 'bi-cloud-drizzle-fill',
    '10d': 'bi-cloud-rain-fill',
    '10n': 'bi-cloud-rain-fill',
    '11d': 'bi-cloud-lightning-fill',
    '11n': 'bi-cloud-lightning-fill',
    '13d': 'bi-cloud-snow-fill',
    '13n': 'bi-cloud-snow-fill',
    '50d': 'bi-cloud-fog-fill',
    '50n': 'bi-cloud-fog-fill'
};

async function currentWeatherFetch() {
    try {
        const response = await fetch(currentUrl);
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

async function forecastFetch() {
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

function displayResults(weatherData) {
    temp.textContent = `${weatherData.main.temp.toFixed(0)}°F`;
    condition.textContent = weatherData.weather[0].description;
    wind.innerHTML = `<i class="bi bi-wind" aria-hidden="true"></i> ${weatherData.wind.speed.toFixed(0)} MPH`;
    humidity.innerHTML = `<i class="bi bi-droplet" aria-hidden="true"></i> ${weatherData.main.humidity.toFixed(0)}%`;
    
    const weatherIconCode = weatherData.weather[0].icon;
    const biIconClass = iconMap[weatherIconCode] || 'bi-question-circle-fill';
    weatherIconContainer.innerHTML = `<i class="bi ${biIconClass} fs-1"></i>`;
}

function displayForecast(forecastData) {
  forecastContainer.innerHTML = '';
  for (let i = 0; i < forecastData.list.length; i += 8) {
    const forecastItem = forecastData.list[i];
    const forecastDate = new Date(forecastItem.dt * 1000);
    const day = forecastDate.toLocaleDateString('en-US', { weekday: 'long' });
    const forecastTemp = forecastItem.main.temp.toFixed(0);
    const forecastIconCode = forecastItem.weather[0].icon;
    const biIconClass = iconMap[forecastIconCode] || 'bi-question-circle-fill';
    
    const forecastItemHTML = `
      <div class="forecast-day">
        <div class="forecast-date">${day}</div>
        <div class="forecast-icon"><i class="bi ${biIconClass}"></i></div>
        <div class="forecast-temp">${forecastTemp}°F</div>
      </div>
    `;
    forecastContainer.innerHTML += forecastItemHTML;
  }
}

// Initialize weather data
currentWeatherFetch();
forecastFetch();