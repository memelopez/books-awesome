import Store from './store.js';
import {displayList, displayLuxonDate} from './ui-fuctions.js';
// UI Class: Handle UI Tasks



export default class UI {
  static addBookToList(book) {
    const list = document.querySelector('#book-list');

    const item = document.createElement('li');
    item.className = 'd-flex justify-content-between py-2';

    const pBook = document.createElement('p');
    pBook.textContent = `"${book.title}" by ${book.author}`;
    pBook.className = 'py-1 m-0';

    const pRmv = document.createElement('button');
    pRmv.textContent = 'Remove';
    pRmv.className = 'py-1 m-0 rmv bg-dark text-white';

    item.appendChild(pBook);
    item.appendChild(pRmv);

    list.appendChild(item);
  }

  static displayBooks() {
    const books = Store.getBooks();
    books.forEach((book) => this.addBookToList(book));
    displayLuxonDate();
    displayList();
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