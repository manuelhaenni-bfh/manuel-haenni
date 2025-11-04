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
    if (weatherId === 801) return '🌤️';                    // Ein paar Wolken
    if (weatherId > 801) return '☁️';                      // Bewölkt
    return '❓';                                           // Unbekannt
}

function kelvinToCelsius(k) {
    return (k - 273.15).toFixed(1);
}

function renderWeatherInHeader() {
    const weatherHeaderBox = document.getElementById('weather-header-box');
    if (!weatherHeaderBox) return;
    weatherHeaderBox.innerHTML = '<div class="loading-spinner">Lade Wetter...</div>';
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${CITY},${COUNTRY}&appid=${WEATHER_API_KEY}&lang=de`)
        .then(response => response.json())
        .then(data => {
            const temp = kelvinToCelsius(data.main.temp);
            const desc = data.weather[0].description;
            const weatherId = data.weather[0].id;
            const emoji = getWeatherEmoji(weatherId);
            weatherHeaderBox.innerHTML = `
                <div class="weather-info weather-header-compact">
                    <div class="weather-main-display">
                        <span class="weather-emoji">${emoji}</span>
                        <span class="weather-temp">${temp}°C</span>
                        <span class="weather-city">Bern, Schweiz</span>
                    </div>
                    <div class="weather-details-hover">
                        <div class="weather-desc">${desc}</div>
                    </div>
                </div>
            `;
        })
        .catch(() => {
            weatherHeaderBox.innerHTML = '<div class="error-message">Wetterdaten nicht verfügbar</div>';
        });
}

document.addEventListener('DOMContentLoaded', () => {
    renderWeatherInHeader();
});
