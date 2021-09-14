// JS for booklist

// Functions for local storage
function getBooks() {
  let books;
  if (localStorage.getItem('books') === null) {
    books = [];
  } else {
    books = JSON.parse(localStorage.getItem('books'));
  }

  return books;
}

function setBooks(books) {
  if (books.length > 0) {
    localStorage.setItem('books', JSON.stringify(books));
  }
}

function removeBook(index) {
  const books = getBooks();

  books.splice(index, 1);

  localStorage.setItem('books', JSON.stringify(books));
}

// UI Class: Handle UI Tasks
function addBookToList(book) {
  const list = document.querySelector('#book-list');

  const item = document.createElement('li');
  item.className = 'd-flex flex-column border-bottom border-2 py-2';

  const pBook1 = document.createElement('p');
  pBook1.textContent = book.title;
  pBook1.className = 'py-1 m-0';

  const pBook2 = document.createElement('p');
  pBook2.textContent = book.author;
  pBook2.className = 'py-1 m-0';

  const pRmv = document.createElement('button');
  pRmv.textContent = 'Remove';
  pRmv.className = 'py-1 m-0 rmv';

  item.appendChild(pBook1);
  item.appendChild(pBook2);
  item.appendChild(pRmv);

  list.appendChild(item);
}

function displayBooks() {
  // Gets booklist from local storage
  const books = getBooks();
  books.forEach((book) => addBookToList(book));
}

function clearOut() {
  document.querySelector('#book-title').value = '';
  document.querySelector('#book-author').value = '';
}

// Event: Display Books
document.addEventListener('DOMContentLoaded', displayBooks());

// Event: Add book
document.querySelector('#book-form').addEventListener('submit', (e) => {
  // Prevent actual submit
  e.preventDefault();

  // Get form values
  const titleI = document.querySelector('#book-title').value;
  const authorI = document.querySelector('#book-author').value;

  // Validate
  if (titleI === '' || authorI === '') {
    throw new Error('title and author must not be empty');
  }else {
    const books = getBooks();

    books.push({
      title: titleI,
      author: authorI,
    });

    setBooks(books);
    clearOut()
    // Reload page
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  }
});

// Event: remove
document.querySelector('#book-list').addEventListener('click', (e) => {
  const classes = e.target.className;
  const classesArray = classes.split(' ');

  const ulList = document.querySelector('#book-list');
  const item2BeRemoved = e.target.parentElement;
  const nodes = Array.from(ulList.children);
  const index = nodes.indexOf(item2BeRemoved);

  if (classesArray.indexOf('rmv') !== -1) {
    removeBook(index);

    // Reload page
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  }
});