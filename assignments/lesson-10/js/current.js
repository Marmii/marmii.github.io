let weatherRequest = new XMLHttpRequest();
let apiURLstring = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=b6dcbfd399dcaf20477af22ae69192c2';
weatherRequest.open('Get', apiURLstring, true);
weatherRequest.send();

weatherRequest.onload = function() {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);

    document.getElementById('temp').innerHTML = weatherData.main.temp;
    document.getElementById('current').innerHTML = weatherData.weather.description;
    document.getElementById('humidity').innerHTML = weatherData.main.humidity;
    document.getElementById('windspeed').innerHTML = weatherData.wind.speed;
    
 let desc = weatherData.weather[0].description;
    let icon = "https://openweathermap.org/img/w/" + weatherData.weather[0].icon + ".png";
    document.getElementById('cc-img').setAttribute('src', icon);
    document.getElementById('cc-img').setAttribute('alt', desc);
}