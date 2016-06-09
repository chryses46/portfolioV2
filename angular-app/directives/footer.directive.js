angular.module('portfolio')
    .directive('footer', function() {
        return {
            restrict: 'A',
            scope: false,
            templateUrl: 'angular-app/directives/footer.html'
        };
    });
