
// var fname = "";
// function displayTable() {
//     const fname = localStorage.getItem("fname");
//     document.querySelector("#tname").innerHTML = fname;
// 	localStorage.setItem("#tname",fname);
    
// };

// submitButton.addEventListener("click",displayTable);

const userName = document.getElementsByName("username");
const userNameRepeat = document.getElementsByName("repeateusername");


submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    if (userName.value != userNameRepeat.value) {
        userName.setCustomValidity("Usernames do not match");
        userName.reportValidity();       
        
    }
});
















