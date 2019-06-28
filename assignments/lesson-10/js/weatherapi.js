var forecastRequest = new XMLHttpRequest();
var apiURLstring = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=b6dcbfd399dcaf20477af22ae69192c2';
forecastRequest.open('Get', apiURLstring, true);
forecastRequest.send();

forecastRequest.onload = function() {
    var weatherData = JSON.parse(forecastRequest.responseText);
    console.log(weatherData);

    document.getElementById('day1').innerHTML = weatherData.list[0].main.temp;
    document.getElementById('day2').innerHTML = weatherDate.list[0].main.temp;
    document.getElementById('day3').innerHTML = weatherDate.list[0].main.temp;
    document.getElementById('day4').innerHTML = weatherDate.list[0].main.temp;
    document.getElementById('day5').innerHTML = weatherDate.list[0].main.temp;

    var icon = 'https://openweathermap.org/img/w/' + weatherData.weather["0"].icon + ".png";
    var desc = weatherData.weather[0].description;
    document.getElementById('weatherimage').scroll = icon;
    
    document.getElementById('weatherimage').setAttribute('src', icon);
    document.getElementById('weatherimage').setAttribute('alt', desc);
}