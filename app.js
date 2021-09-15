class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

class Store {
  static getBooks() {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }

    return books;
  }

  static setBooks(books) {
    if (books.length > 0) {
      localStorage.setItem('books', JSON.stringify(books));
    }
  }

  static removeBook(index) {
    const books = this.getBooks();

    books.splice(index, 1);

    localStorage.setItem('books', JSON.stringify(books));
  }
}

function clearOut() {
  document.querySelector('#book-title').value = '';
  document.querySelector('#book-author').value = '';
}

// UI Class: Handle UI Tasks
class UI {
  static addBookToList(book) {
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

  static displayBooks() {
    // Gets booklist from local storage
    const books = Store.getBooks();
    books.forEach((book) => this.addBookToList(book));
  }

  static showAlert(message, className) {
    const div = document.createElement('div');
    div.className = `alert alert-${className} p-1 mb-1`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector('.box');
    const formDiv = document.querySelector('#div4form');
    container.insertBefore(div, formDiv);
    setTimeout(() => document.querySelector('.alert').remove(), 2000);
  }
}

// Event: Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks());

// Event: Add book
document.querySelector('#book-form').addEventListener('submit', (e) => {
  // Prevent actual submit
  e.preventDefault();

  // Get form values
  const titleI = document.querySelector('#book-title').value;
  const authorI = document.querySelector('#book-author').value;

  // Validate
  if (titleI === '' || authorI === '') {
    UI.showAlert('title and author must not be empty', 'success');
  } else {
    const books = Store.getBooks(); // get books from local storage
    const book = new Book(titleI, authorI); // new instance of Book
    books.push(book); // push new book into books array

    Store.setBooks(books); // sets new books array in local storage
    clearOut();
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
    Store.removeBook(index);

    // Reload page
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  }
});