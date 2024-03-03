const temperatureElement = document.querySelector("#temperature");
const windspeedElement = document.querySelector("#windspeed");
const windchillElement = document.querySelector("#windchill");

//These values can be made automatically taken later.
var temperature = 20;
var windspeed = 50;
var windchill = temperature;

if (temperature <= 50 && windspeed > 3) {
    //calculate windchill
    windchill = 35.74 + 0.6215 * temperature - 35.75 * windspeed ** 0.16 + 0.4275 * temperature * windspeed ** 0.16;
    windchill = Math.round(windchill * 10)/10;
    windchillElement.textContent = `Windchill: ${windchill}°F`
}
else {
    windchillElement.textContent = "Windchill: N/A";
}
temperatureElement.textContent = `Temperature: ${temperature}°F`
windspeedElement.textContent = `Windspeed: ${windspeed}mph`
