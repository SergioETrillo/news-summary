newsSummaryApp.controller("SummaryAppController", ["SummaryFactory", "SummaryService", function(SummaryFactory, SummaryService) {
  var self = this;

  SummaryService.getAll().then(function(response) {
    self.articles = response;
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
