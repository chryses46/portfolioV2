angular.module('portfolio')
	.directive('shopping', function () {
		return {
			restrict: 'A',
			scope: false,
			templateUrl: 'angular-app/attr-templates/shopping.html'
		};
	});