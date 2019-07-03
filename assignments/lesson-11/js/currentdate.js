function currentDate() {
    var mydate = new Date();
    var dayarray = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
    var weekday = dayarray[mydate.getDay()];
    var day = mydate.getDate();
    var montharray = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
    var month = montharray[mydate.getMonth()];
    
        if(year < 1000){
            year +=1900
            var year = mydate.getYear();
        }
    var fulldate = weekday + "," + month + " " + day + " " + year;
    
   
    document.getElementById("today").innerHTML = fulldate;
    
}
currentDate();