//window.onload = addProfsToPage;

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

function addProfsToPage(){
  //creating variables for stuff selected on molly's pg
  var age = sessionStorage.age;
  var gender = sessionStorage.gender;
  var instruments = sessionStorage.instruments;
  var location = sessionStorage.location;
  var skill = sessionStorage.skill;

  //sorting thru users in database
  database.ref("users/").once('value').then(function(snapshot){ //gets info from database depending on user
    var users = snapshot.val();
    for (var user in users){
      if (user.gender == gender){

    }
  }

  //USE this code to display list of matching users onto browse page
  var profilesToAdd = ["bobisback", "abigail", "molly", "refriedbeansandrice", "sonja"]; //filler
  for (var i = 0; i < profilesToAdd.length; i++){
    var specificProfile = profilesToAdd[i];
    var profile = document.createElement("p");
    profile.innerHTML = specificProfile;
    profile.onclick = function(profile){
      var chosenUsername = this.innerHTML;
      sessionStorage.setItem("otherUser", chosenUsername);
      window.location.href="otherProfile.html";
    }
    var notMenu = document.getElementById("notMenu");
    notMenu.appendChild(profile);
  }
});
}

function goToNewPage(theThing){
  var chosenUsername = theThing.innerHTML;
  sessionStorage.setItem("otherUser", chosenUsername);
  window.location.href="otherProfile.html";
}
