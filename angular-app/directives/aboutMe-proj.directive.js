angular.module('portfolio')
	.directive('aboutMe', function() {
    return {
        restrict: 'A',
        scope: false,
        templateUrl: 'angular-app/site-templates/about-me-proj.html'
    };
});
