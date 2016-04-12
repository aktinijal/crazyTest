
  var app = angular.module('app', []);
  app.controller('QuestionCtrl',['$scope', function($scope){
    console.log("question");

    $scope.testQuestions = questions;
    $scope.testAnswers = answers;
    $scope.testResults = results;

    // $scope.randomQuestion = function(){
    //   return $scope.testQuestions[Math.floor(Math.random()*$scope.testQuestions.length)];
    // }
    $scope.randomAnswer = function(){
      // console.log(1);
    }
    // $scope.randomResult = function(){
    //   return $scope.testResults[Math.floor(Math.random()*$scope.testResults.length)];
    // }


}]);
