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
  console.log('hereitis');
  var theUsername = document.getElementById("username").value;
  var thePassword = document.getElementById("password").value;
  var theAbout = document.getElementById("about").value;
  var theName = document.getElementById("name").value;
  var Instruments = document.getElementById("instruments").value;
  var theGender = document.getElementById("gender").value;
  var skillLevel = document.getElementById("skill").value;
  var theAge = document.getElementById("age").value;
  var theLocation = document.getElementById("location").value;
  //var thePhoto document.getElementById("profilePic").value;
  var whereToPutIt = database.ref("users/" + theUsername);
  var guitarValue;
  var vocalsValue;
  var drumsValue;
  var pianoValue;
  var ukuleleValue;
  //var value1 = document.getElementById("guitar").value;
//  console.log(value1);
//  var value2 = document.getElementById("vocals").value;
//  console.log(value2);
  if (document.getElementById("guitar").checked){
    guitarValue = true;
  } else{
    guitarValue = false;
  }
  if(document.getElementById("vocals").checked){
    vocalsValue = true;
  } else {
    vocalsValue = false;
  }
  if(document.getElementById("drums").checked){
    drumsValue = true;
  } else {
    drumsValue = false;
  }
  if(document.getElementById("piano").checked){
    pianoValue = true;
  } else {
    pianoValue = false;
  }
  if(document.getElementById("ukulele").checked){
    ukuleleValue = true;
  } else {
    ukuleleValue = false;
  }

  if(theUsername != "") {
    whereToPutIt.set({
    password : thePassword,
    about : theAbout,
    name : theName,
    age : theAge,
    skill : skillLevel,
    gender : theGender,
    location : theLocation,
    picture : file.name,
    instruments : {
      guitar : guitarValue,
      vocals : vocalsValue,
      drums : drumsValue,
      piano : pianoValue,
      ukulele : ukuleleValue
    }});
    console.log("about to store picture");
    var whereToPutPicture = storageRef.child("users/" + theUsername + "/" + file.name);
    whereToPutPicture.put(file, metadata).then(function(snapshot) {
    var url = snapshot.downloadURL;
    console.log('File available at', url);
    window.location.href="banderm.html";
  });
  } else {
    console.log("U SUCK U SUCK U SUCUK")
    document.getElementById("error").innerHTML = "enter a username pls"
  }
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
  // console.log(file)

  metadata = {
    'contentType': file.type
  };
  // how to get the filename, if you need it
  //var filename = file.name;
  var img = document.getElementById("profilePic");
  var myReader = new FileReader();
  myReader.onloadend = function(){
    img.src = myReader.result;
  }
  myReader.readAsDataURL(file);
}

function changeSrc(){

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
