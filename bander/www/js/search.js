function saveSelection(){
  sessionStorage.setItem("age", document.getElementById("age").value);
  sessionStorage.setItem("gender", document.getElementById("gender").value);
  sessionStorage.setItem("instruments", document.getElementById("instrument").value);
  sessionStorage.setItem("location", document.getElementById("location").value);
  sessionStorage.setItem("skill", document.getElementById("level").value);
}
