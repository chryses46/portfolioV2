angular.module('portfolio')
    .directive('header', function() {
        return {
            restrict: 'A',
            scope: false,
            templateUrl: 'angular-app/attr-templates/header.html'
        }
    })
