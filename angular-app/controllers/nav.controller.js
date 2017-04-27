angular.module('portfolio')
    .controller('NavController', function($rootScope,$scope,$location) {

        $scope.showNav = function() {
          if ($('#nav').hasClass("fa-bars")){
            console.log('showNav-show')
            $('#nav').removeClass("fa-bars").addClass("fa-times")
            $('.headnav').show()
          } else {
            console.log('showNav-hide')
            $('#nav').removeClass("fa-times").addClass("fa-bars")
            $('.headnav').hide()
          }
        }

        $scope.menuClick = function(id) {
          console.log('menuClick')
          $('.headnav').hide()
          $location.path("/" + id)
          $('#nav').removeClass("fa fa-times").addClass("fa fa-bars")
        }
/*
        $scope.bodyClick = function(e){
          $('body').unbind().click(function(e){
            if (e.target !== this){
                console.log("click")
                $('.headnav').hide()
                $('#nav').removeClass("fa-times").addClass("fa-bars")
              }
          })
        }

       //$scope.bodyClick();
*/

    });
