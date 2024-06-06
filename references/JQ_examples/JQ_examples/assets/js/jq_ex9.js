	$(document).ready(function() {
		var today = new Date();
		$("#birth_date").datepicker({
			maxDate: today, //can not enter date > today //display date in default: mm/dd/yy
			changeMonth:true, //displays dropdown to select month
			changeYear:true,	//displays dropdown to select year
			yearRange:"-100:+100", //define range of years -100 years from current year to +100 years (as maxdate is applied, +100 will not work)
			onClose: function () { //if date and month are selected and date control is closed by clicking elsewhere, this will display 1st of selected month and year.
				var iMonth = $("#ui-datepicker-div .ui-datepicker-month :selected").val(); //get selected month
				var iYear = $("#ui-datepicker-div .ui-datepicker-year :selected").val(); //get selected year
				console.log(new Date(iYear, iMonth, 1));
				$(this).datepicker('setDate', new Date(iYear, iMonth, 1));
			},
		});
		
		$("#startDate").datepicker({
			minDate: "-2w",  //can not enter date less than 2 weeks (based on current date) other examples: "+1D +1M +1Y"
			maxDate: '+1D',  //can not enter date > tomorrow (based on current date)
			onSelect: function(date) {
				var daystart = $("#startDate").datepicker("getDate"); //get date selected in 'startDate' field
				//daystart.setDate(daystart.getDate());
				$("#endDate").datepicker("option", "minDate", daystart); //set minDate for 'endDate' fields as date selected in 'start date' field
			}
		});
		
		$("#endDate").datepicker({
			maxDate: new Date(2023, 8, 18), //can not enter date > specific date (18Sep2023)
		});
		
		$("#start_fast_time").datetimepicker({
			dateFormat: "dd-mm-yy",  //display date in dd-mm-yy format
			timeFormat: "HH:mm:ss",
			maxDate: today,
			minDate: '-1D',
		});

		$("#end_fast_time").datetimepicker({
			dateFormat: "dd-mm-yy",
			timeFormat: "HH:mm:ss",
			maxDate: today,
		});
		
	})