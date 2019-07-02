var requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

var request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json";
request.send();
request.onload = function() {
    var towninfo = request.response;
    console.log(towninfo);
    showData(towninfo);
}

function showData(jsonObj) {
var towns = jsonObj["towns"];
var ul = document.getElementById("events");

for (var i = 0; i < towns.length; i++) {

    if (towns[i].name == "Preston") {          
    //var myList = document.createElement('li');
    var townEvents = towns[i].events;
    for (var j= 0; j < townEvents.length; j++) {
        var listItem = document.createElement('li');
        listItem.textContent= townEvents[j];

    ul.appendChild(listItem);
    }
    //myList.textContent = towns[i].events;
    //document.getElementById('events').innerHTML = towns[i].events;
    /*var townname = document.getElementById(events);
   

    varnewp = document.createElement('p');
    newp.textContent = info[i].events;
    townname.appendChild(newp);*/
    }


}

}
