var forecastRequest = new XMLHttpRequest();
var apiString = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=b6dcbfd399dcaf20477af22ae69192c2';
forecastRequest.open('Get', apiURLstring, true);
forecastRequest.send();

forecastRequest.onload = function() {
    var weatherData = JSON.parse(forecastRequest.responseText);
    console.log(weatherData);

    document.getElementById('day1').innerHTML = weatherData.list[7].main.temp;
    document.getElementById('day2').innerHTML = weatherData.list[14].main.temp;
    document.getElementById('day3').innerHTML = weatherData.list[22].main.temp;
    document.getElementById('day4').innerHTML = weatherData.list[31].main.temp;
    document.getElementById('day5').innerHTML = weatherData.list[39].main.temp;

   for (var i = 0; i < weatherData.length; i++){
        if(weatherData.list[i].dt_txt.search('18:00:00') != -1){
           document.getElementById('day1').innerHTML = weatherData.list[i].main.temp;

     var icon = 'https://openweathermap.org/img/wn/' + weatherData.list[7].weather[0].icon + ".png";
     var desc = weatherData.list[7].weather[0].description;
     document.getElementById('weatherimage1').scroll = icon;
            
     document.getElementById('weatherimage1').setAttribute('src', icon);
     document.getElementById('weatherimage1').setAttribute('alt', desc);
   

    var icon = 'https://openweathermap.org/img/wn/' + weatherData.list[15].weather[0].icon + ".png";
    var desc = weatherData.list[15].weather[0].description;
    document.getElementById('weatherimage2').scroll = icon;
    
    document.getElementById('weatherimage2').setAttribute('src', icon);
    document.getElementById('weatherimage2').setAttribute('alt', desc);

    var icon = 'https://openweathermap.org/img/wn/' + weatherData.list[23].weather[0].icon + ".png";
    var desc = weatherData.list[23].weather[0].description;
    document.getElementById('weatherimage3').scroll = icon;
    
    document.getElementById('weatherimage3').setAttribute('src', icon);
    document.getElementById('weatherimage3').setAttribute('alt', desc);

    var icon = 'https://openweathermap.org/img/wn/' + weatherData.list[31].weather[0].icon + ".png";
    var desc = weatherData.list[31].weather[0].description;
    document.getElementById('weatherimage4').scroll = icon;
    
    document.getElementById('weatherimage4').setAttribute('src', icon);
    document.getElementById('weatherimage4').setAttribute('alt', desc);

    var icon = 'https://openweathermap.org/img/wn/' + weatherData.list[39].weather[0].icon + ".png";
    var desc = weatherData.list[39].weather[0].description;
    document.getElementById('weatherimage5').scroll = icon;
    
    document.getElementById('weatherimage5').setAttribute('src', icon);
    document.getElementById('weatherimage5').setAttribute('alt', desc);
}