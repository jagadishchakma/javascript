function Time(){
	var hours = [12,1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11];
	var d = new Date();
	var ampm = d >= 12 ? 'PM' : 'AM';
	var minutes = d.getMinutes();
	minutes = minutes < 10 ? '0'+minutes : minutes;
	document.getElementById('time').innerHTML=hours[d.getHours()]+':'+minutes+':'+d.getSeconds()+ampm;
}
setInterval(Time,1000);