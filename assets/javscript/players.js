function assign() {
  var user = prompt("Username?", "Guest");
  var gameRef = firebase.database().ref();
  assignPlayerNumberAndPlayGame(user, gameRef);
};

var playerCount = 2;
var gameLocation = firebase.database().ref();
var playerLocation;
var playerDataLocation;
