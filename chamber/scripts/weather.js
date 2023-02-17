// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const description = document.querySelector('#description');

const dateOne = document.querySelector('#dateOne');
const iconOne = document.querySelector('#iconOne');
const tempOne = document.querySelector('#tempOne');


const dateTwo = document.querySelector('#dateTwo');
const iconTwo = document.querySelector('#iconTwo');
const tempTwo = document.querySelector('#tempTwo');


const dateThree = document.querySelector('#dateThree');
const iconThree = document.querySelector('#iconThree');
const tempThree = document.querySelector('#tempThree');


const tempFour = document.querySelector('#tempFour');
const iconFour = document.querySelector('#iconFour');
const datefour = document.querySelector('#datefour');

const url = 'https://api.openweathermap.org/data/2.5/weather?q=Fortaleza&appid=1c81c5fdee81d7fcb6ad26931a8b040f';


async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        //console.log(data.weather); // testing only
        displayTemp(data.main);
        displayWeather(data.weather);
        displayDescription(data.weather);
        
               
        } else {
            throw Error(await response.text());
        };

    } catch (error) {
        console.log(error);
    }
}
  
apiFetch();

function displayTemp(main){
    const temp = main.temp;         
    currentTemp.innerHTML = temp;

};

function displayTemp(main){
    const temp = main.temp;         
    currentTemp.innerHTML = `Current Temp: ${temp}&deg;F`;

};

function displayDescription(weather){
    weather.forEach((weather) => {
        const desc = weather.description;
        description.innerHTML = `Description Time: ${desc}`;
        
    });
};

function displayWeather(weather){
    weather.forEach((weather) => {
        const img = weather.icon;
        weatherIcon.setAttribute('src', "http://openweathermap.org/img/w/" + img + ".png");
        
        
    });
};



const urlforecast = 'https://api.openweathermap.org/data/2.5/forecast?lat=-38.527&lon=-3.7227&appid=1c81c5fdee81d7fcb6ad26931a8b040f'
        //https://api.openweathermap.org/data/2.5/forecast?lat=-38.527&lon=-3.7227&appid=1c81c5fdee81d7fcb6ad26931a8b040f
async function apiFetchFore() {
        const response = await fetch(urlforecast);
        const data = await response.json();
        //console.log(data.list[17].weather[0].icon);            
       // console.log(displayTime(list));       
       //for (let i in data.list){

       const dOne = data.list[9].dt_txt;
       dateOne.innerHTML = `${dOne}`;
       const iOne = data.list[9].weather[0].icon;
       iconOne.setAttribute('src', "http://openweathermap.org/img/w/" + iOne + ".png");           
       const tOne = data.list[9].main.temp;
       tempOne.innerHTML = `Temp: ${tOne}&deg;F`;

       const dTwo = data.list[17].dt_txt;
       dateTwo.innerHTML = `${dTwo}` ;
       const iTwo = data.list[17].weather[0].icon;
       iconTwo.setAttribute('src', "http://openweathermap.org/img/w/" + iTwo + ".png");  
       const tTwo = data.list[17].main.temp;
       tempTwo.innerHTML = `Temp: ${tTwo}&deg;F`;

       const dThree = data.list[25].dt_txt;
       dateThree.innerHTML = `${dThree}` ;
       const iThree = data.list[25].weather[0].icon;
       iconThree.setAttribute('src', "http://openweathermap.org/img/w/" + iThree + ".png"); 
       const tThree = data.list[25].main.temp;
       tempThree.innerHTML = `Temp: ${tThree}&deg;F`;

       const dFour = data.list[33].dt_txt;
       dateFour.innerHTML = `${dFour}`;
       const iFour = data.list[33].weather[0].icon;
       iconFour.setAttribute('src', "http://openweathermap.org/img/w/" + iFour + ".png");
       const tFour = data.list[33].main.temp;
       tempFour.innerHTML = `Temp: ${tFour}&deg;F`;
       
};

apiFetchFore();








  