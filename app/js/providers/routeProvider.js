newsSummaryApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/ShowArticle/:id', {
        templateUrl: 'templates/show_article.html',
        controller: 'SummaryController',
        article_data: ''
      });
}]);