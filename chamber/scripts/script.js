const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');


hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

const currentDate = new Date();
document.querySelector('#year').textContent = "©" + currentDate.getFullYear();

document.querySelector('#update').textContent = currentDate;

