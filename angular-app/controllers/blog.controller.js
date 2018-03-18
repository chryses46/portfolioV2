angular.module('portfolio')
    .controller('BlogController', function($rootScope,$scope,$location,$stateParams) {
      $scope.blogCollection=$scope.BlogJournal[$stateParams.index]
      $scope.MostRecent = ($scope.BlogJournal.length - 1);
      $scope.RecentPost = $scope.BlogJournal[$scope.MostRecent];

});
