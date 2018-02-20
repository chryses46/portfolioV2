(function() {
    'use strict';
    angular
    .module('portfolio', ['ui.router', 'ngTouch','ngAnimate', 'ngDialog', 'smoothScroll'])
    .run([ '$rootScope', '$state', '$stateParams', '$location', function ($rootScope, $state, $stateParams, $location) {
      $rootScope.$state = $state;
      $rootScope.$stateParams = $stateParams;

      $rootScope.$on('$stateChangeSuccess', function(){
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        $rootScope.page=$location.path();

        var re = /\/[am]+\-?[port]+[\d]?/;

        if ($location.path() == re.exec($location.path()) || $location.path() == '/amelia-artist'){
          $('.navcontainer').hide();
        } else {
          $('.navcontainer').show();
        }
      })
    }])
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/Home');
        $stateProvider
            .state('Home', {
                url: '/Home',
                templateUrl: 'angular-app/site-templates/Home.html',
                params: {title: "Daniel Frank | Web Developer Portfolio"}
            })
            .state('about', {
                url: '/about-me',
                templateUrl: 'angular-app/site-templates/about-me.html',
                params: {title: "Daniel Frank | About Me"}
            })
            .state('projects', {
                url: '/web-portfolio',
                templateUrl: 'angular-app/site-templates/web-portfolio.html',
                params: {title: "Daniel Frank | Web Developer Portfolio"}
            })
            .state('contact', {
                url: '/contact-me',
                templateUrl: 'angular-app/site-templates/contact-me.html',
                controller: 'contactController',
                params: {title: "Daniel Frank | Contact Me"}
            })
            .state('mail', {
                url: '/mail',
                templateUrl: 'angular-app/controllers/mail.php',
                controller: 'contactController',
                params: {title: "Daniel Frank | Thank you!"}
            })
            .state('games', {
                url: '/games',
                templateUrl: 'angular-app/site-templates/games.html',
                params: {title: "Daniel Frank | Games and Web Applications"}
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
            .state('blog', {
                url: '/web-developer-blog',
                templateUrl: 'angular-app/site-templates/web-developer-blog.html',
                controller:'BlogController',
                params: {title: "Daniel Frank | Web Developer Blog"}
            })
            .state('blog-latest', {
                url: '/web-developer-blog/:id',
                templateUrl: 'angular-app/site-templates/blog/latest.html',
                controller:'BlogController',
                params: {id:"0", title: "Daniel Frank | Web Developer Blog",index: null}
            })
            .state('blog-archive', {
                url: '/web-developer-blog/archive/:id',
                templateUrl: 'angular-app/site-templates/blog/archive.html',
                controller:'BlogController',
                params: {id:"0", title: "Daniel Frank | Web Developer Blog", index: null}
            })
            .state('amelia-artist', {
                url: '/amelia-artist',
                templateUrl: 'angular-app/site-templates/amelia-artist.html',
                controller: 'AmeliaController',
                params: {title: "Amelia | Model - Actor - Singer"}
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


})();
