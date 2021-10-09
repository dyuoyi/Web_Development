// Building a clock:
var  clock = document.querySelector('.clock');

// The following function will update the time in the clock every second:
 
var theClock  = function () {
		var now    = new Date();
		var hrs  = now.getHours();
		var min  = now.getMinutes();
		var sec  = now.getSeconds();
// the following change the time format from millitary to the standard time format
		if(hrs > 12){
			hrs = hrs % 12; // or hrs = hrs -12  -> this will work too
		}
		if(hrs == 0){
			hrs = 12;
		}
// the following will make sure '0' will be added to hrs, min & sec in front, if the number is  < 10. 
// Will make sure we display 2 - digit numbers for hrs, min and sec
	   if(hrs < 10){
		   hrs = '0' + hrs;
	   }
	   if(min < 10){
		   min = '0' + min;
	   }
	   if(sec < 10){
		   sec = '0' + sec;
	   }

 	// Create html template and inject it to the clock.
	   var html = `
			<span>${hrs}</span> : 
			<span>${min}</span> :
			<span>${sec}</span>
		`;
//now let us inject the html template to the clock:
 	   clock.innerHTML = html;
 }

//The following method will call the theTick function every second:
setInterval(theClock, 1000);

 // The body page will rotate through the following colors: 
var backColorsArray = [
	'#4FC3F7', '#29B6F6', '#03A9F4', '#039BE5', '#0288D1', '#0277BD', '#01579B', '#9575CD', 
	'#7E57C2', '#673AB7', '#5E35B1', '#512DA8', '#4527A0', '#311B92', '#7986CB', '#5C6BC0', 
	'#3F51B5', '#3949AB', '#303F9F', '#283593','#1A237E', '#64B5F6', '#42A5F5', '#2196F3', 
	'#1E88E5', '#1976D2', '#1565C0', '#0D47A1'
	];
var index = 0;
   
// the setInterval() method:
setInterval(function(){
	document.querySelector('body').style.background = backColorsArray[index];
	index++;
	if(index >= backColorsArray.length){
		index = 0;
	}

}, 1000);