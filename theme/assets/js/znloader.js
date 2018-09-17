var h = function() {
var znbar = $('#zncontainer').height();
var frame = $(window).height() - znbar;
 $('#frame').attr('height', frame+'px');
 } 
 $(window).resize(function() {
h();
 }).load(function() {
h();
 }); 
$(document).ready(function () {

if(top.location != location) {
top.location.href = document.location;
}


// add image to tooltip	
	$(".zntip").hover(function(e){
		t = $(this).attr('rel');	
		$(".znhead").append("<div id='zntip'>"+ t +"</div>");								 
		$("#zntip")
			.css("top",(e.pageY - 10) + "px")
			.css("left",(e.pageX + 20) + "px")
			.fadeIn("fast");
		//$(".preview").removeAttr("title");

							
    },
	function(){
		$(this).attr('rel' ,t) ;	
		$("#zntip").remove();
    });	
	$(".zntip").mousemove(function(e){
		$("#zntip")
			.css("top",(e.pageY - 10) + "px")
			.css("left",(e.pageX + 20) + "px");
	});	
//hide the dropdown
  $('ul.zn_list').hide();
//Make the dropdown list
	$('div.zndrop_container').click(function () {
		$('ul.zn_list').fadeToggle();
	 });
	 
h(); 

});
