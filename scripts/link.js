const urla = 
{
    "week01":["week01/media-query.html", "week02/design.html"],
    // "week02":["https://codepen.io/paulajessica/pen/ExpmMRp","week02/bom.html"],
    // "week03":["week03/images/landscape..webp.webp","week03/lazyload.html","https://codepen.io/paulajessica/pen/jOpawPX","week03/bom.html"],
    // "week04":["https://codepen.io/paulajessica/pen/oNMqaOm","images/exerciseweek04.png","week04/tablebuild.html","week04/form-start/index.html"],
    // "week05":["https://codepen.io/paulajessica/pen/qByQdEG","week05/new-ward-members.json","week05/prophets.html"]
};



async function getData() {
    const response = await fetch(urla);
    const data = await response.json();
    console.table(data);
    //displayData(data.prophets);
}

getData();

const displayData = (datas) => {
    datas.forEach((data) => {
        const cards = document.querySelector('.cardactivities');
        const a = document.querySelector('a');
        a.href = data;
    });
  }