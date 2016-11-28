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
  .factory('TopicFactory', [
    '$resource',
    TopicFactoryFunction
  ])
  .controller(
    "questionIndex",
    ["QuestionFactory", "TopicFactory",
    questionIndexController]
  )
  .controller("questionCtrl", [
    "$stateParams",
    "QuestionFactory",
    questionController
  ])
  .controller('topicCtrl', [
    '$stateParams',
    'TopicFactory',
      topicController
  ])


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
    .state("topics", {
      url: '/topics',
      templateUrl: '/js/ng-views/topics.html',
      controller: 'topicCtrl',
      controllerAs: 'vm'
  })
}

function questionIndexController (QuestionFactory, TopicFactory) {
  this.questions = QuestionFactory.query()
  this.topics = TopicFactory.query()
}

function questionController ($stateParams, QuestionFactory) {
  this.questions = QuestionFactory.query()
  // this.question = QuestionFactory.get({question: $stateParams.question})
  console.log(this.questions)
}

function topicController ($stateParams, TopicFactory) {
    this.topics = TopicFactory.query()
}

function QuestionFactoryFunction($resource){
  return $resource("/api/questions", {}, {
    update: {method: "PUT"}
  })
}

function TopicFactoryFunction($resource){
  return $resource("/api/topics", {}, {
    update: {method: "PUT"}
  })
}
