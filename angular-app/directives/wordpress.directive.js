angular.module('portfolio')
	.directive('wordpress', function () {
		return {
			restrict: 'A',
			scope: false;
			templateUrl: 'angular-app/attr-templates/wordpress.html'
		};
	});