// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?q=Fortaleza&appid=1c81c5fdee81d7fcb6ad26931a8b040f';

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        //console.log(data.weather); // testing only
        displayTemp(data.main);
        displayWeather(data.weather);        
      } else {
          throw Error(await response.text());
      }
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
    currentTemp.innerHTML = temp;

};

function displayWeather(weather){
    weather.forEach((weather) => {
        const img = weather.icon;
        weatherIcon.setAttribute('src', "http://openweathermap.org/img/w/" + img + ".png");        
        const description = weather.description   
        captionDesc.innerHTML = description;
        
    });   
    
    
    

}
         


  