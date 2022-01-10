import Store from './store.js';
// UI Class: Handle UI Tasks

const divList = document.querySelector('#div4list');
const divForm = document.querySelector('#div4form');
const divContact = document.querySelector('#div4contact');

const listA = document.querySelector('#listA');
const formA = document.querySelector('#formA');
const contactA = document.querySelector('#contactA');

const displayLuxonDate = () => {
  const DateTime = luxon.DateTime;
  const now = DateTime.now();
  const dateText = now.toLocaleString(DateTime.DATETIME_MED);
  const spanForText = document.querySelector('#luxonDate');
  spanForText.textContent = dateText;
};


const displayList = () => {
  // Remove d-none from divList in case it has it
  const classesDiv = divList.className;
  divList.className = classesDiv.replaceAll('d-none', '');

  // Add d-none to divForm and divContact
  divForm.classList.add('d-none');
  divContact.classList.add('d-none');

  // Remove text-white for active class
  let classesA = listA.className;
  listA.className = classesA.replaceAll('text-white', 'active');

  // Remove active class
  classesA = formA.className;
  formA.className = classesA.replaceAll('active', 'text-white');
  classesA = contactA.className;
  contactA.className = classesA.replaceAll('active', 'text-white');
};

const displayForm = () => {
  // Remove d-none from divForm in case it has it
  const classesDiv = divForm.className;
  divForm.className = classesDiv.replaceAll('d-none', '');

  // Add d-none to divList and divContact
  divList.classList.add('d-none');
  divContact.classList.add('d-none');

  // Remove text-white for active class
  let classesA = formA.className;
  formA.className = classesA.replaceAll('text-white', 'active');

  // Remove active class
  classesA = listA.className;
  listA.className = classesA.replaceAll('active', 'text-white');
  classesA = contactA.className;
  contactA.className = classesA.replaceAll('active', 'text-white');
};

const displayContact = () => {
  // Remove d-none from divContact in case it has it
  const classesDiv = divContact.className;
  divContact.className = classesDiv.replaceAll('d-none', '');

  // Add d-none to divList and divContact
  divList.classList.add('d-none');
  divForm.classList.add('d-none');

  // Remove text-white for active class
  let classesA = contactA.className;
  contactA.className = classesA.replaceAll('text-white', 'active');

  // Remove active class
  classesA = listA.className;
  listA.className = classesA.replaceAll('active', 'text-white');
  classesA = formA.className;
  formA.className = classesA.replaceAll('active', 'text-white');
};

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