// What time of day is it?

var date = new Date();

var hour = date.getHours();
// minutes = date.getMinutes();

var morningRange = _.range(5,11);
var afternoonRange = _.range(12, 16);
var eveningRange1 = _.range(17, 23);
var eveningRange2 = _.range(0, 4);

var status = ""

if hour in morningRange {
    status = "Good morning!"
}
else if hour in afternoonRange {
    status = "Good afternoon!"
}
else if hour in eveningRange1 || hour in eveningRange2 {
    status = "Good evening!"
}


document.getElementById("greeting").innerHTML = status