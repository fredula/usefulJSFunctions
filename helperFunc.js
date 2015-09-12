//------------------------------------------------------
// load() event
// a few ways to do this:
//------------------------------------------------------

window.addEventListener(load, onLoadHandler, false);

function onLoadHandler(){
	//do something here
};

window.onload = function(){
	//do something here
};

window.onload = onLoadHandler;


//------------------------------------------------------
// load() event
// a few ways to do this:
//------------------------------------------------------


//------------------------------------------------------
// angle converter
//------------------------------------------------------

function rad2deg(rad){
	var degree = radians * 180/Math.PI;
	return degree;
}

function deg2rad(deg){
	var radians = deg * Math.PI/180;
	return radians;
}

//------------------------------------------------------
// angle converter
//------------------------------------------------------


//------------------------------------------------------
// grid layout
// cool for doing grid layouts. Aligning items
//------------------------------------------------------

for(var i = 0; i<20; i++){
	var obj = new Object();
	obj.x = 40 * (i % 5);
	obj.y = 60 * Math.floor(i/5);	
}

//------------------------------------------------------
// grid layout
// cool for doing grid layouts. Aligning items
//------------------------------------------------------


//------------------------------------------------------
// Check if a string exists in the URL
//------------------------------------------------------

if(window.location.href.indexOf('localHost') > -1){
	//I caontain the string localhost
}else{
	//I don't contain the string localhost
}

//------------------------------------------------------
// Check if a string exists in the URL
//------------------------------------------------------


//------------------------------------------------------
// Get seconds from date
// Expects a year, month and date
//------------------------------------------------------

function getSecondsFromBirthDate(year, month, date){
	var date = new Date(year, month-1, date);
	var now = new Date();
	var mil = now.getTime() - date.getTime();
	var secs = Math.round(mil/1000);

	return secs;
}

//------------------------------------------------------
// Get seconds from date
//------------------------------------------------------


//------------------------------------------------------
// Convert from seconds to minutes
//------------------------------------------------------

function convertToMinutes(sec){
	var min = Math.floor(sec/60);
	return min;
}

//------------------------------------------------------
// Convert from seconds to minutes
//------------------------------------------------------

//------------------------------------------------------
// Convert from milliseconds to seconds
//------------------------------------------------------

function getSecondsFromBirthDate(year, month, date){
    var date = new Date(year, month-1, date);
    var now = new Date();
    var mil = now.getTime() - date.getTime();
    var secs = Math.round(mil/1000);

    return secs;
 }

//------------------------------------------------------
// Convert from milliseconds to seconds
//------------------------------------------------------

//------------------------------------------------------
// Convert from seconds to days
//------------------------------------------------------

function convertToDays(sec){
	var DAY = 60*60*24;
	var days = Math.floor(sec/DAY);

	return days;
}

//------------------------------------------------------
// Convert from seconds to days
//------------------------------------------------------


//------------------------------------------------------
// Convert from seconds to hours
//------------------------------------------------------

function convertToHours(sec){
	var HOUR = 60*60;
	var hours = Math.floor(sec/HOUR);

	return hours;
}

//------------------------------------------------------
// Convert from seconds to hours
//------------------------------------------------------