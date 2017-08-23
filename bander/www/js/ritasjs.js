var config = {
    apiKey: "AIzaSyDh2jRKkQi1KxZIzEdxNBZKVUE2ZcDCfSk",
    authDomain: "banderfirebase.firebaseapp.com",
    databaseURL: "https://banderfirebase.firebaseio.com",
    projectId: "banderfirebase",
    storageBucket: "banderfirebase.appspot.com",
    messagingSenderId: "568834129618"
  };
firebase.initializeApp(config);

var database = firebase.database();


function sendInfotoAbigail(){
  var username = document.getElementById('loadKey').value;
  var password = document.getElementById('loadValue').value;

  database.ref("users/" + username).once('value').then(function(snapshot){
    var toBeDisplayed = ""
    var entiredictionary = snapshot.val();
    if (entiredictionary != null){
      var theirpassword = entiredictionary["password"]
      if (theirpassword == password){
        sessionStorage.setItem("username", document.getElementById("loadKey").value);
        window.location.href = "banderm.html";
      }
      else{
        toBeDisplayed = "Incorrect Password";
      }
    } else {
      toBeDisplayed = "Sorry, that user does not exist.";
    }
    document.getElementById('valueShown').innerHTML = toBeDisplayed;
  });
}
