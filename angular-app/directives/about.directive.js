angular.module('portfolio')
	.directive('about', function () {
		return {
			restrict: 'A',
			scope: false,
			templateUrl: 'angular-app/directives/about.html'
		};
	});