var header = document.querySelector("header");
var section = document.querySelector("section");

var requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

var request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
    var townInfo = request.response;
    showData(townInfo);
}

function showData(jsonObj) {
var info = jsonObj["towns"];

for (var i = 0; i < info.length; i++) {

    if(info[i].name == "Preston" ||
          info[i].name == "Fish Haven" ||
          info[i].name == "Soda Springs") 
          {
    var townname = document.getElementById(info[i].name);
    var myH2 = document.createElement('h2');
    myH2.textContent = info[i].name;
    townname.appendChild(myH2);

    var myH3 = document.createElement('h3');
    myH3.textContent = '' + info[i].motto;
    myH3.appendChild(myH3);
        

    var myArticle = document.createElement("article");
   
    
    var myPara1 = document.createElement('p');
    var myPara2 = document.createElement('p');
    var myPara3 = document.createElement('p');

    
   
    myPara1.textContent = 'Year Founded: ' + info[i].yearFounded;
    myPara2.textContent = 'Current Population: ' + info[i].currentPopulation;
    myPara3.textContent = 'Average Rainfall: ' + info[i].averageRainfallj + "in.";
    
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    //townname.appendChild(myArticle);

    
    }


}

}