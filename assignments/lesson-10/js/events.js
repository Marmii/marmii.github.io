//var span = document.querySelector("span");

var requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

var request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json";
request.send();
request.onload = function() {
    var towninfo = request.response;
    showData(towninfo);
}

function showData(jsonObj) {
var info = jsonObj["towns"];

for (var i = 0; i < info.length; i++) {

    if (info[i].name == "Preston") {          
    console.log(info[i].events);
    var upcoming = document.getElementById(info[i].events);
    var mypara = document.createElement('p');
    mypara.textContent = info[i].events;
    upcoming.appendChild(mypara);
    //document.getElementById('events').innerHTML = info.events;
    /*var townname = document.getElementById(events);
   

    varnewp = document.createElement('p');
    newp.textContent = info[i].events;
    townname.appendChild(newp);*/
    }


}

}