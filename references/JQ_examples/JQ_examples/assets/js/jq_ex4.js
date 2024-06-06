	//Display time every 1 seconds
	function showTime() {
		var dateTime = new Date(); // return new date and time
		var time = dateTime.toLocaleTimeString(); // return the time
		$('#cur_time').html(time);
	}
	show_cur_time = setInterval(showTime, 1000); //Method 1
	
	//hide 'end fast' button when the page is loaded
	$(document).ready(function() {
		$('#but_end').hide();
	});
	
	var interval, start_date;
	//function to display start fast time, expeted end fast time and time remain to end fast
	$('#but_start').click(function () {	
		start_date = new Date(); exp_end_date = new Date();
		$('#start_time').html(get_disp_date(start_date));
		
		exp_end_date.setHours(exp_end_date.getHours() + 4);
		$('#exp_fast_end_time').html(get_disp_date(exp_end_date));
		
		//find time remaining to end fast Method 2: var refreshId = setInterval(function() {}, 5000);
		interval = setInterval(function () {
			now = new Date();
			var diff = exp_end_date - now;
			var diff_sec = diff / 1000; //in s
			var hours = Math.floor(diff_sec / 3600);
			var minutes = Math.floor((diff_sec % 3600) / 60);
			var seconds = Math.floor((diff_sec % 3600) % 60);
			$('#time_remain').html(hours + ':' + minutes + ':' + seconds);
		}, 1000);
		
		$('#but_start').hide();
		$('#but_end').show();
	});
	
	//function to end fast
	$('#but_end').click(function () {	
		clearInterval(interval);
		end_date = new Date();
		$('#end_time').html(get_disp_date(end_date));
		$('#but_start').show();
		$('#but_end').hide();
		
		//find the actual fast time
		diff = Math.abs(end_date - start_date);
		var diff_sec = diff / 1000; //in s
		var hours = Math.floor(diff_sec / 3600);
		var minutes = Math.floor((diff_sec % 3600) / 60);
		var seconds = Math.floor((diff_sec % 3600) % 60);
		$('#fasting_time').html(hours + ':' + minutes + ':' + seconds);
	});
	
	//function to get formatted date to display
	function get_disp_date(date){
		currentDay = String(date.getDate()).padStart(2, '0');
		currentMonth = String(date.getMonth()+1).padStart(2,"0");
		currentYear = date.getFullYear();
		currentDate = `${currentDay}-${currentMonth}-${currentYear}`;
		currentHour = String(date.getHours()).padStart(2,"0");
		currentMin = String(date.getMinutes()).padStart(2,"0");
		currentSec = String(date.getSeconds()).padStart(2,"0");
		currentTime = `${currentHour}:${currentMin}:${currentSec}`;
		return currentDate + ' '+ currentTime;
	}