	//set focus on first field of the form
	$(document).ready(function() {
		$('#html_marks').focus();
		$('#result').hide(); //hide using id
		$('.net_section').hide(); //hide when the page is loaded
		$('.mobile_section').hide(); //hide using class
		
		//show or hide the section based on option selected
		$('#optional').change(function () {
			var sel_option = $('#optional').find(":selected").val();
			if (sel_option == 'php'){
				$('.php_section').show();
				$('.net_section').hide();
				$('.mobile_section').hide();
				$('#codeignitor_marks').focus();
			} else if (sel_option == 'net'){
				$('.php_section').hide();
				$('.net_section').show();
				$('.mobile_section').hide();
				$('#mvc_marks').focus();
			} else {
				$('.php_section').hide();
				$('.net_section').hide();
				$('.mobile_section').show();
				$('#ios_marks').focus();
			}
		});
		
		//Allow only digits and dot(.) in textboxes
		$('.form-control').on('keyup', function() {
			$(this).val($(this).val().replace(/[^0-9.]/g, ''));
		});
		
		//Find grade and display result
		//$('#but_show').on('click', function() { //another way to write
		$('#but_show').click(function () {
			html_marks = $('#html_marks').val();
			js_marks = $('#js_marks').val();
			sql_marks = $('#sql_marks').val();
			
			var sel_option = $('#optional').find(":selected").val();
			if (sel_option == 'php'){
				sub1_marks = $('#codeignitor_marks').val();
				sub2_marks = $('#wp_marks').val();
			} else if (sel_option == 'net'){
				sub1_marks = $('#mvc_marks').val();
				sub2_marks = $('#core_marks').val();
			} else {
				sub1_marks = $('#ios_marks').val();
				sub2_marks = $('#android_marks').val();
			}
			
			var checkBox = $('#certification');
			if (checkBox.checked == true){
				grace = 10;
			} else {
				grace = 0;
			}
			//console.log(html_marks + " - " + js_marks + " - " + sql_marks + " - " + sub1_marks + " - " + sub2_marks + " - " + grace);				
			if (html_marks == '' || js_marks == '' || sql_marks == '' || sub1_marks == '' || sub2_marks == '' ){
				$('#err_marks').show().html('Please enter marks in all subjects');
			} else {
				$('#err_marks').hide().html(''); //combined multiple properties
				
				total = parseInt(html_marks) + parseInt(js_marks) +  parseInt(sql_marks) + parseInt(sub1_marks) + parseInt(sub2_marks) + parseInt(grace);
				percent = total/5;
				
				if (percent > 80) {
					grade = 'A';
					className = 'show-green';
				} else if (percent > 70) {
					grade = 'B';
					className = 'show-orange';
				} else {
					grade = 'C';
					className = 'show-red';
				}
				$('#result').show();
				$('#total_marks').html(total);
				$('#percentage').html(percent + ' %');
				$('#grade').html(grade).addClass(className); //combined multiple properties
				
				switch (grade) {
				   case 'A': comment = 'Good Job .. '; color = 'green'; img_src = 'assets/images/green.png';
							break;
				   case 'B': comment = 'Pretty good'; color = 'orange'; img_src = 'assets/images/yellow.png';
							break;
				   default:  comment = 'Scope to improve'; color = 'red'; img_src = 'assets/images/red.png';
				}
				$('#comment').html(comment).css('color', color); //combined multiple properties i.e. $('#comment').html(comment); $('#comment').css('color', color);
				$('#face_img').attr('src', img_src);
			}	
		});
	});
	
	//verify marks
	function verify(cnt_id){
		marks = $('#'+cnt_id).val();
		if (marks == '' || marks > 100){
			$('#'+cnt_id+'_err').html('Marks should be between 0 - 100');
			$('#'+cnt_id).val('').focus(); //combined multiple properties
		} else {
			$('#'+cnt_id+'_err').html('');
		}
	}