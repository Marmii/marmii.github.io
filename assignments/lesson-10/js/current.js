let weatherRequest = new XMLHttpRequest();
let apiURLstring = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=b6dcbfd399dcaf20477af22ae69192c2';
weatherRequest.open('Get', apiURLstring, true);
weatherRequest.send();

weatherRequest.onload = function() {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);

    document.getElementById('temp').innerHTML = weatherData.list[0].main.temp;
    document.getElementById('current').innerHTML = weatherData.list[0].weather[0].description;
    document.getElementById('humidity').innerHTML = weatherData.list[0].main.humidity;
    document.getElementById('windspeed').innerHTML = weatherData.list[0].wind.speed;

    /*Input: Get temp and windspeed*/
let t = parseInt(document.getElementById('temp').innerHTML);
let s = parseInt(document.getElementById('windspeed').innerHTML);
/*Processing: compute wind chill*/
var f = 35.74 + 0.6215 * t - (35.75 * Math.pow(s, .16)) + (.4275 * t * Math.pow(s, .16));
/*Output: wind chill rounded to whole number*/
document.getElementById('output').innerHTML = "Wind Chill:" + f.toFixed(0) + "&#8457";

/*for (var i= 0; i< weatherData.list.length; i++){
    if (weatherData.list.dt_txt.includes = "18:00:00"){
        document.getElementById('day1').innerHTML = var i;
        
    }
}        

    let desc = weatherData.weather[0].description;
    let icon = "https://openweathermap.org/img/w/" + weatherData.weather[0].icon + ".png";
    document.getElementById('cc-img').setAttribute('src', icon);
    document.getElementById('cc-img').setAttribute('alt', desc);*/
}