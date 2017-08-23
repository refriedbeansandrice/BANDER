function search(){
  var searchedAge = document.getElementById("ageRange").value;
  sessionStorage.setItem("age", searchedAge);
  var searchedGender = document.getElementById("gender").value;
  sessionStorage.setItem("gender", searchedGender);
  var searchedInstruments = document.getElementById("instrument").value;
  sessionStorage.setItem("instruments", searchedInstruments);
  var searchedLevel = document.getElementById("level").value;
  sessionStorage.setItem("skill", searchedLevel);
  var searchedLocation = document.getElementById("location").value;
  sessionStorage.setItem("location", searchedLocation);

  window.location.href="browseFeature.html";
}
