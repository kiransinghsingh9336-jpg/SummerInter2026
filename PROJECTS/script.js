const apiKey = "83fe74507c0d0eaa2535ee75494f6aad";

async function getWeather() {
    let city = document.getElementById("city").value;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        document.getElementById("result").innerHTML = `
<h2>${data.name}</h2>
<p>🌡️ Temperature: ${data.main.temp} °C</p>
<p>☁️ Weather: ${data.weather[0].main}</p>
<p>💧 Humidity: ${data.main.humidity}%</p>
<p>💨 Wind Speed: ${data.wind.speed} m/s</p>
`;

    } catch (error) {
        alert(error.message);
    }
}