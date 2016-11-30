angular
  .module("small", [
    "ui.router",
    "ngResource"
  ])
  .config([
    "$stateProvider",
    "$locationProvider",
    "$urlRouterProvider",
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
    "$state",
    "$stateParams",
    "QuestionFactory",
    questionController
  ])
  .controller('topicCtrl', [
    '$state',
    '$stateParams',
    'TopicFactory',
      topicController
  ])


function Router ($stateProvider, $locationProvider, $urlRouterProvider) {
  $locationProvider.html5Mode(true)
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
  $urlRouterProvider.otherwise("/")
}

function questionIndexController (QuestionFactory, TopicFactory) {
  this.questions = QuestionFactory.query()
  this.topics = TopicFactory.query()
}

function questionController ($state, $stateParams, QuestionFactory) {
  this.questions = QuestionFactory.query()
  console.log(this.questions)
}

function topicController ($state, $stateParams, TopicFactory) {
    this.topics = TopicFactory.query()
    this.newTopic = new TopicFactory()
    this.create = function () {
      this.newTopic.$save().then(function(topic){
        $state.go('topics', {name: topic.name}, {reload: true})
      })
    }
    this.showTopic = function() {
    }
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
