var header = document.querySelector("header");
var section= document.querySelector("section");

var requestURL= "https://byui-cit230.github.io/weather/data/towndata.json";

var request= new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
    var townInfo = request.response;
    populateHeader(data);
    showData(townInfo);
}

function showData(jsonObj) {
var info = jsonObj["towns"];
var currentTown = document.querySelector("name").innerHTML.split("")[0];
  
for (var i = 0; i < info.length; i++) {

    if(town[i].name == currentTown) {
    var myArticle = document.createElement("article");
    var myH2 = document.createElement('h2');
    var myH3 = document.createElement('h3');
    var myPara1 = document.createElement('p');
    var myPara2 = document.createElement('p');
    var myPara3 = document.createElement('p');

    myH2.textContent = info[i].name;
    myH3.textContent = '' + info[i].motto;
    myPara1.textContent = 'Year Founded: ' + info[i].yearFounded;
    myPara2.textContent = 'Current Population: ' + info[i].currentPopulation;
    myPara3.textContent = 'Average Rainfall: ' + info[i].averageRainfall;

    myH2.appendChild(myH2);
    myH3.appendChild(myH3);
    myPara1.appendChild(myPara1);
    myPara2.appendChild(myPara2);
    myPara3.appendChild(myPara3);
    }


}

}