
// Get Milliseconds Below Tow Date 
var smaple_date = "2020-07-21";
var current_date = new Date();

var view_milli = "Sample Date Milliseconds: "+Date.parse(sample_date)+"| Current Date Milliseconds: "+Date.parse(current_date);
document.write(view_milli);

// Get Date Below Two Milliseconds
var sample_milli = Date.parse(sample_date);
var current_milli = Date.parse(current_date);

var view_date = "Sample Milliseconds Date: "+ new Date(sample_milli) + "| Current Milliseconds Date: "+ new Date(current_milli);
document.write(view_date);