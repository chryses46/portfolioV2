angular.module('portfolio')
  .controller('AmeliaController', function($stateParams, $location, $rootScope, $scope, ngDialog, smoothScroll) {


      if ($stateParams.id > 0 ){
          $scope.currentIndex = $stateParams.id;
          console.log($stateParams.id);
      }else $scope.currentIndex = 0;

      //Array of imgs for Portfolio Section
      $scope.portImages = [{
          loc: '/img/portImgs/newSet1.jpg',
          photog: 'Logan Grey'
        },{
          loc: '/img/portImgs/newSet2.jpg',
          photog: 'Logan Grey'
        },{
          loc: '/img/portImgs/newSet3.jpg',
          photog: 'Logan Grey'
        },{
          loc: '/img/portImgs/newSet4.jpg',
          photog: 'Logan Grey'
        },{
          loc: '/img/portImgs/newSet5.jpg',
          photog: 'Matthew Freed'
        },{
          loc: '/img/portImgs/newSet6.jpg',
          photog: 'Tim Bracey'
        },{
          loc: '/img/portImgs/newSet7.jpg',
          photog: 'Logan Grey'
        },{
          loc: '/img/portImgs/newSet8.jpg',
          photog: 'Logan Grey'
        }];



      $scope.openSlider= function(index){
          $scope.currentIndex = index;
      }

      $scope.setCurrentSlideIndex = function(index){
          $scope.currentIndex = index;
      };

      $scope.isCurrentSlideIndex = function(index){
          return $scope.currentIndex == index;
      };

      $scope.prevSlide = function(){
          $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.portImages.length - 1;
      };

      $scope.nextSlide = function(){
          $scope.currentIndex = ($scope.currentIndex < $scope.portImages.length -1) ? ++$scope.currentIndex : 0;
      };

      /* Eventually this will load images from BLOBS in DB
      $scope.getImages = function() {
          return ContentService.getImages();
      };
      */

      /* Eventually this will collapse mobile sections by clicking the up arrow. Maybe
      $scope.collapse = function(){
          console.log("clicked");
      };
      */

      $scope.changeStyle = function(){
          if ($('#cssId').attr('href') == 'css/am-style.css'){
              $('#cssId').attr('href', 'css/am-bright-style.css');
              console.log("Changed style sheet to: " + $('#cssId').attr('href'));
          } else {
              $('#cssId').attr('href', 'css/am-style.css');
              console.log( "Changed style sheet to: " + $('#cssId').attr('href'));
          }

      }

       //Scroll to 'home' id
      $scope.goToTop = function() {
          var home = document.getElementById('home'),
              old = $location.hash(),
              options = {
                  duration: 300
              };
          $location.hash(home);
          smoothScroll(home);
          $location.hash(old);
      };

      //Go to Portfolio page w/image index
      $scope.portNav = function(index){
          $location.path('/am-port' + index);
      }

  })
