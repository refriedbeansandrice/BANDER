 // Initialize Firebase
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
  var storage = firebase.storage();
  var storageRef = storage.ref();

function loadingPage(){
  // get the info from rita
  var user = sessionStorage.username;
  console.log(user);
  database.ref("users/" + user + "/").once('value').then(function(snapshot){ //gets info from database depending on user
    var userinfo = snapshot.val(); 
    console.log(userinfo);

    var instrumentsInfo = "Instruments: ";
    for (var key in userinfo.instruments){
      if (userinfo.instruments[key] == true){
        instrumentsInfo = instrumentsInfo + key + ", ";
      }
     }
    instrumentsInfo = instrumentsInfo.substring(0, instrumentsInfo.length - 2);
    document.getElementById("instruments").innerHTML = instrumentsInfo; 
    document.getElementById("experience").innerHTML = "Experience: " + userinfo.skill;
    document.getElementById("location").innerHTML = "Location: " + userinfo.location;
    document.getElementById("username").innerHTML = user;
    document.getElementById("name").innerHTML = userinfo.name;
    document.getElementById("gender").innerHTML = userinfo.gender;
    document.getElementById("about").innerHTML = "About: " + userinfo.about; 
    storageRef.child('users/' + user + "/" + userinfo.picture).getDownloadURL().then(function(url) {
      var img = document.getElementById("userPhoto");
      img.src = url; });

  });
}

 
//Loads data on to profile 
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
    document.getElementById('loadValue').innerHTML = toBeDisplayed;
  });
}