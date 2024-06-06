	//find selected season
	$('input[name="season"]').click(function () {
		var seasons = $('[id^="season_"]');
		for(var index = 0; index < seasons.length; index++){ 
			if(seasons[index].type == 'radio' && seasons[index].checked == true) {
				$('#sel_season').html('Selected season is: ' + seasons[index].value);
				break;
			}    
		}
	});
//https://stackoverflow.com/questions/1107220/how-can-i-select-an-element-by-name-with-jquery	
//$('td[name="tcol1"]')   // Matches exactly 'tcol1'
//$('td[name^="tcol"]' )  // Matches those that begin with 'tcol'
//$('td[name$="tcol"]' )  // Matches those that end with 'tcol'
//$('td[name*="tcol"]' )  // Matches those that contain 'tcol'