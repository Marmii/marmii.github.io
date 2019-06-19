var section = document.querySelector('section');
var requestURL= 'https://byui-cit230.github.io/weather/data/towndata.json';
var request= new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
    var townInfo = request.response;
    townData(townInfo);
}

function townData(jsonObj) {
var info = jsonObj['towns'];
  
for (var i = 0; i < info.length; i++) {
var myH2 = document.createElement('h2');
var myH3 = document.createElement('h3');
var myPara1 = document.createElement('p');
var myPara2 = document.createElement('p');
var myPara3 = document.createElement('p');

myH2.textContent = towns[i].name;
myH3.textContent = '' + towns[i].motto;
myPara1.textContent = 'Year Founded: ' + towns[i].yearFounded;
myPara2.textContent = 'Current Population: ' + towns[i].currentPopulation;
myPara3.textContent = 'Average Rainfall: ' + towns[i].averageRainfall;

}

myArticle.appendChild(myH2);
myArticle.appendChild(myH3);
myArticle.appendChild(myPara1);
myArticle.appendChild(myPara2);
myArticle.appendChild(myPara3);

section.appendChild(myArticle);


}