angular.module('portfolio')
	.directive('hotcold', function () {
		return {
			restrict: 'A',
			scope: false,
			templateUrl: 'angular-app/attr-templates/hotcold.html'
		};
	});