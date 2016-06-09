angular.module('portfolio')
	.directive('wordpress', function () {
		return {
			restrict: 'A',
			scope: false;
			templateUrl: 'angular-app/directives/wordpress.html'
		};
	});