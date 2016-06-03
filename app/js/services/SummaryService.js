newsSummaryApp.service("SummaryService", [ "$env", "SummaryFactory", "$http", function( $env, SummaryFactory, $http) {

  this.getAll = function() {
    return $http.get($env.apiURL).then(_iterateThrough);
  };

  function _iterateThrough (response) {
    var articles = [];

    response.data.response.results.forEach(function(object) {
      $http.get($env.summaryUrl + object.webUrl).success(function(response){
        articles.push(new SummaryFactory(object.webTitle, object.webPublicationDate,
        object.fields.thumbnail, object.fields.body, object.webUrl, response.sentences));
      });
    });

    return articles;
  }

  function _summaryProcess(response) {

  }

}]);