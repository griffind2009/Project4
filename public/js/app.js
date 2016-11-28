angular
  .module("small", [
    "ui.router",
    "ngResource"
  ])
  .config([
    "$stateProvider",
    Router
  ])
  .factory("QuestionFactory", [
    "$resource",
    QuestionFactoryFunction
  ])
  .controller(
    "questionIndex",
    ["QuestionFactory",
    questionIndexController]
  )
  .controller("questionCtrl", [
    "$stateParams",
    "QuestionFactory",
    questionController
  ])

function questionIndexController (QuestionFactory) {
  this.questions = QuestionFactory.query()
}

function Router ($stateProvider) {
  $stateProvider
    .state("index", {
      url: "/",
      templateUrl: "/js/ng-views/index.html",
      controller: "questionIndex",
      controllerAs: "vm"
    })
    .state("questions", {
      url: '/questions',
      templateUrl: '/js/ng-views/questions.html',
      controller: 'questionCtrl',
      controllerAs: 'vm'
    })
}

function QuestionFactoryFunction($resource){
  return $resource("/api/questions", {}, {
    update: {method: "PUT"}
  })
}

function questionController ($stateParams, QuestionFactory) {
  this.questions = QuestionFactory.query()
  // this.question = QuestionFactory.get({question: $stateParams.question})
  console.log(this.questions)
}
