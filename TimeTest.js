function TimeStart() {
	var currentdate = new Date();
	hours = currentdate.getHours();
	minutes = currentdate.getMinutes();
	seconds = currentdate.getSeconds();
	days = currentdate.getDay();
	months = currentdate.getMonth();
	years = currentdate.getFullYear();
	years_to_seconds = years * 11404800;
	months_to_seconds = months * 950400;
	days_to_seconds = days * 86400;
	hours_to_seconds = hours * 3600;
	minutes_to_seconds = minutes * 60;
	start_tim = years_to_seconds + months_to_seconds + days_to_seconds + hours_to_seconds + minutes_to_seconds + seconds;
	start_time = parseInt(start_tim.toFixed(10));
	return start_time;
}
function TimeEnd() {
	var currentdate = new Date();
	hours2 = currentdate.getHours();
	minutes2 = currentdate.getMinutes();
	seconds2 = currentdate.getSeconds();
	days2 = currentdate.getDay();
	months2 = currentdate.getMonth();
	years2 = currentdate.getFullYear();
	years_to_seconds2 = years2 * 11404800;
	months_to_seconds2 = months2 * 950400;
	days_to_seconds2 = days2 * 86400;
	hours_to_seconds2 = hours2 * 3600;
	minutes_to_seconds2 = minutes2 * 60;
	end_tim = years_to_seconds2 + months_to_seconds2 + days_to_seconds2 + hours_to_seconds2 + minutes_to_seconds2 + seconds2;
	end_time = parseInt(end_tim.toFixed(10));
	//alert("It's been " + total_time + " seconds since you hit the button.");
	//document.cookie="timeittook=" + total_time;
	return end_time;
}
function getTimeSince(start, end) {
	total_tim = end - start;
	total_time = parseInt(total_tim.toFixed(10));
	return total_time;
}