	//Display time every 1 seconds
	function showTime() {
		var dateTime = new Date(); // return new date and time
		var time = dateTime.toLocaleTimeString(); // return the time
		document.getElementById('cur_time').innerHTML = time;
	}
	show_cur_time = setInterval(showTime, 1000);
	
	//hide 'end fast' button
	window.onload = function() {
		document.getElementById('but_end').style.display = 'none';
	}
	
	var interval, start_date;
	//function to display start fast time, expeted end fast time and time remain to end fast
	function startFast() {
		start_date = new Date(); exp_end_date = new Date();
		document.getElementById('start_time').innerHTML = get_disp_date(start_date);
		
		exp_end_date.setHours(exp_end_date.getHours() + 4);
		document.getElementById('exp_fast_end_time').innerHTML = get_disp_date(exp_end_date);
		
		//find time remaining to end fast
		interval = setInterval(function () {
			now = new Date();
			var diff = exp_end_date - now;
			var diff_sec = diff / 1000; //in s
			var hours = Math.floor(diff_sec / 3600);
			var minutes = Math.floor((diff_sec % 3600) / 60);
			var seconds = Math.floor((diff_sec % 3600) % 60);
			document.getElementById('time_remain').innerHTML = hours + ':' + minutes + ':' + seconds;
			}, 1000);
		
		document.getElementById('but_start').style.display = 'none';
		document.getElementById('but_end').style.display = 'block';
	}
	
	//function to end fast
	function endFast(){
		clearInterval(interval);
		end_date = new Date();
		document.getElementById('end_time').innerHTML = get_disp_date(end_date);
		document.getElementById('but_start').style.display = 'block';
		document.getElementById('but_end').style.display = 'none';
		
		//find the actual fast time
		diff = Math.abs(end_date - start_date);
		var diff_sec = diff / 1000; //in s
		var hours = Math.floor(diff_sec / 3600);
		var minutes = Math.floor((diff_sec % 3600) / 60);
		var seconds = Math.floor((diff_sec % 3600) % 60);
		document.getElementById('fasting_time').innerHTML = hours + ':' + minutes + ':' + seconds;
	}
	
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