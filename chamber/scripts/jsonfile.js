const cards = document.querySelector('#cards');
const members = document.querySelector('.member');


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

    for (i = 0; i < 7; i++){

        let randomOne = Math.ceil(Math.random() * array.length);
        console.log(randomOne);
        if(!arrayRandom.includes(randomOne)){
            arrayRandom.push(randomOne);
        }

    };
    console.log(arrayRandom);   
   
    
    arrayRandom.forEach((data) => {
        console.log(data); 

        const level  = array[data].level;
        console.log(level);
        
        if (level == "Gold" || level == "Silver"){
            const member = document.createElement('section');
            member.classList.add('spotlights1');            
            const memberName = document.createElement('h2');
            const memberImage = document.createElement('img');
            const memberWeb = document.createElement('p');
            const memberPhone = document.createElement('p');
            
            
            memberName.textContent = array[data].name;
            memberWeb.textContent = array[data].website;
            memberPhone.textContent = array[data].phonenumber;            
            memberImage.setAttribute('src', array[data].icon);
            memberImage.setAttribute('alt', array[data].name);
            memberImage.setAttribute("loading", "lazy");            
            
            member.appendChild(memberName);
            member.appendChild(memberImage);
            member.appendChild(memberWeb);
            member.appendChild(memberPhone);

            members.appendChild(member);

        }
        
    });  
     
};

getSpotlight();








