var defaultAuth = firebase.auth();


firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
  //handles errors
  var errorCode = error.code;
  var errorMessage = error.message;
  
});


firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
  //handles errors
  var errorCode = error.code;
  var errorMessage = error.message;

});

var createUser = function () {
  var name = $("#nameInput");
  var email = $("#emailInput");
  var password = $("#passwordInput");

  firebase.auth().onAuthStateChanged(function (user) {
    
  })

};
