console.log("working")
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

// function questionIndexController (QuestionFactory) {
//   // this.questions = Question.query()
// }

function Router ($stateProvider) {
  $stateProvider
    .state("index", {
      url: "/",
      templateUrl: "/public/js/ng-views/index.html"
      // controller: "questionIndex",
      // controllerAs: "vm"
    })
    .state("questions", {
      url: '/questions',
      templateUrl: '/public/js/ng-views/questions.html',
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
  this.questions = Question.query()
  console.log(this.questions)
}
