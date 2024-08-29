const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
const weatherInfo = document.getElementById('weatherInfo');
const locationName = document.getElementById('locationName');
const temperature = document.getElementById('temperature');
const weatherCondition = document.getElementById('weatherCondition');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('windSpeed');

document.getElementById('fetchWeatherButton').addEventListener('click', () => {
    const location = document.getElementById('locationInput').value;
    if (location) {
        fetchWeather(location);
    }
});

function fetchWeather(location) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                displayWeather(data);
            } else {
                alert('Location not found');
                clearWeather();
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('Error fetching weather data');
        });
}

function displayWeather(data) {
    locationName.textContent = `Location: ${data.name}`;
    temperature.textContent = `Temperature: ${data.main.temp} °C`;
    weatherCondition.textContent = `Condition: ${data.weather[0].description}`;
    humidity.textContent = `Humidity: ${data.main.humidity}%`;
    windSpeed.textContent = `Wind Speed: ${data.wind.speed} m/s`;
    weatherInfo.style.display = 'block';
}

function clearWeather() {
    locationName.textContent = '';
    temperature.textContent = '';
    weatherCondition.textContent = '';
    humidity.textContent = '';
    windSpeed.textContent = '';
    weatherInfo.style.display = 'none';
}
