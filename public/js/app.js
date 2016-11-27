angular
  .module("small", [
    "ui.router",
  ])
  .config([
    "$stateProvider",
    Router
  ])
  .controller([
    "questionIndex",
    [questionIndexController]
  ])

function questionIndexController () {
  this.questions = Question.query()
}

function Router ($stateProvider) {
  $stateProvider
    .state("index", {
      url: "/index",
      templateUrl: "/public/js/ng-views/index.html",
      controller: "questionIndex",
      controllerAs: "vm"
    })
}
