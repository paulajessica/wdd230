const cards = document.querySelector('#cards');

const nameOne = document.querySelector('#nameOne');
const imgOne = document.querySelector('#imgOne');
const webOne = document.querySelector('#webOne');
const phoneOne = document.querySelector('#phoneOne');

const nameTwo = document.querySelector('#nameTwo');
const imgTwo = document.querySelector('#imgTwo');
const webTwo = document.querySelector('#webTwo');
const phoneTwo = document.querySelector('#phoneTwo');

const nameThree = document.querySelector('#nameThree');
const imgThree = document.querySelector('#imgThree');
const webThree = document.querySelector('#webThree');
const phoneThree = document.querySelector('#phoneThree');

async function getData() {
    const response = await fetch('./members.json');
    const data = await response.json();
    //console.log({ data });
    displayCompany(data.companies);
    
};

getData();

const displayCompany = (datas) => {
    datas.forEach((data) => {
        const card = document.createElement("section");
        const icon = document.createElement("img");
        const companyName = document.createElement("h2");        
        const address = document.createElement("p");
        const phonenumber = document.createElement("p");
        const website = document.createElement("p");
        const level = document.createElement("p");
        const area = document.createElement("p");
        
        icon.setAttribute('src', data.icon);
        icon.setAttribute('alt', `Icon of ${data.name}`);
        icon.setAttribute('loading', 'lazy');
        icon.setAttribute('width', '40');
        icon.setAttribute('height', '40');
        companyName.textContent = `${data.name}`;
        address.textContent = `Address: ${data.phonenumber}`;
        phonenumber.textContent = `Phone Number: ${data.phonenumber}`;
        website.textContent = `${data.website}`;
        level.textContent = `Memebership Level: ${data.level}`;
        area.textContent = `Acting Area: ${data.area}`;
                
        card.appendChild(icon);
        card.appendChild(companyName);
        card.appendChild(address);
        card.appendChild(phonenumber);
        card.appendChild(website);
        card.appendChild(level);
        card.appendChild(area);        
        
        cards.appendChild(card);// div element in html file


    });
}


async function getSpotlight() {
    const response = await fetch('./members.json');
    const datas = await response.json();
    //console.log(nameOne.textContent = data["companies"][6].name);
    //console.log(data["companies"][0].name);
    const array = datas["companies"];

    arrayRandom = [];
    
    array.forEach((data) => {
        // console.log(data.level);
        // console.log(index);
    
        let randomOne = Math.floor(Math.random() * array.length);
        const levelOne  = array[randomOne].level;
        
        
        if (!arrayRandom.includes(randomOne) && (levelOne == "Silver" || levelOne == "Gold")){
            console.log("r1")
            console.log(randomOne);
            console.log(levelOne);
            arrayRandom.push(randomOne);
            nameOne.textContent = array[randomOne].name;
            webOne.textContent = array[randomOne].website;
            phoneOne.textContent = array[randomOne].phonenumber;
            imgOne.setAttribute('src', array[randomOne].icon);            
            
        };
        array.forEach((data) => {

            let randomTwo = Math.floor(Math.random() * array.length);
            const levelTwo  = array[randomOne].level;        
            if (!arrayRandom.includes(randomTwo) && (levelTwo == "Silver" || levelTwo == "Gold")){
                console.log("r2")
                console.log(randomTwo);
                console.log(levelTwo);
                arrayRandom.push(randomTwo);
                nameTwo.textContent = array[randomTwo].name;
                webTwo.textContent = array[randomTwo].website;
                phoneTwo.textContent = array[randomTwo].phonenumber;
                imgTwo.setAttribute('src', array[randomTwo].icon);
            }
        
            });
            

    });
     
};

getSpotlight();








