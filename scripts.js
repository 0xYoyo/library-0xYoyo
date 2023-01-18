/* eslint-disable eqeqeq */
/* eslint-disable prefer-template */
/* eslint-disable no-use-before-define */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// Prototype functions
Book.prototype.info = function() {
  return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
};

Book.prototype.changeStatus = function() {
  if((this.read) == 'Already read') {
    this.read = 'Haven\'t read yet';
  } else if((this.read) == 'Haven\'t read yet'){
    this.read ='Already read';
  }
}

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
  const container = document.createElement('div');
   books.appendChild(container);
  const div  = document.createElement('div');
   div.textContent = myLibrary[i].info();
   container.appendChild(div);
}


// Display submitted books
function displayBooks() {
   const index = myLibrary.length-1;
   const container = document.createElement('div');
   container.classList.add('bookContainer');
   container.setAttribute('data-', `${index}`);
   books.appendChild(container);
   const div  = document.createElement('div');
   div.classList.add('aBook');
   div.setAttribute('data-', `${index}`);
   div.textContent = myLibrary[index].info();
   container.appendChild(div);
   const btn1  = document.createElement('button');
   btn1.classList.add('remover');
   btn1.setAttribute('data-', `${index}`);
   btn1.textContent = 'Remove';
   container.appendChild(btn1);
   createRemover();
   const btn2  = document.createElement('button');
   btn2.classList.add('changer');
   btn2.setAttribute('data-', `${index}`);
   btn2.textContent = 'Change Status';
   container.appendChild(btn2);
   createChanger();
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


// Basic Event listeners
const newBtn = document.querySelector('#newBtn');
newBtn.addEventListener('click', toggleFormOn);

const subBtn = document.querySelector('#sub');
subBtn.addEventListener('click', toggleFormOff);

// Event listening + handling
function createRemover(){
const removeBtn = document.querySelectorAll('.remover');
removeBtn.forEach((button) => {
  console.log(button.textContent);
  button.addEventListener('click', function(e){
    console.log("omgomgomg");
    const placement = button.getAttribute('data-');
    console.log(placement);
    const bookDiv = document.querySelectorAll('.bookContainer');
    bookDiv.forEach((div) => {
      console.log(div.firstElementChild.textContent);
      console.log(myLibrary[placement].info());
      if (div.firstElementChild.textContent == (myLibrary[placement].info())) {
        div.remove();
      }
    })
  })
})
}

function createChanger(){
  const changeBtn = document.querySelectorAll('.changer');
  changeBtn.forEach((button) => {
    console.log(button.textContent);
    button.addEventListener('click', function(e){
      console.log("omgomgomg");
      const placement = button.getAttribute('data-');
      console.log(placement);
      const bookDiv = document.querySelectorAll('.bookContainer');
      bookDiv.forEach((div) => {
        console.log(div.firstElementChild.textContent);
        console.log(myLibrary[placement].info());
        if (div.firstElementChild.textContent == (myLibrary[placement].info())) {
          myLibrary[placement].changeStatus();
          console.log(myLibrary[placement].info());
          div.firstElementChild.textContent = myLibrary[placement].info();
          console.log("this is the")
          console.log(div.firstElementChild.textContent)
        } else{
          console.log("They dont match")
          console.log(div.firstElementChild.textContent);
          console.log(myLibrary[placement].info());
          console.log(placement);
        }
      })
    })
  })
  }




