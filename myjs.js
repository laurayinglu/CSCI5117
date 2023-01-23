function submitForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("mail").value;
  var msg = document.getElementById("msg").value;
  var t = "Welcome! " + name + " " + email + " " + msg;
  
  document.getElementById("show").innerHTML = t;
}

function myFunction() {
  document.getElementById("show").innerHTML = "Paragraph changed.";
}