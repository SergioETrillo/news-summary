newsSummaryApp.controller("SummaryAppController", ["SummaryFactory", "SummaryService", function(SummaryFactory, SummaryService) {
  var self = this;
  console.log("2");

  SummaryService.getAll().then(function(response) {
    console.log("1");
    self.articles = response;
      console.log("3");
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
