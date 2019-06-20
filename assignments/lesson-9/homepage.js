var cityInfo = document.getElementById("cityinfo");
var requestURL= "https://marmii.github.io/assignments/lesson-9/towndata.json";
//var requestURL= "https://byui-cit230.github.io/weather/data/towndata.json";

var request= new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
    var townInfo = request.response;
    showData(townInfo);
}

function showData(jsonObj) {
var info = jsonObj["towns"];
var currentTown = document.querySelector("title").innerHTML.split("")[0];
  
for (var i = 0; i < info.length; i++) {

    if(town[i].name == currentTown) {

    var myH2 = document.createElement('h2');
    var myH3 = document.createElement('h3');
    var myPara1 = document.createElement('p');
    var myPara2 = document.createElement('p');
    var myPara3 = document.createElement('p');
    var myImage = document.createElement('img');

    myH2.textContent = info[i].name;
    myH3.textContent = '' + info[i].motto;
    myPara1.textContent = 'Year Founded: ' + info[i].yearFounded;
    myPara2.textContent = 'Current Population: ' + info[i].currentPopulation;
    myPara3.textContent = 'Average Rainfall: ' + info[i].averageRainfall;
    myImage.img.src = "https://marmii.github.io/assignments/lesson-9/preston.jpg";

    cityInfo.appendChild(myH2);
    cityInfo.appendChild(myH3);
    cityInfo.appendChild(myPara1);
    cityInfo.appendChild(myPara2);
    cityInfo.appendChild(myPara3);
    cityInfo.appendChild(myImage);


    }


}

}