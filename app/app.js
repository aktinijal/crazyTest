(function(){
  var app = angular.module('app', ['ngRoute']);

  app.controller('HomeController',['$scope', function($scope){
    $scope.testQuestions = questions;
    $scope.testAnswers = answers;
    $scope.testResults = results;

    $scope.randomQuestion = function(){
      return $scope.testQuestions[Math.floor(Math.random()*$scope.testQuestions.length)];
    }
    $scope.randomAnswer = function(){
      return $scope.testAnswers[Math.floor(Math.random()*$scope.testAnswers.length)];
    }
    $scope.randomResult = function(){
      return $scope.testResults[Math.floor(Math.random()*$scope.testResults.length)];
    }

  }]);

  app.config(['$logProvider', '$routeProvider', function($logProvider, $routeProvider){
    $logProvider.debugEnabled(true);

    $routeProvider
        .when('/',{
          controller:'HomeController',
          templateUrl:'app/templates/home.html'
        })
        .when('#/question',{
          controller:'HomeController',
          templateUrl:'app/templates/question.html'
        })
        .when('#/result',{
          controller:'HomeController',
          templateUrl:'app/templates/result.html'
        })
        .otherwise('/');


  }]);



var questions = [
  '1 question',
  '2 question',
  '3 question',
  '4 question'
];
 var answers = [
   '1 answer',
   '2 answer',
   '3 answer',
   '4 answer',
   '5 answer',
   '6 answer',
   '7 answer',
   '8 answer',
   '9 answer',
   '10 answer',
   '11 answer',
   '12 answer',
   '13 answer',
   '14 answer',
   '15 answer',
   '16 answer'
 ];
 var results = [
   '1 result',
   '2 result',
   '3 result',
   '4 result'
 ];

})();
