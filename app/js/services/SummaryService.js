newsSummaryApp.service("SummaryService", [ "$env", "SummaryFactory", "$http", function( $env, SummaryFactory, $http) {

  this.getAll = function() {
    // console.log("4");
    var respFromAPI =$http.get($env.apiURL).then(_iterateThrough);
    console.log("resp from API:",respFromAPI);
    return respFromAPI;
  };

  // quizas una función para obtener el modelo dependiendo del ID??
  this.getArticle = function(id) {

  };

  function _iterateThrough (response) {
    var articles = [];

    response.data.response.results.forEach(function(object) {
      $http.get($env.summaryUrl + object.webUrl).success(function(response){
        console.log(response);
        articles.push(new SummaryFactory(object.webTitle, object.webPublicationDate,
        object.fields.thumbnail, object.fields.body, object.webUrl, response.sentences));
        // console.log("5");

      });
    });

    return articles;
  }

  function _summaryProcess(response) {

  }

}]);