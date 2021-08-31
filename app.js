//****************************************************************************
//            Async Function For Loading City Weather Data
async function loadCityWeather() {
    const searchCityInput = document.getElementById('search-input');
    const searchCity = searchCityInput.value;
    const APIKey = '68f746d17402acc8319d1171bb4ccf28';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${APIKey}`;
    try {
        const res = await fetch(url);
        const data = await res.json();
        displayWeatherData(data);
        console.log(data);
    }
    catch (error) {
        console.log(error);
    }
}


//****************************************************************************
//                  Display Weather Data to HTML
function displayWeatherData(weather) {
    const displayResult = document.getElementById('display-result');    
    displayResult.innerHTML =
        `
        <h3 class="text-white text-center mt-4">${weather.name}</h3>
        <h1 class="text-white text-center mt-2">${KelvinTOCentigrade(weather.main.temp)}&#176;</h1>
        <div class="weather-icon-div mt-3">
           <div>
                <img class="weather-icon" src="https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png" alt="">
                <p>${weather.weather[0].main}</p>
           </div>
        </div>`;
}


//****************************************************************************
//                      Convert Kelvin to Cel
const KelvinTOCentigrade = temperature => {
    let kelvin = parseFloat(temperature);
    let centigrade = (kelvin -273.15);   
    return centigrade.toFixed(2);
}
