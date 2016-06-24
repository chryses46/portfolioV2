angular.module('portfolio')
    .controller('NavController', function($scope, $auth, $location) {
        var nav = this;


        function navShow {
            $("#headnavbutton").on("click", function() {
                console.log("success");
                if ($('#headnav').prop('style').display == "block") {
                    $("#headnav").hide();
                } else $("#headnav").show();
            });
        };

        navShow();
    });
