angular.module('portfolio')
    .controller('NavController', function($rootScope,$scope,$location) {
        $scope.projects = [
            {   title: "iuzeit Inc.",
                href: "http://www.iuzeit.com",
                target: "_blank"},
            {   title: "Amelia | Artist",
                href: "#/amelia-artist",
                target: "_self"},
            {   title: "Ryu jQuery Page",
                href: "#/ryu",
                target: "_self"},
            {   title: "Shopping List",
                href: "#/shop",
                target: "_self"},
            {   title: "Hot or Cold",
                href: "#/hotcold",
                target: "_self"},
            {   title: "My WordPress",
                href: "http://danielfrank.info/wordpress",
                target: "_blank"}]

        $scope.showNav = function() {
            if ($('#headnavbutton').hasClass("down")) {
                $('#headnavbutton').toggleClass("up");
            }

            if ($('#headnav').prop('style').display == "block") {
                $("#headnav").hide();
            } else $("#headnav").show();
        }

        $scope.showList = function() {
            if ($('.projects').css('display') == 'none') {
                $('.projects').show();
            } else
                $('.projects').hide();
        }

        $scope.menuClick = function(loc) {
            $('#headnav').hide();
            $('#headnavbutton').toggleClass("up");
            $location.path(loc);
        }

        $scope.collapse = function() {
            $('.projects').hide();
            $('#headnav').hide();
            $('#headnavbutton').toggleClass("up");
        };
    });
