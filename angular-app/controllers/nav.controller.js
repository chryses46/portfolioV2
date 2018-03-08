angular.module('portfolio')
    .controller('NavController', function($rootScope,$scope,$location) {

      $scope.showNav = function() {
        if ($('#buttonContainer').hasClass("vbars")){
          console.log("showNav->hide")
          $('#buttonContainer').removeClass("vbars").addClass("bars");
          $('#topnav').hide();
        } else{
            console.log("showNav->show");
            $('#buttonContainer').removeClass("bars").addClass("vbars");
            $('#topnav').show();
          }
      }

        $scope.menuClick = function(id) {
          console.log("menuClick function called.")
          $('#topnav').hide()
          $location.path("/" + id)
          $('#buttonContainer').removeClass("vbars").addClass("bars")
        }


      $(document).unbind().mouseup(function(e){
        console.log("mouseup function called.");
        e.preventDefault;
        var buttonContainer = $('#buttonContainer');
        var topnav = $('#topnav');

        if (!topnav.children().is(e.target) && !buttonContainer.is(e.target)){
          console.log("mouseup-> hide");
          $('#buttonContainer').removeClass("vbars").addClass("bars");
          $('#topnav').hide();
        }
      })
    });
