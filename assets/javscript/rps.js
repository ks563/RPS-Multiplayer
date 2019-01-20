
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCBB1uzdQ3BTh7-qkOM9V5otQFrycF6lPc",
    authDomain: "rps-game-multi.firebaseapp.com",
    databaseURL: "https://rps-game-multi.firebaseio.com",
    projectId: "rps-game-multi",
    storageBucket: "rps-game-multi.appspot.com",
    messagingSenderId: "865628490452"
  };
  firebase.initializeApp(config);

var database = firebase.database();
  
var playerOne;
var playerTwo;
var playerOneChoice;
var playerTwoChoice;
