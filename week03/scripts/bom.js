const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

const chaptersList = getChapterList() || [];//function created below, to get the localStorage item.

chaptersList.forEach(chapter => {
  displayList(chapter); // chapter = item
                        // function created below,
  
});

//When click on button
button.addEventListener('click', function() {
  if (input.value != '') {
    displayList(input.value);//function that recieves one parameter named item
    chaptersList.push(input.value);
    setChapterList(); //function created below, to set the localStorage item that you have already named
    input.focus();
    input.value = '';
  }
  
});

//Recieves one parameter named item
function displayList(item) {
  const li = document.createElement('li');
  const deleteButton = document.createElement('button');
  li.textContent = item;  // item = input.value
  deleteButton.textContent = '❌';// x = button
  li.append(deleteButton);
  list.append(li);

  //Function called within the delete button click event
  deleteButton.addEventListener('click', function () {
    list.removeChild(li);
    deleteChapter(li.textContent);//function created below, to remove the chapter from the array and localStorage
    input.focus();
  });

}

//Sets the localStorage item that you have already named
function setChapterList() {
  localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));//JSON.stringify() static method converts a JavaScript value to a JSON string
}

//Gets the localStorage item.
function getChapterList() {
  return JSON.parse(localStorage.getItem('myFavBOMList'));
}

//Delets the localStorage item
function deleteChapter(chapter) {
  chapter = chapter.slice(0, chapter.length - 1); // this slices off the last character
  chaptersArray = chaptersArray.filter(item => item !== chapter); //to return everything except the chapter to be removed.
  setChapterList(); //Call the setChapterList function to update the localStorage item.
}