var file; // photo
var metadata;

var config = {
    apiKey: "AIzaSyDh2jRKkQi1KxZIzEdxNBZKVUE2ZcDCfSk",
    authDomain: "banderfirebase.firebaseapp.com",
    databaseURL: "https://banderfirebase.firebaseio.com",
    projectId: "banderfirebase",
    storageBucket: "banderfirebase.appspot.com",
    messagingSenderId: "568834129618"
  };
  firebase.initializeApp(config);


// Get refs for database and storage bucket
var database = firebase.database();
var storage = firebase.storage();
var storageRef = storage.ref();


function uploadProfile(){
  var theUsername = document.getElementById("username").value;
  var thePassword = document.getElementById("password").value;
  var theAbout = document.getElementById("about").value;
  var theName = document.getElementById("name").value;
  var Instruments = document.getElementById("instruments").value
  var whereToPutIt = database.ref("users/" + theUsername);
  whereToPutIt.set({password : thePassword, about : theAbout});
  var whereToPutPicture = storageRef.child("users/" + theUsername + "/" + file.name);
  whereToPutPicture.put(file, metadata);

}

function sendInfotoAbigail(){

}

// Register event listener to file selector
window.onload = function() {
  document.getElementById('photoFile').addEventListener('change', handleFileSelect, false);
}

/*
function loadData(){
  var key = document.getElementById('loadKey').value;
  database.ref(key).once('value').then(function(snapshot){
    var json = snapshot.val();
    var toBeDisplayed = "";
    if (json != null){
      toBeDisplayed = snapshot.val().theVal;
    } else {
      toBeDisplayed = "Sorry, couldn't find that key :(";
    }
    document.getElementById('valueShown').innerHTML = toBeDisplayed;
  });
}*/



function handleFileSelect(evt) {
  evt.stopPropagation();
  evt.preventDefault();
  file = evt.target.files[0];

  metadata = {
    'contentType': file.type
  };
  // how to get the filename, if you need it
  //var filename = file.name;
}

// NOTE: this will not work unless you configure CORS stuff
// need to download gsutil and make json file allowing cross domain access
// See instructions at https://firebase.google.com/docs/storage/web/download-files
/*function downloadFile(){
  var user = document.getElementById('username').value;
  storageRef.child('images/' + user).getDownloadURL().then(function(url) {
  // `url` is the download URL for 'images/cat.jpg'

  // Or inserted into an <img> element:
  var img = document.getElementById('myimg');
  img.src = url;
}).catch(function(error) {
  // Handle any errors
});
}*/
