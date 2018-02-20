angular.module('portfolio')
    .controller('NavController', function($rootScope,$scope,$location) {
      $('#headnav').hide()
        $scope.showNav = function() {
          if ($('#nav').hasClass("fa-bars")){
            $('#nav').removeClass("fa-bars").addClass("fa-times")
            $('.headnav').show()
          } else {
            $('#nav').removeClass("fa-times").addClass("fa-bars")
            $('#headnav').hide()
          }
        }

        $scope.menuClick = function(id) {
          $('#headnav').hide()
          $location.path("/" + id)
          $('#nav').removeClass("fa-times").addClass("fa-bars")
        }


        $(document).unbind().mouseup(function(e){
          e.preventDefault;
          var headnav = $('#headnav');
          var navham = $('#nav');

          if (!headnav.children().is(e.target) && headnav.has(e.target).length === 0 && !navham.is(e.target)){
              headnav.hide()
              $('#nav').removeClass("fa-times").addClass("fa-bars")
            }
        })




    });
