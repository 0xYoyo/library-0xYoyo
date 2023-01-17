/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.info = function () {
  return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
};


// Add a new book to the array
function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

// Examples
addBookToLibrary('Title', 'Author', 251, 'Already read');
addBookToLibrary('The book', 'John Smith', 511, 'Already read');
addBookToLibrary('Rich quick', 'Robert', 2541, 'Haven\'t read yet');
addBookToLibrary('How to code', 'Odin', 221, 'Already read');

const books = document.querySelector('.books');

// Display examples for testing
for (let i = 0; i < myLibrary.length; i++) {
  console.log(myLibrary[i].info()); 
  const div  = document.createElement('div');
   div.textContent = myLibrary[i].info();
   books.appendChild(div);
}


// Display submitted books
function displayBooks() {
   const div  = document.createElement('div');
   div.textContent = myLibrary[myLibrary.length-1].info();
   books.appendChild(div);
}

const form = document.querySelector('form');
form.style.display = "none"

// Event handler for new book button
function toggleFormOn(){
  form.style.display = "block"
}

// Event handler for submit form button
function toggleFormOff(event){
  const createBook = [];
  const inputs = document.querySelectorAll('input');
  const select = document.querySelector('select');

  inputs.forEach((input) => {
    console.log(input.value);
    createBook.push(input.value);
    input.value = '';
  })
  console.log(select.value);
  createBook.push(select.value);

  form.style.display = "none";

  console.log(createBook);
  addBookToLibrary(...createBook)

  for (let i = 0; i < myLibrary.length; i++) {
    console.log(myLibrary[i].info()); 
  }
  
  displayBooks();
  event.preventDefault();
}




// Event listeners
const newBtn = document.querySelector('#newBtn');
newBtn.addEventListener('click', toggleFormOn);

const subBtn = document.querySelector('#sub');
subBtn.addEventListener('click', toggleFormOff);



