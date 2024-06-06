	$(document).ready(function() {
		//custom validation
		jQuery.validator.addMethod("lettersonly", function(value, element) {
			return this.optional(element) || /^[a-z ]+$/i.test(value);
		}, "Letters and space only please"); 
		
		//custom validation rule
		$.validator.addMethod("customemail", 
			function(value, element) {
				return /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(value);
			}, 
			"Sorry, I've enabled very strict email validation"
		);
		
		//form validation
		$("#basic-form").validate({
			rules: {
				first_name: { 
					required: true,
					minlength: 3,
					maxlength: 12,
					lettersonly: true
				},
				last_name: { 
					required: true,
					minlength: 3,
					maxlength: 12,
					lettersonly: true
				},
				email: {
					required: true,
					//email: true,
					customemail: true,
					maxlength: 50
				},
				password: {
					required: true,
					minlength: 6,
					maxlength: 12
				},
				confirm_password: {
					required: true,
					minlength: 6,
					maxlength: 12,
					equalTo: '[name="password"]'
				},
				age: {
					required: true,
					digits: true
				},
				amount: {
					required: true,
					number: true
				},
				country: {
					required: true,
				},
				gender: {
					required: true,
				},
				comments: {
					required: true,
				},
				terms: {
					required: true,
				}
			},
			messages:
			{
				first_name: { 
					required: 'Please enter first name',
					minlength: 'Please enter minimum 3 letters',
					maxlength: 'Please enter maximum 12 letters',
					lettersonly: 'Please enter only letters and spaces',
				},
				last_name: { 
					required: 'Please enter last name',
					minlength: 'Please enter minimum 3 letters',
					maxlength: 'Please enter maximum 12 letters',
					lettersonly: 'Please enter only letters and spaces',
				},
				email: {
					required: 'Please enter email',
					//email: 'Please enter correct email address',
					customemail: 'Please enter correct email address',
					maxlength: 'Please enter maximum 50 letters',
				},
				password: {
					required: 'Please enter password',
					minlength: 'Please enter minimum 6 letters',
					maxlength: 'Please enter maximum 12 letters',
				},
				confirm_password: {
					required: 'Please enter confirm password',
					minlength: 'Please enter minimum 6 letters',
					maxlength: 'Please enter maximum 12 letters',
					equalTo: 'Password and confirm password must match'
				},
				age: {
					required: 'Please enter age',
					number: 'Please enter only digits'
				},
				amount: {
					required: 'Please enter amount',
					number: 'Please enter correct amount'
				},
				country: {
					required: 'Please select country',
				},
				gender: {
					required: 'Please select gender',
				},
				comments: {
					required: 'Please enter comments',
				},
				terms: {
					required: 'Please select terms and condition',
				},
			},
			errorPlacement: function(error, element) 
			{
				if ( element.is(":radio") ) {
					error.appendTo('#gender_err');
				} else if ( element.is(":checkbox") ) {
					error.appendTo('#terms_err');
				} else { // This is the default behavior 
					error.insertAfter( element );
				}
			},
			submitHandler: function(form) {
				$('#disp_first_name').html($('#txt_first_name').val());
				$('#disp_last_name').html($('#txt_last_name').val());
				$('#disp_email').html($('#txt_email').val());
				$('#disp_age').html($('#txt_age').val());
				$('#disp_amount').html($('#txt_amount').val());
				$('#disp_country').html($('#opt_country').find(":selected").text()); 
				$('#disp_gender').html( $("input:radio[name=gender]:checked").val());  
				$('#disp_comments').html($("#txt_comments").val());
				$('#disp_certification').html(find_certification()); 
				
				$('#modal_disp').modal('show');
			}
		});
	});
	
	//do action on modal close
	$("#modal_disp").on('hide.bs.modal', function(){
		$.alert({
			title: 'Success',
			content: 'The form has been submitted successfully',
		});
	});
	
	//find certification
	function find_certification(){
		var certifications = []; var sel_cert = '-';
		$.each($("input[name='certification']:checked"), function(){
		  certifications.push($(this).val());
		});
		if (certifications.length){
			sel_cert = certifications.join(', ');
		}	
		return sel_cert;
	}