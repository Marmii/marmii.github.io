//gets the next 5 days of the week
function dayName(today) {
   var weekdays = [
      "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];
   var day = weekdays[today];
   return day;
}
//finds the table tag in the document
var thead = document.querySelector("table");
var tbody = document.querySelector("table");
//grabs the api information and sends it to the function
var forecastRequest = new XMLHttpRequest();
var apiURLString1 = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=b6dcbfd399dcaf20477af22ae69192c2";
forecastRequest.open("Get", apiURLString1, true);
forecastRequest.send();
//tells the browser to run the function onloading
forecastRequest.onload = function() {
    var weatherData = JSON.parse(forecastRequest.responseText);
    console.log(weatherData);
//creates variables to hold the information going into the table
    var date = new Date();
    var today = date.getDay();

    var list = weatherData.list;
    var row1 = document.createElement("tr");
    var row2 = document.createElement("tr");
    var row3 = document.createElement("tr");
//runs a for loop to find the information listed in the 18:00 spot of the JSON
//also creates new elements to hold that information
    for (i = 0; i < list.length; i++) {
       var theader = document.createElement("th");
       var tdata1 = document.createElement("td");
       var tdata2 = document.createElement("td");
       var img = document.createElement("img");
    
        if(list[i].dt_txt.includes("18:00:00")) {
           
//Starts the week over if it's Sunday
           if(today == 7) {
              today = 0;
           }
//puts the name of the day in place of the number
           var dayname = dayName(today);
           today++;
//grabs the temp, icon, and description from the list and stores them in var temp, sun, and description
           var temp = list[i].main.temp;
           var sun = "https://openweathermap.org/img/w/" + list[i].weather[0].icon + ".png";
           var description = list[i].weather[0].description;
//Applies the day name as text, gives an alt tag and src tag to icon
//adds image to table as well as temp
           theader.textContent = dayname;
           img.setAttribute("src", sun);
           img.setAttribute("alt", description);
           tdata1.appendChild(img);
           Math.round(temp);
           tdata2.textContent = temp.toFixed(0) + "\xB0F";
//makes it a 3 row table
           row1.appendChild(theader);
           row2.appendChild(tdata1);
           row3.appendChild(tdata2);
         }
//
         thead.appendChild(row1);
         tbody.appendChild(row2);
         tbody.appendChild(row3);
      }
   }