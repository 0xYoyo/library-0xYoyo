/* eslint-disable no-plusplus */
const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.info = function () {
  return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read} yet`;
};

function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

addBookToLibrary('title', 'author', 251, 'read');
addBookToLibrary('the book', 'john smith', 511, 'read');
addBookToLibrary('rich quick', 'robert', 2541, 'not read');
addBookToLibrary('how to code', 'odin', 221, 'read');
for (let i = 0; i < myLibrary.length; i++) {
  console.log(myLibrary[i].info()); 
}

const books = document.querySelector('.books');

function displayBooks() {
  for (let i = 0; i < myLibrary.length; i++) {
   const div  = document.createElement('div');
   div.textContent = myLibrary[i].info();
   books.appendChild(div);
  }
}

const form = document.querySelector('form');
form.style.display = "none"

function toggleFormOn(){
  form.style.display = "block"
}


function toggleFormOff(event){
  const createBook = [];
  const inputs = document.querySelectorAll('input');
  const select = document.querySelector('select');

  inputs.forEach((input) => {
    console.log(input.value);
    createBook.push(input.value);
  })
  console.log(select.value);
  createBook.push(select.value);

  form.style.display = "none";

  console.log(createBook);
  addBookToLibrary(createBook[0], createBook[1], createBook[2], createBook[3])
  for (let i = 0; i < myLibrary.length; i++) {
    console.log(myLibrary[i].info()); 
  }
  
  displayBooks();
  event.preventDefault();
}

const newBtn = document.querySelector('#newBtn');
newBtn.addEventListener('click', toggleFormOn);

const subBtn = document.querySelector('#sub');
subBtn.addEventListener('click', toggleFormOff);

 displayBooks();

