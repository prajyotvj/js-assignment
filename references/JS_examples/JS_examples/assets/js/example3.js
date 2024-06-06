	//find selected season
	/*
	function find_season(){
		var seasons = document.querySelectorAll('[id^="season_"]');
		for(var index = 0; index < seasons.length; index++){ 
			if(seasons[index].type == 'radio' && seasons[index].checked == true) {
				document.getElementById('sel_season').innerHTML = 'Selected season is: ' + seasons[index].value;
				break;
			}
		}
	}
	*/
	 function find_season(){ //need to write code for each radio button
		if(document.getElementById('season_summer').checked) {   
			var selectedValue = document.getElementById('season_summer').value;  
			document.getElementById('sel_season').innerHTML = 'Selected season is: ' + selectedValue;
		} else if(document.getElementById('season_winter').checked) {   
			var selectedValue = document.getElementById('season_winter').value;  
			document.getElementById('sel_season').innerHTML = 'Selected season is: ' + selectedValue;
		} else if (document.getElementById('season_rainy').checked) {
			var selectedValue = document.getElementById('season_rainy').value;  
			document.getElementById('sel_season').innerHTML = 'Selected season is: ' + selectedValue;
		}else if (document.getElementById('season_autumn').checked) {
			var selectedValue = document.getElementById('season_autumn').value;  
			document.getElementById('sel_season').innerHTML = 'Selected season is: ' + selectedValue;
		}
			
	}