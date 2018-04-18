//{ { } }
var app = angular.module('HangmanApp',[]);
app.controller('GameController', ['$scope', function ($scope) {
   var words = ['rat','cat','bat','mat','success','infinity'];
   $scope.incorrectLettersChoosen = [];
   $scope.correctLettersChoosen = [];
   $scope.guesses = 6;
   $scope.displayWords = '';
   $scope.input = {
      letter: ''
    }
     
    var selectRandomWord = function () {
        var index = Math.round(Math.random()* words.length);
        return words[index];
    }
   
    var newGame = function () {
     $scope.incorrectLettersChoosen = []; 
     $scope.correctLettersChoosen = [];
     $scope.guesses = 6;
     $scope.displayWords = '';
     var selectedWord = selectRandomWord();  
     var tempDisplayWord = '';
     for (let i = 0; i < selectedWord.length; i++) {
         tempDisplayWord += '*';
         
     }
     console.log(tempDisplayWord);
     $scope.displayWords = tempDisplayWord;         
    }

    $scope.letterChosen = function () {
        

    }

    newGame();
      

   


}]);