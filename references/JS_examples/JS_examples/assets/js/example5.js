	//add more
	var index = 2;
	function addMore(){
		newDiv = document.createElement('div');
		newDiv.setAttribute('class', 'col-md-3');
		
		newLabel = document.createElement('label');
		newLabel.setAttribute('class', 'form-label');
		newLabel.setAttribute('id', 'friend_label'+index);
		newLabel.setAttribute('for', 'friend_name'+index);
		
		var inputName = document.createElement('input');
		inputName.setAttribute('type', 'text');
		inputName.setAttribute('class', 'form-control');
		inputName.setAttribute('name', 'friend_name' + index);
		inputName.setAttribute('id', 'friend_name' + index);
		inputName.setAttribute('maxlength', 20);
		
		newSpan = document.createElement('span');
		newSpan.setAttribute('class', 'error');
		newSpan.setAttribute('id', 'friend_name'+index+'_err');
		
		newDiv.append(newLabel);
		newDiv.append(inputName);
		newDiv.append(newSpan);
		document.getElementById('friend_list').append(newDiv);
		
		document.getElementById('friend_label'+index).innerText = 'Name:';
		document.getElementById('friend_name'+index).addEventListener('keyup', function(event) {
			this.value = this.value.replace(/[^a-z]/g, '');
		});
		
		index++;
    }
	
	//function to display names
	function show_names(){
		var selected = [];
		var names = document.querySelectorAll('[id^="friend_name"]');
		for(var index = 0; index < names.length; index++){ 
			if(names[index].type == 'text' && names[index].value != '') {
				selected.push(names[index].value);
			}
		}
		document.getElementById('list_names').innerHTML = 'Friend names: '+ selected.join(', ');
	}