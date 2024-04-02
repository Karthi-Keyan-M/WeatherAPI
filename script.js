function getWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = '63112f9cb69549d8b5e122529240104'; 
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `
                <h2>${data.location.name}, ${data.location.country}</h2>
                <p>Temperature: ${data.current.temp_c}°C</p>
                <p>Wind: ${data.current.wind_kph} km/h, ${data.current.wind_dir}</p>
            `;
        })
        .catch(error => {
            console.log('Error fetching weather data:', error);
        });
}