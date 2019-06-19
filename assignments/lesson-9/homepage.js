var section = document.querySelector('section');
var requestURL= 'https://byui-cit230.github.io/weather/data/towndata.json';
var request= new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

function townData(jsonObj) {
var towndata = jsonObj['towns'];
  
for (var i = 0; i < towns.length; i++) {
var townName = document.createElement('h2');
var townMotto = document.createElement('h3');
var yearFounded = document.createElement('p');
var currentPopulation = document.createElement('p');
var averageRainfall = document.createElement('p');

townName.textContent = towns[i].name;
townMotto.textContent = '' + towns[i].motto;
yearFounded.textContent = 'Year Founded: ' + towns[i].yearFounded;
currentPopulation.textContent = 'Current Population: ' + towns[i].currentPopulation;
averageRainfall.textContent = 'Average Rainfall: ' + towns[i].averageRainfall;

}

}