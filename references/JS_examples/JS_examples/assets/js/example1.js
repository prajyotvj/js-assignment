	//set focus on first field of the form
	window.onload = function() {
		document.getElementById('html_marks').focus();
		document.getElementById('result').style.visibility = 'hidden';
		
		var element = document.getElementById('optional');
		var sel_option = element.options[element.selectedIndex].value;
		show_section(sel_option);
	};
	
	//verify marks
	function verify(cnt_id){
		marks = document.getElementById(cnt_id).value;
		if (marks == '' || marks > 100){
			document.getElementById(cnt_id+'_err').innerHTML = 'Marks should be between 0 - 100';
			document.getElementById(cnt_id).value = '';	
		} else {
			document.getElementById(cnt_id+'_err').innerHTML = '';
		}
	}
	
	//show or hide the section based on option selected
	function show_section(sel_option){
		if (sel_option == 'php'){
			document.getElementsByClassName('php_section')[0].style.display = document.getElementsByClassName('php_section')[1].style.display = 'block';
			document.getElementsByClassName('net_section')[0].style.display = document.getElementsByClassName('net_section')[1].style.display = 'none';
			document.getElementsByClassName('mobile_section')[0].style.display = document.getElementsByClassName('mobile_section')[1].style.display = 'none';
			document.getElementById('codeignitor_marks').focus();
		} else if (sel_option == 'net'){
			document.getElementsByClassName('php_section')[0].style.display = document.getElementsByClassName('php_section')[1].style.display = 'none';
			document.getElementsByClassName('net_section')[0].style.display = document.getElementsByClassName('net_section')[1].style.display = 'block';
			document.getElementsByClassName('mobile_section')[0].style.display = document.getElementsByClassName('mobile_section')[1].style.display = 'none';
			document.getElementById('mvc_marks').focus();
		} else {
			document.getElementsByClassName('php_section')[0].style.display = document.getElementsByClassName('php_section')[1] = 'none';
			document.getElementsByClassName('net_section')[0].style.display = document.getElementsByClassName('net_section')[1].style.display = 'none';
			document.getElementsByClassName('mobile_section')[0].style.display = document.getElementsByClassName('mobile_section')[1].style.display = 'block';
			document.getElementById('ios_marks').focus();
		}
	}
	
	//Find grade and display result
	function showGrade(){
		html_marks = document.getElementById('html_marks').value;
		js_marks = document.getElementById('js_marks').value;
		sql_marks = document.getElementById('sql_marks').value;
		
		var element = document.getElementById('optional');
		var sel_option = element.options[element.selectedIndex].value;
		if (sel_option == 'php'){
			sub1_marks = document.getElementById('codeignitor_marks').value;
			sub2_marks = document.getElementById('wp_marks').value;
		} else if (sel_option == 'net'){
			sub1_marks = document.getElementById('mvc_marks').value;
			sub2_marks = document.getElementById('core_marks').value;
		} else {
			sub1_marks = document.getElementById('ios_marks').value;
			sub2_marks = document.getElementById('android_marks').value;
		}
		
		var checkBox = document.getElementById('certification');
		if (checkBox.checked == true){
			grace = 10;
		} else {
			grace = 0;
		}
		//console.log(html_marks + " - " + js_marks + " - " + sql_marks + " - " + sub1_marks + " - " + sub2_marks + " - " + grace);				
		if (html_marks == '' || js_marks == '' || sql_marks == '' || sub1_marks == '' || sub2_marks == '' ){
			document.getElementById('err_marks').style.visibility = 'visible';
			document.getElementById('err_marks').innerHTML = 'Please enter marks in all subjects';
		} else {
			document.getElementById('err_marks').style.visibility = 'hidden';
			document.getElementById('err_marks').innerHTML = '';
		
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
			document.getElementById('result').style.visibility = 'visible';
			document.getElementById('total_marks').innerHTML = total;
			document.getElementById('percentage').innerHTML = percent + ' %';
			document.getElementById('grade').innerHTML = grade;
			
			var a = document.body;
			a.classList ? document.getElementById('grade').classList.add(className) : document.getElementById('grade').className += ' '+className;
			//.classList.add: for modern browsers, .className += : to support Internet Explorer 9 or lower
			
			switch (grade) {
			   case 'A': comment = 'Good Job .. '; color = 'green'; img_src = 'assets/images/green.png';
						break;
			   case 'B': comment = 'Pretty good'; color = 'orange'; img_src = 'assets/images/yellow.png';
						break;
			   default:  comment = 'Scope to improve'; color = 'red'; img_src = 'assets/images/red.png';
			}
			document.getElementById('comment').innerHTML = comment;
			document.getElementById('comment').style.color = color;
			document.getElementById('face_img').src = img_src;
			
			
		}	
	}