/* eslint-disable no-restricted-globals */
/* eslint-disable import/extensions */

import Book from './modules/book.js';
import Store from './modules/store.js';
import UI from './modules/ui.js';
import { displayContact, displayList, displayForm } from './modules/ui-fuctions.js';

// EVENTS
// Event: on content load Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks());
function clearOut() {
  document.querySelector('#book-title').value = '';
  document.querySelector('#book-author').value = '';
}

// Event: Add book
document.querySelector('#book-form').addEventListener('submit', (e) => {
  e.preventDefault();

  // Get form values
  const titleI = document.querySelector('#book-title').value;
  const authorI = document.querySelector('#book-author').value;

  // Validate
  if (titleI === '' || authorI === '') {
    UI.showAlert('title and author must not be empty', 'success');
  } else {
    const books = Store.getBooks();
    const book = new Book(titleI, authorI);
    books.push(book);
    clearOut();
    Store.setBooks(books);
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
    location.reload();
  }
});

// Event: show list
document.querySelector('#listA').addEventListener('click', () => {
  displayList();
});

// Event: show form
document.querySelector('#formA').addEventListener('click', () => {
  displayForm();
});
// Event: show list
document.querySelector('#contactA').addEventListener('click', () => {
  displayContact();
});

// Event: clicks title anchor in navbar
document.querySelector('#navTitle').addEventListener('click', () => {
  location.reload();
});