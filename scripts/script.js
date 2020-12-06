
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyA65yQ2iHBDo0Lk4xAZUE00B-T7RB9MH2M",
    authDomain: "hack-2db71.firebaseapp.com",
    databaseURL: "https://hack-2db71-default-rtdb.firebaseio.com",
    projectId: "hack-2db71",
    storageBucket: "hack-2db71.appspot.com",
    messagingSenderId: "129351751967",
    appId: "1:129351751967:web:172dcac07d136407ba382a",
    measurementId: "G-MTN8ZWD4T7"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.database();

var current_user;

function loginPressed() {
  let username = document.getElementById("username-field").value;
  let password = document.getElementById("password-field").value;

  let loginSuccessful = false;

  database.ref('users/' + username).once('value').then((snapshot) => {
    var userEntry = snapshot.val();

    
    if(userEntry != null) {
        var currUser = userEntry.username;
        var currPassword = userEntry.password;

        if(username == currUser && password == currPassword) {
          let successfulMessage = document.getElementById("successful-login");
          successfulMessage.style.display="block";  

          let loginErrorDiv = document.getElementById("login-error-div");
          loginErrorDiv.style.display="none";

          current_user = username;

          let myProfileButton = document.getElementById("my-profile-button");
          var url = 'http://localhost:3000/profile.html?name=' + encodeURIComponent(current_user);
          myProfileButton.href = url;

          localStorage["username"] = current_user;


        } else {
          let unsuccessfulMessage = document.getElementById("unsuccessful-login")
          unsuccessfulMessage.style.display="block";
        }
    }
  });

  let loginForm = document.getElementById("login-form");
  loginForm.style.display="none";

}

function loginClosePressed() {
  let loginForm = document.getElementById("login-form");
  loginForm.style.display="block";

  let successfulMessage = document.getElementById("successful-login");
    successfulMessage.style.display="none";


  let unsuccessfulMessage = document.getElementById("unsuccessful-login")
  unsuccessfulMessage.style.display="none";


  let loginErrorDiv = document.getElementById("login-error-div");
  loginErrorDiv.style.display="none";
}



function registerPressed() {
  let unsuccessfulMessage = document.getElementById("unsuccessful-register");
  unsuccessfulMessage.style.display="none";

  let successfulMessage = document.getElementById("successful-register");
      successfulMessage.style.display="none";  


  let username = document.getElementById("register-username-field").value;
  let password = document.getElementById("register-password-field").value;

  let loginSuccessful = false;

  // verificare existenta cont in baza de date
  database.ref('users/' + username).once('value').then((snapshot) => {
    var userEntry = snapshot.val();
    if(userEntry != undefined) {
      unsuccessfulMessage.style.display="block";
    } else {
      current_user = username;
      writeUserData(username, password);
      successfulMessage.style.display="block";  
    }
  });

}

function registerClosePressed() {
  let registerForm = document.getElementById("register-form");
  registerForm.style.display="block";

  let successfulMessage = document.getElementById("successful-register");
    successfulMessage.style.display="none";


  let unsuccessfulMessage = document.getElementById("unsuccessful-register")
    unsuccessfulMessage.style.display="none";
}


function checkLoggedIn() {
  let loginErrorDiv = document.getElementById("login-error-div");
  loginErrorDiv.style.display="none";

  let myProfileButton = document.getElementById("my-profile-button");
  if(current_user != undefined) {
    myProfileButton.href = "profile.html";
    loginErrorDiv.style.display="none";
  } else {
    loginErrorDiv.style.display = "block";
  }

}


function writeUserData(username, password) {
  firebase.database().ref('users/' + username).set({
    username: username,
    password: password,
  });
}
