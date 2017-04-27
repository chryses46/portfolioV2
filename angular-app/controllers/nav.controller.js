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
            if ($('#nav').hasClass("fa fa-bars")){
              $('#nav').removeClass("fa fa-bars");
              $('#nav').addClass("fa fa-times");
            } else {
              $('#nav').removeClass("fa fa-times");
              $('#nav').addClass("fa fa-bars");
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
            $('#nav').removeClass("fa fa-times");
            $('#nav').addClass("fa fa-bars");
        }

        $scope.collapse = function() {
            $('.projects').hide();
            $('#headnav').hide();
            $('#headnavbutton').toggleClass("up");
        };

        $scope.bodyClick = function(){
            $('body').unbind().click(function(){
              if ($('#headnav').prop('style').display == "block") {
                  $("#headnav").hide();
                  $('#nav').removeClass("fa fa-times");
                  $('#nav').addClass("fa fa-bars");
                }
            })
          }

        $scope.bodyClick();


    });
