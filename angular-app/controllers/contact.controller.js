angular.module('portfolio')
  .controller('contactController', function($rootScope,$scope,$location,$http){

    $scope.success= false;
    $scope.error=false;

    $scope.contactForm= function(input){
      $http({
        method: "POST",
        url: "php/mail.php",
        data: input,
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
      })
      .success(function(data) {
        if(data.success) {
          $scope.success = true;
          $("#contactDetails").hide();
          $("#contactIntro").hide();
        } else {
          $scope.error = true;
        }
      });
      //$location.path('/mail');
    }

  });
