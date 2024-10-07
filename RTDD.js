document.addEventListener('DOMContentLoaded', fetchWeatherData);

const locations = [
    {name: 'Nesoddtangen', lat: 59.8624, lon: 10.6631},
    {name: 'New York',     lat: 40.7143, lon: -74.006},
    {name: 'Dubai City',   lat: 25.0772, lon: 55.3093},
    {name: 'London',       lat: 51.5085, lon: -0.1257},
    {name: 'Tokyo',        lat: 35.6895, lon: 139.6917},
    {name: 'Berlin',       lat: 52.5244, lon: 13.4105}
];

const API_BASE_URL = 'https://api.open-meteo.com/v1/forecast?current_weather=true';


async function fetchWeatherData() {
    const container = document.getElementById('weather-container');
    container.innerHTML = ''; //used to clear previous data

    for(const location of locations) {
        const response = await fetch(`${API_BASE_URL}&latitude=${location.lat}&longitude=${location.lon}`);
        const data = await response.json();
        const weather = data.current_weather;


        const weatherCard = document.createElement('div');
        weatherCard.className = 'weather-card';

        weatherCard.innerHTML = `
        <h2>${location.name}</h2>
        <p>Temperature: ${weather.temperature}°C</p>
        <p>Wind Speed: ${weather.windspeed} km/h</p>
        `;

        container.appendChild(weatherCard);
    }
}


setInterval(fetchWeatherData, 120000);
