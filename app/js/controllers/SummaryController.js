newsSummaryApp.controller("SummaryAppController", ["SummaryFactory", "SummaryService", function(SummaryFactory, SummaryService, $scope, $routeParams) {
  var self = this;
  // console.log("2");
  // $scope.article_id = $routeParams.articleId;

  SummaryService.getAll().then(function(response) {
    // console.log("1");
    self.articles = response;
      // console.log("3");
  });

  // this.addSummary = function(todoText) {
  //   self.todos.push(new SummaryFactory(todoText));
  // };

  // this.removeSummary = function() {
  //   self.todos.pop();
  // };

  // this.removeCompleted = function() {
  //   self.todos = self.todos.filter(function(todo){return !todo.completed ;});
  // };

}]);
