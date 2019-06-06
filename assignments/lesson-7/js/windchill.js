/*Input: Get temp and windspeed*/
let t = parseInt(document.getElementById('temp').innerHTML);
let s = parseInt(document.getElementById('windspeed').innerHTML);
/*Processing: compute wind chill*/
var f = 35.74 + 0.6215 * t - (35.75 * Math.pow(s, .16)) + (.4275 * t * Math.pow(s, .16));
/*Output: wind chill rounded to whole number*/
document.getElementById('output').innerHTML = "Wind Chill:" + f.toFixed(0) + "&#8457";