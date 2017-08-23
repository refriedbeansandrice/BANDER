//window.onload = addProfsToPage;
function genderGood(desiredGender, userGender){
  console.log(desiredGender);
  console.log(userGender);
  if (desiredGender == "N/A"){
    return true;
  }
  else if (desiredGender == userGender){
    return true;
  }
  else {
    return false;
  }
}

function locationGood(desiredLocation, userLocation){
  if (desiredLocation == "N/A"){
    return true;
  }
  else if (desiredLocation == userLocation){
    return true;
  }
  else {
    return false;
  }
}

function levelGood(desiredLevel, userLevel){
  if (desiredLevel == "N/A"){
    return true;
  }
  else if (desiredLevel == userLevel){
    return true;
  }
  else {
    return false;
  }
}

function instrumentsGood(desiredInstrument, userInstruments){
  if (desiredInstrument == "N/A"){
    return true;
  }
  else{
    for (var instrument in userInstruments){
      if (instrument == desiredInstrument){
        return true;
      }
    }
  }
  return false;
}

function ageGood(desiredAge, userAge){
  if (desiredAge == "N/A"){
    return true;
  }
  else{
    if (desiredAge == "<13"){
      if(parseInt(userAge) < 13){
        return true;
      }
      else {
        return false;
      }
    }
    else if(desiredAge == "13-15"){
      if(parseInt(userAge) >= 13 && parseInt(userAge) <= 15){
        return true;
      }
      else {
        return false;
      }
    }
    else if(desiredAge == "16-18"){
      if (parseInt(userAge) >= 16 && parseInt(userAge) <= 18){
        return true;
      }
      else{
        return false;
      }
    }
    else if(desiredAge == "19-24"){
      if (parseInt(userAge) >= 19 && parseInt(userAge) <= 24){
        return true;
      }
      else{
        return false;
      }
    }
    else if(desiredAge == "25-32"){
      if (parseInt(userAge) >= 25 && parseInt(userAge) <= 32){
        return true;
      }
      else{
        return false;
      }
    }
    else if(desiredAge == "33-40"){
      if (parseInt(userAge) >= 33 && parseInt(userAge) <= 40){
        return true;
      }
      else{
        return false;
      }
    }
    else if(desiredAge == "41-50"){
      if (parseInt(userAge) >= 41 && parseInt(userAge) <= 50){
        return true;
      }
      else{
        return false;
      }
    }
    else if(desiredAge == "51+"){
      if (parseInt(userAge) >= 51){
        return true;
      }
      else{
        return false;
      }
    }
    }
  }

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

  console.log(age);
  console.log(gender);
  console.log(instruments);
  console.log(location);
  console.log(skill);

  //sorting thru users in database
  database.ref("users/").once('value').then(function(snapshot){ //gets info from database depending on user
    var profilesToAdd = [];
    var users = snapshot.val();
    for (var user in users){
      console.log(user);
      var userInfo = users[user];
      if (genderGood(gender, userInfo["gender"]) && locationGood(location, userInfo["location"]) && levelGood(skill, userInfo["skill"]) && instrumentsGood(instruments, userInfo["instruments"]) && ageGood(age, userInfo["age"])){
        profilesToAdd.push(user);
      }
    }

  //USE this code to display list of matching users onto browse page
  for (var i = 0; i < profilesToAdd.length; i++){
    var specificProfile = profilesToAdd[i];
    var profile = document.createElement("p");
    profile.innerHTML = specificProfile;
    profile.onclick = function(profile){
      var chosenUsername = this.innerHTML;
      sessionStorage.setItem("otherUser", chosenUsername);
      window.location.href="otherProfile.html";
    }
    var notMenu = document.getElementById("clearBar");
    notMenu.appendChild(profile);
  }
});
}

/*function goToNewPage(theThing){
  var chosenUsername = theThing.innerHTML;
  sessionStorage.setItem("otherUser", chosenUsername);
  window.location.href="otherProfile.html";
}*/
