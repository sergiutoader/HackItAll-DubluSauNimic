
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
 var firebaseConfig = {
    apiKey: "AIzaSyDh4XXtbXqd_UpjAMs20fUpyZ5TYUJRfW8",
    authDomain: "hackitall-66cb0.firebaseapp.com",
    databaseURL: "https://hackitall-66cb0-default-rtdb.firebaseio.com",
    projectId: "hackitall-66cb0",
    storageBucket: "hackitall-66cb0.appspot.com",
    messagingSenderId: "535986942185",
    appId: "1:535986942185:web:22ea42cf5d84dbac2f0078"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.database();

// la apasarea
function loginPressed() {
  let username = document.getElementById("username-field").value;
  let password = document.getElementById("password-field").value;

  writeUserData(username, password);

  console.log(username);
  console.log(password);
}


function writeUserData(username, password) {
  firebase.database().ref('users/' + username).set({
    username: username,
    password: password,
  });
}
