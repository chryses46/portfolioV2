(function() {
    'use strict';
    angular
    .module('portfolio', ['ui.router', 'ngTouch','ngAnimate', 'ngDialog', 'smoothScroll'])
    .run([ '$rootScope', '$state', '$stateParams', function ($rootScope, $state, $stateParams) {
      $rootScope.$state = $state;
      $rootScope.$stateParams = $stateParams;
    }])
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'angular-app/site-templates/home.html',
                params: {title: "Daniel Frank | Web Developer"}
            })
            .state('about', {
                url: '/about',
                templateUrl: 'angular-app/site-templates/about-me-proj.html',
                params: {title: "Daniel Frank | About Me"}
            })
            .state('ryu', {
                url: '/ryu',
                templateUrl: 'angular-app/site-templates/ryu-proj.html',
                params: {title: "Daniel Frank | Ryu jQuery Project"}
            })
            .state('shop', {
                url: '/shop',
                templateUrl: 'angular-app/site-templates/shop-proj.html',
                params: {title: "Daniel Frank | Shopping List App"}
            })
            .state('hotcold', {
                url: '/hotcold',
                templateUrl: 'angular-app/site-templates/hotcold-proj.html',
                params: {title: "Daniel Frank | Hot or Cold Game"}
            })
            .state('amelia-artist', {
                url: '/amelia-artist',
                templateUrl: 'angular-app/site-templates/amelia-artist.html',
                controller: 'AmeliaController',
                params: {title: "Amelia | Artist"}
            })
            .state('am-port', {
                url: '/am-port:id',
                templateUrl: 'angular-app/site-templates/am-portfolio.html',
                controller: 'AmeliaController',
                params: {id: "0", title: "Amelia | Artist - Portfolio"}
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

    $window.fbAsyncInit = function() {
    FB.init({ 
      appId: '{144574756073654}',
      status: true, 
      cookie: true, 
      xfbml: true,
      version: 'v2.4'
    });
};
})();
