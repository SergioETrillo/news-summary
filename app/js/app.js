var newsSummaryApp = angular.module("newsSummaryApp", ['env', 'ngSanitize', 'ngRoute']);

newsSummaryApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'templates/main.html',
        controller: 'SummaryAppController'
      })
      .when('/showArticle/:articleId', {
        templateUrl: 'templates/show-article.html',
        controller: 'SummaryAppController',
        article_data: ''
      });
      // .otherwise({redirectTo: '/'});
}]);