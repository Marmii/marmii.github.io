let weatherRequest = new XMLHttpRequest();
let apiURLstring = 'https://api.openweathermap.org/data/2.5/group?id=5771960,5476526,5315713,5779036&units=imperial&APPID=b6dcbfd399dcaf20477af22ae69192c2';
weatherRequest.open('Get', apiURLstring, true);
weatherRequest.send();

weatherRequest.onload = function() {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);

    document.getElementById('temp').innerHTML = weatherData.list[0].main.temp;
    document.getElementById('current').innerHTML = weatherData.list[0].weather[0].description;

    /*Input: Get temp and windspeed*/
let t = parseInt(document.getElementById('temp').innerHTML);
let s = parseInt(document.getElementById('current').innerHTML);

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