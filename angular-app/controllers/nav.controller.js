angular.module('portfolio')
    .controller('NavController', function($scope, $location) {
        var nav = this;


        $scope.showNav = function() {
            if ($('#headnavbutton').hasClass("down")) {
                $('#headnavbutton').toggleClass("up");
            }

            if ($('#headnav').prop('style').display == "block") {
                $("#headnav").hide();
            } else $("#headnav").show();
        }

        $scope.showList = function() {
            if ($('.projects').prop('style').display == "none") {
                $('.projects').show();
            } else
                $('.projects').hide();
        }

        $scope.collapse = function(click) {
            $('#headnav').hide();
            $('#headnavbutton').toggleClass("up");
            $('.projects').hide();
        }

        $scope.homeClick = function() {
            $('#headnav').hide();
            $('#headnavbutton').toggleClass("up");
        }

        $scope.mailClick = function() {
            $('#headnav').hide();
            $('#headnavbutton').toggleClass("up");
        }
    });
