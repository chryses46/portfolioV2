//js for portfolio

$(document).ready(function() {


    $("#headnavbutton").on("click", function() {
        console.log("success");
        if ($('#headnavbutton').hasClass("down")){
        	$('#headnavbutton').toggleClass("up");
        }

        if ($('#headnav').prop('style').display == "block") {
            $("#headnav").hide();
        } else $("#headnav").show();
    });

})
