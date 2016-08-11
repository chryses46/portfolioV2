$(document).ready(function() {


    $("#headnavbutton").on("click", function() {
        if ($('#headnavbutton').hasClass("down")){
        	$('#headnavbutton').toggleClass("up");
        }

        if ($('#headnav').prop('style').display == "block") {
            $("#headnav").hide();
        } else $("#headnav").show();
    })

    $("#proj").on("click", function(){
        if ($('.projects').prop('style').display == "none"){
        	$('.projects').show();
        } else 
        	$('.projects').hide();
    })

    $(".projects").children().on("click", function(){
    	$('#headnav').hide();
    	$('#headnavbutton').toggleClass("up");
    	$('.projects').hide();

    })

    $("#home").on("click", function(){
    	$('#headnav').hide();
    	$('#headnavbutton').toggleClass("up");
    })

    $("#mail").on("click", function(){
    	$('#headnav').hide();
    	$('#headnavbutton').toggleClass("up");
    })

});
