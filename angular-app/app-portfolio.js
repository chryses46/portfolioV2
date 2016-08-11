(function() {
    'use strict';
    angular
        .module('portfolio', ['ui.router', 'ngTouch'])
        .config(function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/home');
            $stateProvider
                .state('home', {
                    url: '/home',
                    title: "Daniel Frank- Web Developer",
                    templateUrl: 'angular-app/site-templates/home.html'
                })
                .state('about', {
                    url: '/about',
                    title: "About Me",
                    templateUrl: 'angular-app/site-templates/about-me-proj.html'
                })
                .state('ryu', {
                    url: '/ryu',
                    title: "Ryu jQuery Page",
                    templateUrl: 'angular-app/site-templates/ryu-proj.html'
                })
                .state('shop', {
                    url: '/shop',
                    title: "Shopping List App",
                    templateUrl: 'angular-app/site-templates/shop-proj.html'
                })
                .state('hotcold', {
                    url: '/hotcold',
                    title: "Hot or Cold App",
                    templateUrl: 'angular-app/site-templates/hotcold-proj.html'
                })
        })

    // Attirbute Directives
    .directive('nav', function() {
            return {
                restrict: 'A',
                scope: false,
                templateUrl: 'angular-app/attr-templates/nav.html',
                controller: 'NavController',
                controllerAs: 'nav'
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
})();
