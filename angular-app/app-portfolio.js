(function() {
    'use strict';
    angular
        .module('portfolio', [])
        // Attirbute Directives
        .directive('header', function () {
            return {
                restrict: 'A',
                scope: false,
                templateUrl: 'angular-app/directives/header.html'
            }
        })
        .directive('footer', function () {
            return {
                restrict: 'A',
                scope: false,
                templateUrl: 'angular-app/directives/footer.html'
            }
        })
        .directive('intro', function () {
            return {
                restrict: 'A',
                scope: false,
                templateUrl: 'angular-app/directives/intro.html'
            }
        })
        .directive('about', function() {
            return {
                restrict: 'A',
                scope: false,
                templateUrl: 'angular-app/directives/about.html'
            };
        })
        .directive('ryu', function() {
            return {
                restrict: 'A',
                scope: false,
                templateUrl: 'angular-app/directives/ryu.html'
            };
        })
        .directive('shopping', function() {
            return {
                restrict: 'A',
                scope: false,
                templateUrl: 'angular-app/directives/shopping.html'
            }
        })
        .directive('hotcold', function() {
            return {
                restrict: 'A',
                scope: false,
                templateUrl: 'angular-app/directives/hotcold.html'
            }
        })
        .directive('wordpress', function() {
            return {
                restrict: 'A',
                scope: false,
                templateUrl: 'angular-app/directives/wordpress.html'
            }
        })
        // Project Directives
})();
