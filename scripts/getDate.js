// initialize display elements
const todayDisplay = document.querySelector(".today");
const visitsDisplay = document.querySelector(".visits");

// get the stored value in localStorage
let numVisits = Number(window.localStorage.getItem("visits-ls"));

// determine if this is the first visit or display the number of visits.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit!`;
}

// increment the number of visits.
numVisits++;
// store the new number of visits value
localStorage.setItem("visits-ls", numVisits);

const currentDate = new Date();
document.querySelector("#year").textContent = "©" + currentDate.getFullYear();
document.querySelector("#update").textContent = currentDate;


const mainnav = document.querySelector(".navigation")
const hambutton = document.querySelector("#menu");

hambutton.addEventListener("click", () => {mainnav.classList.toggle("responsive")}, false);


const rating = document.getElementById("frating");
const rangevalue = document.getElementById("r");

function displayRatingValue() {
    rating.innerHTML = rangevalue.value;
};

rangevalue.addEventListener("change", displayRatingValue);
rangevalue.addEventListener("input", displayRatingValue);

const submitButton = document.getElementsByClassName("submitBtn");


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

