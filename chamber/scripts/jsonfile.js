const cards = document.querySelector('#cards');

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










