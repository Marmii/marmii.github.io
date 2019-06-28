var forecastRequest = new XMLHttpRequest();
var apiString = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=b6dcbfd399dcaf20477af22ae69192c2';
forecastRequest.open('Get', apiURLstring, true);
forecastRequest.send();

forecastRequest.onload = function() {
    var weatherData = JSON.parse(forecastRequest.responseText);
    console.log(weatherData);

    document.getElementById('day1').innerHTML = weatherData.list[7].main.temp;
    document.getElementById('day2').innerHTML = weatherData.list[15].main.temp;
    document.getElementById('day3').innerHTML = weatherData.list[23].main.temp;
    document.getElementById('day4').innerHTML = weatherData.list[31].main.temp;
    document.getElementById('day5').innerHTML = weatherData.list[39].main.temp;

    var icon = 'https://openweathermap.org/img/wn/' + weatherData.list[7].weather[0].icon + ".png";
    var desc = weatherData.list[7].weather.description;
    document.getElementById('weatherimage').scroll = icon;
    
    document.getElementById('weatherimage').setAttribute('src', icon);
    document.getElementById('weatherimage').setAttribute('alt', desc);

    var icon = 'https://openweathermap.org/img/wn/' + weatherData.list[15].weather[0].icon + ".png";
    var desc = weatherData.list[7].weather.description;
    document.getElementById('weatherimage').scroll = icon;
    
    document.getElementById('weatherimage').setAttribute('src', icon);
    document.getElementById('weatherimage').setAttribute('alt', desc);

    var icon = 'https://openweathermap.org/img/wn/' + weatherData.list[23].weather[0].icon + ".png";
    var desc = weatherData.list[7].weather.description;
    document.getElementById('weatherimage').scroll = icon;
    
    document.getElementById('weatherimage').setAttribute('src', icon);
    document.getElementById('weatherimage').setAttribute('alt', desc);

    var icon = 'https://openweathermap.org/img/wn/' + weatherData.list[31].weather[0].icon + ".png";
    var desc = weatherData.list[7].weather.description;
    document.getElementById('weatherimage').scroll = icon;
    
    document.getElementById('weatherimage').setAttribute('src', icon);
    document.getElementById('weatherimage').setAttribute('alt', desc);

    var icon = 'https://openweathermap.org/img/wn/' + weatherData.list[39].weather[0].icon + ".png";
    var desc = weatherData.list[7].weather.description;
    document.getElementById('weatherimage').scroll = icon;
    
    document.getElementById('weatherimage').setAttribute('src', icon);
    document.getElementById('weatherimage').setAttribute('alt', desc);
}