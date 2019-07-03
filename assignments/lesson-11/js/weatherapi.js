function dayName(today) {
   var weekdays = [
      "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];
   var day = weekdays[today];
   return day;
}

var thead = document.querySelector("table");
var tbody = document.querySelector("table");

var forecastRequest = new XMLHttpRequest();
var apiURLString1 = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=b6dcbfd399dcaf20477af22ae69192c2';
forecastRequest.open('Get', apiURLstring1, true);
forecastRequest.send();

forecastRequest.onload = function() {
    var weatherData = JSON.parse(forecastRequest.responseText);
    console.log(weatherData);

    var date = new Date();
    var today = date.getDay();

    var list = weatherData.list;
    var row1 = document.createElement("tr");
    var row2 = document.createElement("tr");

    for (i = 0; i < list.length; i++) {
       var theader = document.createElement("th");
       var tdata1 = document.createElement("td");
       //var tdata2 = document.createElement("td");
       var img = document.createElement("img");
    
        if(list[i].dt_txt.includes("18:00:00")) {
           console.log("gotcha");

           if(today == 7) {
              today = 0;
           }
           var dayname = dayName(today);
           today++;

           var temp = list[i].main.temp;
           var sun = "https://openweathermap.org/img/w/" + list[i].weather[0].icon + ".png";
           var description = list[i].weather[0].description;

           thead.textContent = dayname;
           img.setAttribute("src", sun);
           img.setAttribute("alt", description);
           tdata1.appendChild(img);
           tdata1.textContent = temp + "&#8457";

           row1.appendChild(theader);
           row2.appendChild(tdata1);
         }
         thead.appendChild(row1);
         tbody.appendChild(row2)
      }
   };
