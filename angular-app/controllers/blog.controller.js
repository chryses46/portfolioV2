angular.module('portfolio')
    .controller('BlogController', function($rootScope,$scope,$location,$stateParams) {

      $scope.BlogJournal = [
        {title: 'My first blog post!',
        entry: 'Words and things that are important.',
        index: 0,
        img: '/img/dallas-seo-blog/1.jpg'},
        {title: 'My second blog post!',
        entry: "Clearly, this is my second post. I'm getting better at this",
        index: 1,
        img: '/img/dallas-seo-blog/2.jpg'},
        {title: 'My third blog post!',
        entry: "Clearly, this is my third post. I'm getting better at this",
        index: 2,
        img: '/img/dallas-seo-blog/3.jpg'},
        {title: 'My fourth blog post!',
        entry: "Clearly, this is my fourth post. I'm getting better at this",
        index: 3,
        img: '/img/dallas-seo-blog/4.jpg'}/*,
        {title: 'My fifth blog post!',
        entry: "Clearly, this is my fifth post. I'm getting better at this",
        index: 4,
        img: '/img/dallas-seo-blog/5.jpg'}*/
      ];

      $scope.blogCollection=$scope.BlogJournal[$stateParams.index]
      $scope.MostRecent = ($scope.BlogJournal.length - 1);
      $scope.RecentPost = $scope.BlogJournal[$scope.MostRecent];

});
