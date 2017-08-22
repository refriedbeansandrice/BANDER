//window.onload = addProfsToPage;

function addProfsToPage(){
  var profilesToAdd = ["bobisback", "abigail", "molly", "rita", "sonja"];
  for (var i = 0; i < profilesToAdd.length; i++){
    var specificProfile = profilesToAdd[i];
    var profile = document.createElement("p");
    profile.innerHTML = specificProfile;
    var notMenu = document.getElementById("notMenu");
    notMenu.appendChild(profile);
  }
}
