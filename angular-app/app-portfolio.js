(function() {
    'use strict';
    angular
        .module('portfolio', ['ui.router'])
        .config(function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/home');
            $stateProvider
                .state('home', {
                    url: '/home',
                    title: 'About Me',
                    templateUrl: 'angular-app/site-templates/home.html'
                })
        })
    // Attirbute Directives
        .directive('header', function() {
            return {
                restrict: 'A',
                scope: false,
                templateUrl: 'angular-app/attr-templates/header.html'
            }
        })
        .directive('footer', function() {
            return {
                restrict: 'A',
                scope: false,
                templateUrl: 'angular-app/attr-templates/footer.html'
            }
        })
        .directive('intro', function() {
            return {
                restrict: 'A',
                scope: false,
                templateUrl: 'angular-app/attr-templates/intro.html'
            }
        })
        .directive('about', function() {
            return {
                restrict: 'A',
                scope: false,
                templateUrl: 'angular-app/attr-templates/about.html'
            };
        })
        .directive('ryu', function() {
            return {
                restrict: 'A',
                scope: false,
                templateUrl: 'angular-app/attr-templates/ryu.html'
            };
        })
        .directive('shopping', function() {
            return {
                restrict: 'A',
                scope: false,
                templateUrl: 'angular-app/attr-templates/shopping.html'
            }
        })
        .directive('hotcold', function() {
            return {
                restrict: 'A',
                scope: false,
                templateUrl: 'angular-app/attr-templates/hotcold.html'
            }
        })
        .directive('wordpress', function() {
            return {
                restrict: 'A',
                scope: false,
                templateUrl: 'angular-app/attr-templates/wordpress.html'
            }
        })

    // Project Directives
    .directive('aboutMe', function() {
        return {
            restrict: 'A',
            scope: false,
            templateUrl: 'angular-app/site-templates/about-me-proj.html'
        }
    })
})();
