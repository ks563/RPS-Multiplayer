function assign() {
  var user = prompt("Username?", "Guest");
  var gameRef= firebase('https://rps-game-multi.firebaseio.com');
  assignPlayerNumberAndPlayGame(user, gameRef);
};

var playerCount = 2;
var gameLocation;
var playerLocation;
var playerDataLocation;
