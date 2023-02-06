var form = document.forms["contact"];
var table = document.getElementById("form");

form.addEventListener("submit", function (event) {

  if (
    form.elements["fusername"].value != form.elements["frepeateusername"].value
  ) {
    alert("Usernames do not match");
    event.preventDefault();
  } else {
    
    var name = form.elements["fname"].value;
    var email = form.elements["femail"].value;
    var rating = form.elements["r"].value;
    var username = form.elements["fusername"].value;

    document.getElementById("tname").innerHTML = name;
    document.getElementById("temail").innerHTML = email;
    document.getElementById("trating").innerHTML = rating;
    document.getElementById("tusername").innerHTML = username;    

  }
  event.preventDefault();
});





















