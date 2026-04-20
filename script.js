const apiKey = "d7373c8b7a93dd1b0ae077c9002b39fc";

changeColor.addEventListener("Click", changeColor);

async function getWeather() {
    const cityName = document.getElementById("city").value.trim();
    const resultDiv = document.getElementById("result");
    const errorDiv = document.getElementById("error");
    
    resultDiv.innerHTML = "";
    errorDiv.innerHTML = "";

    if (cityName === "") {
        errorDiv.innerHTML = "⚠ Please enter a city name";
        return;
    }   
    try {

        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
        );

        if (!response.ok) {
            throw new Error("City not found");
        }

        const data = await response.json();

        resultDiv.innerHTML = `

// <p><b>${data.name}</b></p>
// <p>🌡 Temperature: ${data.main.temp} °C</p>
// <p>🌥 Condition: ${data.weather[0].description}</p>
// `;
//         saveHistory(cityName);
//     } catch (error) {
//         errorDiv.innerHTML = "❌ " + error.message;
//     }
// }

// function saveHistory(city) {
//     let cities = JSON.parse(localStorage.getItem("cities")) || [];

//     if (!cities.includes(city)) {
//         cities.push(city);
//         localStorage.setItem("cities", JSON.stringify(cities));
//     }

//     loadHistory();
// }

// function loadHistory() {
//     const historyDiv = document.getElementById("history");
//     historyDiv.innerHTML = "";

//     let cities = JSON.parse(localStorage.getItem("cities")) || [];

//     for (let i = 0; i < cities.length; i++) {

//         let span = document.createElement("span");

//         span.innerText = cities[i];
//         span.className = "history-item";
//         span.onclick = function () {

//             document.getElementById("city").value = cities[i];
//             getWeather();
//         };
//         historyDiv.appendChild(span);
//     }
// }

// function clearHistory() {
//     localStorage.removeItem("cities");
//     document.getElementById("history").innerHTML = "";
// }

// loadHistory();
