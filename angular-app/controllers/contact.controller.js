angular.module('portfolio')
  .controller('contactController', function($rootScope,$scope,$location,$http){

    $scope.success= false;
    $scope.error=false;

    $scope.contactForm= function(input){
      $http({
        method: "POST",
        url: "php/mail.php",
        data: angular.element.param(input),
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
      })
      .success(function(data) {
        if(data.success) {
          $scope.success = true;
          $("#contactDetails").hide();
          $("#contactIntro").hide();
          console.log(input);
        } else {
          $scope.error = true;
          console.log(input);
        }
      });
      //$location.path('/mail');
    }

  });
