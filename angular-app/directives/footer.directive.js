angular.module('portfolio')
    .directive('footer', function() {
        return {
            restrict: 'A',
            scope: false,
            templateUrl: 'angular-app/attr-templates/footer.html'
        };
    });
