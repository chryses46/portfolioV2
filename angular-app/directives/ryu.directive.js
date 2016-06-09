angular.module('portfolio')
    .directive('ryu', function() {
        return {
            restrict: 'A',
            scope: false,
            templateUrl: 'angular-app/attr-templates/ryu.html'
        };
    });
