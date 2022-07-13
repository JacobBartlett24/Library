let myLibrary = [];

function Book(name) {
  this.name = name;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

const container = document.querySelector('.container');

function listLibraryBooks(){
  for (let i = 0; i < myLibrary.length; i++){
    let book = document.createElement('div');
    book.textContent = myLibrary[i].name;
    container.appendChild(book);
  }
}

const book = new Book('book')
addBookToLibrary(book);

const book1 = new Book('book1');
addBookToLibrary(book1);

const book2 = new Book('book2');
addBookToLibrary(book2);

const book3 = new Book('book3');
addBookToLibrary(book3);

listLibraryBooks();

const button = document.querySelector('#newBookButton');
const form = document.querySelector('#form');
const submitButton = document.querySelector('#submit');
form.style.display = "none";
submitButton.style.display = "none";

function addSingleBook(book){
  container.appendChild(book);
}

function newBook(){
  if(form.style.display == 'none'){
    form.style.display = 'block';
    submitButton.style.display = 'block';
  } else
    form.style.display = 'none';
}

submitButton.addEventListener("click", function (){
  const inputBook = new Book(document.getElementById('newBook').value);
  addBookToLibrary(inputBook);
  let htmlbook = document.createElement('div');
  htmlbook.textContent = inputBook.name;
  container.appendChild(htmlbook);
});

button.addEventListener("click", function (){
  newBook();
});