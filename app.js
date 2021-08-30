//Key 
async function loadCityWeather() {
    const searchCityInput = document.getElementById('search-input');
    const searchCity = searchCityInput.value;
    const APIKey = '68f746d17402acc8319d1171bb4ccf28';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${APIKey}`;
    try {
        const res = await fetch(url);
        const data = await res.json();
        displayWeatherData(data);
    }
    catch (error) {
        console.log(error);
    }
}

function displayWeatherData(weather) {
    const displayResult = document.getElementById('display-result');
    displayResult.innerHTML =
        `
        <h3 class="text-white text-center mt-4">${weather.name}</h3>
        <h4 class="text-white text-center mt-2">${FahrenheitTOCentigrade(weather.main.temp)}</h4>
        <img src="" alt="">`;
}

const FahrenheitTOCentigrade = temperature => {
    let fTemp = parseFloat(temperature);
    let fToCel = (fTemp -273.15);   
    return fToCel.toFixed(2);
}
