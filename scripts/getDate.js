const currentDate = new Date();
document.querySelector('#year').textContent = "©" + currentDate.getFullYear();

document.querySelector('#update').textContent = currentDate;

const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');


hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

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


// You can view the localStorage data using the Applications panel in the browsers's DevTools.

const rating = document.getElementById("rating");
const rangevalue = document.getElementById("r");

function displayRatingValue() {
    rating.innerHTML = rangevalue.value;
}

rangevalue.addEventListener('change', displayRatingValue);
rangevalue.addEventListener('input', displayRatingValue);


const userName = document.getElementById("username");
const userNameRepeat = document.getElementById("repeateusername");
const submitButton = document.getElementById("submitBtn");

submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    if (userName.value != userNameRepeat.value) {
        userName.setCustomValidity("Usernames do not match");
        userName.reportValidity();
    }
});


