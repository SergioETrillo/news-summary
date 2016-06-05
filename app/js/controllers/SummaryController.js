newsSummaryApp.controller("SummaryAppController", ["SummaryFactory", "SummaryService", "$scope", "$routeParams", function(SummaryFactory, SummaryService, $scope, $routeParams) {
  var self = this;
  $scope.article_id = $routeParams.articleId;

  SummaryService.getAll().then(function(response) {

    self.articles = response;
  });

}]);
