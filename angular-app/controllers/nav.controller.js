angular.module('portfolio')
    .controller('NavController', function($scope, $location) {
        $scope.projects = [
            {   title: "iuzeit Inc.",
                href: "http://beta.iuzeit.com"},
            {   title: "Amelia | Artist",
                href: "http://www.amelia-artist.com"},
            {   title: "About Me",
                href: "#/about"},
            {   title: "Ryu jQuery Page",
                href: "#/ryu"},
            {   title: "Shopping List",
                href: "#/shop"},
            {   title: "Hot or Cold",
                href: "#/hotcold"},
            {   title: "My WordPress",
                href: "http://danielfrank.info/wordpress"}]

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

        $scope.menuClick = function() {
            $('#headnav').hide();
            $('#headnavbutton').toggleClass("up");
        }

        $scope.collapse = function() {
            $('.projects').hide();
            $('#headnav').hide();
            $('#headnavbutton').toggleClass("up");
        };
    });
