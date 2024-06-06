	//function for 'select all' checkbox
	$('#check_all').click(function () {
		is_checked = $('#check_all').is(":checked");
		$('.chk_class').each(function(){
			this.checked = is_checked;
		});
	});
	
	//function for single checkbox. If all checkboxes are ticked, tick 'select all' checkbox If any checkbox is unticked, untick 'select all' checkbox 
	$('.chk_class').click(function () {
		var all_checked = true;
		$('.chk_class').each(function(){
			if (this.checked == false) {
				all_checked = false;
			}
		});
		$('#check_all').prop('checked', all_checked);
	});
	
	//function to display selected checkboxes
	$('#but_show').on('click', function() {
		var selected = [];
		
		$('.chk_class:checked').each(function(){
			if (this.checked == true) {
				selected.push(this.value); //to get the value of the selected checkbox use 'value'
			}
		})
		$('#sel_topics').html('Selected topics: '+ selected.join(', '));
	});	