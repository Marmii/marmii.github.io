var figure = document.querySelector("figure");
//var section = document.querySelector("section");

var requestURL = "https://marmii.github.io/assignments/final/temple-data.json";

var request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json";
request.send();
request.onload = function() {
    var templeInfo = request.response;
    showData(templeInfo);
}

function showData(jsonObj) {
var info = jsonObj["temples"];

for (var i = 0; i < info.length; i++) {

    if(info[i].name == "Brigham City" ||
          info[i].name == "Logan" ||
          info[i].name == "Ogden" ||
          info[i].name == "Star Valley") 
          {
    var string = "";
    for (var j= 0; j< info[i].name.length; j++){
        if (info[i].name.charAt(j) != " "){
            string += info[i].name.charAt(j);
        }
    }           
    console.log(string);
    var templename = document.getElementById(string);
    var myH2 = document.createElement('h2');
    myH2.textContent = info[i].name;
    templename.appendChild(myH2);
        
    var myArticle = document.createElement("article");
   
    console.log(myH2);
    var myPara1 = document.createElement('p');
    var myPara2 = document.createElement('p');
    var myPara3 = document.createElement('p');
    var myPara4 = document.createElement('p');
    var myPara5 = document.createElement('p');
    var myPara6 = document.createElement('p');
    var myPara7 = document.createElement('p');

    
    myPara1.textContent = "Telephone: " + info[i].telephone;
    myPara2.textContent = "Address: " + info[i].address;
    myPara3.textContent = "Year Dedicated: " + info[i].yearDedicated;
    myPara4.textContent = "E-mail: " + info[i].e-mail;
    myPara5.textContent = "Services: " + info[i].services;
    myPara6.textContent = "Schedule: " + info[i].schedule;
    myPara7.textContent = "Upcoming Closures: " + info[i].closures;
    
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myPara4);
    myArticle.appendChild(myPara5);
    myArticle.appendChild(myPara6);
    myArticle.appendChild(myPara7);

    templename.appendChild(myArticle);
    
    

    
    }


}

}