var ul = document.getElementById("events");

var requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

var request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json";
request.send();
request.onload = function() {
    var towninfo = JSON.parse(request.response);
    console.log(towninfo);
    //showData(towninfo);
}

function showData(jsonObj) {
var towns = jsonObj["towns"];
var myPara = document.createElement('p');
for (var i = 0; i < towns.length; i++) {

    if (towns[i].name == "Preston") {          
    //var myList = document.createElement('li');
    var townEvents = towns[i].events;
    for (var j= 0; j < townEvents.length; j++) {
        var listItem = document.createElement('li');
        var o = townEvents[j];
        listItem.appendChild(document.createTextNode(o.title));

    ul.appendChild(li);
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
