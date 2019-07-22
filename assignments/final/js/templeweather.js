let weatherRequest = new XMLHttpRequest();
let apiURLstring = 'https://api.openweathermap.org/data/2.5/group?id=5771960&units=imperial&APPID=b6dcbfd399dcaf20477af22ae69192c2';
weatherRequest.open('Get', apiURLstring, true);
weatherRequest.send();

weatherRequest.onload = function() {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);

    document.getElementById('btemp').innerHTML = weatherData.list[0].main.temp;
    document.getElementById('bcurrent').innerHTML = weatherData.list[0].weather[0].description;
}
let currentRequest = new XMLHttpRequest();
let apiURLstring1 = 'https://api.openweathermap.org/data/2.5/group?id=5476526&units=imperial&APPID=b6dcbfd399dcaf20477af22ae69192c2';
currentRequest.open('Get', apiURLstring1, true);
currentRequest.send();
    
currentRequest.onload = function() {
    let currentData = JSON.parse(currentRequest.responseText);
    console.log(currentData);

    document.getElementById('ltemp').innerHTML = currentData.list[0].main.temp;
    document.getElementById('lcurrent').innerHTML = currentData.list[0].weather[0].description;
}
let starRequest = new XMLHttpRequest();
let apiURLstring2 = 'https://api.openweathermap.org/data/2.5/group?id=5315713&units=imperial&APPID=b6dcbfd399dcaf20477af22ae69192c2';
starRequest.open('Get', apiURLstring2, true);
starRequest.send();
    
starRequest.onload = function() {
    let starData = JSON.parse(starRequest.responseText);
    console.log(starData);

    document.getElementById('stemp').innerHTML = starData.list[0].main.temp;
    document.getElementById('scurrent').innerHTML = starData.list[0].weather[0].description;
}
let ogdenRequest = new XMLHttpRequest();
let apiURLstring3 = 'https://api.openweathermap.org/data/2.5/group?id=5779036&units=imperial&APPID=b6dcbfd399dcaf20477af22ae69192c2';
ogdenRequest.open('Get', apiURLstring3, true);
ogdenRequest.send();
    
ogdenRequest.onload = function() {
    let ogdenData = JSON.parse(ogdenRequest.responseText);
    console.log(ogdenData);


    document.getElementById('otemp').innerHTML = ogdenData.list[0].main.temp;
    document.getElementById('ocurrent').innerHTML = ogdenData.list[0].weather[0].description;

    /*Input: Get temp and current Conditions*/
    /*
parseInt(document.getElementById('temp').innerHTML);
parseInt(document.getElementById('current').innerHTML);

parseInt(document.getElementById('temp').innerHTML);
parseInt(document.getElementById('current').innerHTML);

parseInt(document.getElementById('temp').innerHTML);
parseInt(document.getElementById('current').innerHTML);

parseInt(document.getElementById('temp').innerHTML);
parseInt(document.getElementById('current').innerHTML);

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