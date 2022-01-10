/* eslint-disable import/extensions */

import { DateTime } from '../node_modules/luxon/src/luxon.js';

const divList = document.querySelector('#div4list');
const divForm = document.querySelector('#div4form');
const divContact = document.querySelector('#div4contact');

const listA = document.querySelector('#listA');
const formA = document.querySelector('#formA');
const contactA = document.querySelector('#contactA');

const displayLuxonDate = () => {
  setInterval(() => {
    const now = DateTime.now();
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const formatTime = (time) => (time < 10 ? `0${time}` : time);
    const dateText = `${months[now.month - 1]} ${now.day}th ${now.year}, ${formatTime(now.hour)}:${formatTime(now.minute)}:${formatTime(now.second)}`;
    const spanForText = document.querySelector('#luxonDate');
    spanForText.textContent = dateText;
  }, 1000);
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

export {
  displayContact, displayList, displayForm, displayLuxonDate,
};