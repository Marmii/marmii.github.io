var requestURL = "https://marmii.github.io/assignments/final/temple-data.json";

var request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json";
request.send();
request.onload = function() {
    var listinfo = request.response;
    console.log(listinfo);
    showData(listinfo);
}

function showData(jsonObj) {
var temples = jsonObj["temples"];


for (var i = 0; i < towns.length; i++) {

    if (temples[i].name == "Brigham City" ||
        temples[i].name == "Logan" ||
        temples[i].name == "Star Valley" ||
        temples[i].name == "Ogden") 
        {          
    //var myList = document.createElement('li');
    var templeServices = temples[i].services;
    var ul = document.getElementById("services");
    for (var j= 0; j < templeServices.length; j++) {
        var listItem = document.createElement('li');
        listItem.textContent= templeServices[j];

    ul.appendChild(listItem);
    }
    var templeSchedule = temples[i].schedule;
    var ul = document.getElementById("schedule");
    for (var k= 0; k < templeSchedule.length; k++){
        var listItem2 = document.createElement('li');
        listItem2.textContent= templeSchedule[k];
    
    ul.appendChild(listItem2);
    }

    var templeClosures = temples[i].closures;
    var ul = document.getElementById("closures");
    for(var l = 0; l < templeClosures.length; l++){
        var listItem3 = document.createElement('li');
        listItem3.textContent = templeClosures[l];
    
    ul.appendChild(listItem3);
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
