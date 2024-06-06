window.onload = function () {
	var chart_bar = new CanvasJS.Chart("barChartContainer", {
		title:{
			text: "Fruit Sale"           
		},
		axisY: {
			title: "Sale Count",
		},
		axisX: {
			title: "Fruits",
		},
		toolTip: {
			shared: true,
		},
		data: [              
			{
				// Change type to "doughnut", "line", "splineArea", etc.
				type: "column",
				//showInLegend: "false",
				dataPoints: [
					{ label: "apple",  y: 10  },
					{ label: "orange", y: 15  },
					{ label: "banana", y: 25  },
					{ label: "mango",  y: 30  },
					{ label: "grape",  y: 28  }
				]
			}
		]
	});
	chart_bar.render();

	//grouped Bar Chart
	var chart_groupedBar = new CanvasJS.Chart("groupedBarChart", {            
		title:{
			text: "Fruits sold in First & Second Quarter"              
		},

		data: [  //array of dataSeries     
			{ //dataSeries - first quarter
				/*** Change type "column" to "bar", "area", "line" or "pie"***/        
				type: "column",
				name: "First Quarter",
				showInLegend: true,
				dataPoints: [
				   { label: "banana", y: 58 },
				   { label: "orange", y: 69 },
				   { label: "apple", y: 80 },                                    
				   { label: "mango", y: 74 },
				   { label: "grape", y: 64 }
			   ]
			},
			{ //dataSeries - second quarter
				type: "column",
				name: "Second Quarter", 
				showInLegend: true,
				dataPoints: [
				  { label: "banana", y: 63 },
				  { label: "orange", y: 73 },
				  { label: "apple", y: 88 },                                    
				  { label: "mango", y: 77 },
				  { label: "grape", y: 60 }
				]
			}
		],
		/** Set axisY properties here*/
		axisY:{
		  prefix: "$",
		  suffix: "K"
		}
	});
	chart_groupedBar.render();
	
	//Horizontal Bar Chart
	var chart_horizontalBar = new CanvasJS.Chart("horizontalBarChart", {
		animationEnabled: true,
		
		title:{
			text:"Fortune 500 Companies by Country"
		},
		axisX:{
			interval: 1
		},
		axisY2:{
			interlacedColor: "rgba(1,77,101,.2)",
			gridColor: "rgba(1,77,101,.1)",
			title: "Number of Companies"
		},
		data: [{
			type: "bar",
			name: "companies",
			axisYType: "secondary",
			color: "#014D65",
			dataPoints: [
				{ y: 3, label: "Sweden" },
				{ y: 7, label: "Taiwan" },
				{ y: 5, label: "Russia" },
				{ y: 9, label: "Spain" },
				{ y: 7, label: "Brazil" },
				{ y: 7, label: "India" },
				{ y: 9, label: "Italy" },
				{ y: 8, label: "Australia" },
				{ y: 11, label: "Canada" },
				{ y: 15, label: "South Korea" },
				{ y: 12, label: "Netherlands" },
				{ y: 15, label: "Switzerland" },
				{ y: 25, label: "Britain" },
				{ y: 28, label: "Germany" },
				{ y: 29, label: "France" },
				{ y: 52, label: "Japan" },
				{ y: 103, label: "China" },
				{ y: 134, label: "US" }
			]
		}]
	});
	chart_horizontalBar.render();

	//line chart
	var line_chart = new CanvasJS.Chart("lineChart",
    {
		title:{
			text: "Blood Pressure"  
		},
		axisY: {
			title: "Blood Pressure",
		},
		axisX: {
			title: "Months",
		},
		data: [
			{        
				type: "line",
				name: "Systolic BP",
				showInLegend: true,
				dataPoints: [
					{ label: "Jan", y: 120},
					{ label: "Feb", y: 118},
					{ label: "Mar", y: 117},
					{ label: "Apr", y: 120},
					{ label: "May", y: 122},
				]
			},
			{        
				type: "line",
				name: "Diastolic BP",
				showInLegend: true,
				dataPoints: [
					{ label: "Jan", y: 80},
					{ label: "Feb", y: 79},
					{ label: "Mar", y: 78},
					{ label: "Apr", y: 77},
					{ label: "May", y: 80},
				]
			}
		]
    });
    line_chart.render();
	
	//pie chart
	var chart_pie = new CanvasJS.Chart("pieChart", {
		animationEnabled: true,
		title: {
			text: "Desktop Search Engine Market Share - 2016"
		},
		data: [{
			type: "pie",
			startAngle: 240,
			yValueFormatString: "##0.00\"%\"",
			indexLabel: "{label} {y}",
			dataPoints: [
				{y: 79.45, label: "Google"},
				{y: 7.31, label: "Bing"},
				{y: 7.06, label: "Baidu"},
				{y: 4.91, label: "Yahoo"},
				{y: 1.26, label: "Others"}
			]
		}]
	});
	chart_pie.render();	
}// window onload