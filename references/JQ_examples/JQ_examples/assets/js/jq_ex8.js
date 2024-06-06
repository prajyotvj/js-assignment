//js
/*var myCollapsible = document.getElementById('collapseOne');
myCollapsible.addEventListener('hidden.bs.collapse', function (e) {
	var tid  = $(e.target).attr('id');
	console.log("Hidden: "+tid);
});
myCollapsible.addEventListener('shown.bs.collapse', function (e) {
	var tid  = $(e.target).attr('id');
	console.log("Shown: "+tid)
});*/

//jq
$("#but_toggle").click(function(){
	$("#collapseOne").collapse('toggle'); //closes the 'collapseOne' section if opened, opens if closed
});
$("#but_show").click(function(){
	$("#collapseOne").collapse('show'); 
	console.log("collapseOne opened");
});
$("#but_hide").click(function(){
	$("#collapseOne").collapse('hide');
	console.log("collapseOne closed");
});
$('.accordion').on('show.bs.collapse', function(e){
	var tid  = $(e.target).attr('id');
	console.log("accordion id to show: " + tid);
});
$('.accordion').on('shown.bs.collapse', function (e) {
	var tid  = $(e.target).attr('id');
	console.log("accordion id Shown: "+tid)
});
$('.accordion').on('hide.bs.collapse', function(e){
	var tid  = $(e.target).attr('id');
	console.log("accordion id to hide: " + tid);
});
$('.accordion').on('hidden.bs.collapse', function(e){
	var tid  = $(e.target).attr('id');
	console.log("accordion id hidden: " + tid);
});