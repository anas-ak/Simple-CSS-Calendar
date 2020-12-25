var d = new Date();
var n_year = d.getFullYear();
var n_month = new Array();

n_month[0] = "January";
n_month[1] = "February";
n_month[2] = "March";
n_month[3] = "April";
n_month[4] = "May";
n_month[5] = "June";
n_month[6] = "July";
n_month[7] = "August";
n_month[8] = "September";
n_month[9] = "October";
n_month[10] = "November";
n_month[11] = "December";
var theMonth = n_month[d.getMonth()];

document.getElementById("demo").innerHTML = n_year;
document.getElementById("month").innerHTML = theMonth;