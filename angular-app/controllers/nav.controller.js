angular.module('portfolio')
    .controller('NavController', function($rootScope,$scope,$location) {
        
        console.log($location.path())
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


        $(document).unbind().mouseup(function(e){
          e.preventDefault;
          var headnav = $('.headnav');
          var navham = $('#nav');

          if (!headnav.children().is(e.target) && headnav.has(e.target).length === 0 && !navham.is(e.target)){
              console.log("click")
              headnav.hide()
              $('#nav').removeClass("fa-times").addClass("fa-bars")
            }
        })




    });
