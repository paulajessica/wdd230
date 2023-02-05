async function getData() {
    const response = await fetch('./members.json');
    const data = await response.json();
    console.log({ data });
    
}












