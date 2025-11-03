// OpenWeatherMap API Key
const WEATHER_API_KEY = '57fb8ef03e387036cb8bd4eded6f09c6';
const CITY = 'Bern';
const COUNTRY = 'CH';

// Wetterbedingungen zu Emoji-Mapping
function getWeatherEmoji(weatherId) {
    if (weatherId >= 200 && weatherId < 300) return '⛈️'; // Gewitter
    if (weatherId >= 300 && weatherId < 400) return '🌧️'; // Nieselregen
    if (weatherId >= 500 && weatherId < 600) return '🌧️'; // Regen
    if (weatherId >= 600 && weatherId < 700) return '🌨️'; // Schnee
    if (weatherId >= 700 && weatherId < 800) return '🌫️'; // Nebel/Dunst
    if (weatherId === 800) return '☀️';                    // Klarer Himmel
    if (weatherId > 800) return '☁️';                      // Bewölkt
    return '❓';                                           // Unbekannt
}

function kelvinToCelsius(k) {
    return (k - 273.15).toFixed(1);
}

async function fetchWeather() {
    const weatherBox = document.getElementById('weather-box');
    weatherBox.innerHTML = '<div class="loading-spinner">Lade Wetterdaten...</div>';
    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${CITY},${COUNTRY}&appid=${WEATHER_API_KEY}&lang=de`;
        const response = await fetch(url);
        if (!response.ok) throw new Error('Fehler beim Abrufen der Wetterdaten');
        const data = await response.json();
        const temp = kelvinToCelsius(data.main.temp);
        const desc = data.weather[0].description;
        const weatherId = data.weather[0].id;
        const emoji = getWeatherEmoji(weatherId);
        weatherBox.innerHTML = `
            <div class="weather-info">
                <div class="weather-emoji">${emoji}</div>
                <div class="weather-details">
                    <div class="weather-temp">${temp}°C</div>
                    <div class="weather-desc">${desc}</div>
                    <div class="weather-city">Bern, Schweiz</div>
                </div>
            </div>
        `;
    } catch (error) {
        weatherBox.innerHTML = '<div class="error-message">Fehler beim Laden der Wetterdaten</div>';
    }
}

document.addEventListener('DOMContentLoaded', fetchWeather);
