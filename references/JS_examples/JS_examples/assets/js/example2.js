	//function for 'select all' checkbox
	function perform(){
		var checkBox = document.getElementById('check_all');
		if (checkBox.checked == true){
			select_all();
		} else {
			deSelect_all();
		}
	}
	
	//function to select all checkboxes
	function select_all(){
		var ele = document.getElementsByName('chk'); 
		for(var index = 0; index < ele.length; index++){ 
			if(ele[index].type == 'checkbox')
				ele[index].checked = true;
		}
	}  
	
	//function to deselect all checkboxes
	function deSelect_all(){
		var ele = document.getElementsByName('chk');  
		for (var index = 0; index < ele.length; index++){
			if(ele[index].type == 'checkbox')  
				ele[index].checked = false;  
		}
	}

	//function for single checkbox. If all checkboxes are ticked, tick 'select all' checkbox 
	function select_chk(){
		var ele = document.getElementsByName('chk');
		var all_checked = true;
		for (var index = 0; index < ele.length; index++){
			if(ele[index].type == 'checkbox' && ele[index].checked == false) {
				all_checked = false;
				break;
			}    
		}
		document.getElementById('check_all').checked = all_checked;
	}
	
	//function to display selected checkboxes
	function show_topic(){
		var selected = [];
		var ele = document.getElementsByName('chk');
		var all_checked = true;
		for (var index = 0; index < ele.length; index++){
			if(ele[index].type == 'checkbox' && ele[index].checked == true) {
				selected.push(ele[index].value);
			}    
		}
		document.getElementById('sel_topics').innerHTML = 'Selected topics: '+ selected.join(', ');
	}