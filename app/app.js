(function(){
  var app = angular.module('app', ['ngRoute']);

  app.config([ '$routeProvider', function( $routeProvider){

    $routeProvider
        .when('/',{
          controller:'HomeCtrl',
          templateUrl:'app/templates/home.html'
        })
        .when('/question',{
          controller:'QuestionCtrl',
          templateUrl:'app/templates/question.html'
        })
        .when('/result',{
          controller:'ResultCtrl',
          templateUrl:'app/templates/result.html'
        })
        .otherwise('/');


  }]);


  app.controller('HomeCtrl',['$scope', function($scope){
    console.log("home");


}]);

app.controller('QuestionCtrl',['$scope', function($scope){
  console.log("question");

  $scope.testQuestions = questions;
  $scope.testAnswers = answers;
  $scope.testResults = results;

  // $scope.randomQuestion = function(){
  //   return $scope.testQuestions[Math.floor(Math.random()*$scope.testQuestions.length)];
  // }

  $scope.randomAnswer = function(array){
  $scope.resultArray = [];
  for(var i = 0; i<4; i++){
    var randomIndex = Math.floor(Math.random()*array.length);  //length is not defined

    $scope.resultArray.push(array[randomIndex]);
  }
  return $scope.resultArray;
}

$scope.questionsResult = $scope.randomAnswer($scope.testQuestions);
$scope.answersResult = $scope.randomAnswer($scope.testAnswers);
$scope.resultsResult = $scope.randomAnswer($scope.testResults);

// console.log($scope.resultArray);


  // $scope.randomResult = function(){
  //   return $scope.testResults[Math.floor(Math.random()*$scope.testResults.length)];
  // }


}]);

app.controller('ResultCtrl',['$scope', function($scope){
  console.log("result");


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
