
async function getData() {
    const response = await fetch('./link.json');
    const data = await response.json();
    //console.log({ data });
    //displayData(data[week]);
    const section = document.querySelector(".cardactivities");
    for (let week in data){
        
        const li = document.createElement("li");
        li.innerHTML = week + ": ";
        for (let link in data[week]){
            //console.log(data[week][link]);
            const alink = document.createElement("a");
            alink.innerHTML = data[week][link].title;
            alink.setAttribute("hrfe", data[week][link].path);
            li.appendChild(alink);
            li.innerHTML += " | ";
        }
        section.appendChild(li);
        }
}

getData();

