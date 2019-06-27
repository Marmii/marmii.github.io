var header = document.querySelector("header");
var section = document.querySelector("section");

var requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

var request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json";
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
    var string = "";
    for (var j= 0; j< info[i].name.length; j++){
        if (info[i].name.charAt(j) != " "){
            string += info[i].name.charAt(j);
        }
    }            
    console.log(string);
   

    varnewH3 = document.createElement('h3');
    newH3.textContent = info[i].events;
    townname.appendChild(newH3);
    
    

    
    }


}

}