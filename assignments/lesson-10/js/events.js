var span = document.querySelector("events");

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
var towns = jsonObj["towns"];

for (var i = 0; i < towns.length; i++) {

    if (info[i].name == "Preston") {          
    //var upcoming = document.getElementById(info[i].events);
    var myList = document.createElement('ul');
    var townEvents = towns[i].events;
    for (var j= 0; j < townEvents.length; j++) {
        var listItem = document.createElement('li');
        listItem.textContent = townEvents[j];
        myList.appendChild(listItem);
    }
    myList.textContent = info[i].events;
    myArticle.appendChild(myList);
    section.appendChild(myArticle);
    //document.getElementById('events').innerHTML = info.events;
    /*var townname = document.getElementById(events);
   

    varnewp = document.createElement('p');
    newp.textContent = info[i].events;
    townname.appendChild(newp);*/
    }


}

}