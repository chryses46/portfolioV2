angular.module('portfolio')
	.directive('about', function () {
		return {
			restrict: 'A',
			scope: false,
			templateUrl: 'angular-app/attr-templates/about.html'
		};
	});