//window.onload = addProfsToPage;

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
  var profilesToAdd = ["bobisback", "abigail", "molly", "rita", "sonja"]; //filler
  for (var i = 0; i < profilesToAdd.length; i++){
    var specificProfile = profilesToAdd[i];
    var profile = document.createElement("p");
    profile.innerHTML = specificProfile;
    var notMenu = document.getElementById("notMenu");
    notMenu.appendChild(profile);
  }
}
