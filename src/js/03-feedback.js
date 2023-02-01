import throttle from 'lodash.throttle';

// Получаем доступы

const form = document.querySelector('form');
const email = document.querySelector('input');
const textarea = document.querySelector('textarea');
const button = document.querySelector('button');

// Слушаем события

form.addEventListener('submit', formSubmit);
email.addEventListener('input', throttle(userTypingInfo, 500));
textarea.addEventListener('input', throttle(userTypingInfo, 500));

// Отправка формы, очистка полей, вывод в консоль

function formSubmit(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();

  console.log(localStorage.getItem('videoplayer-current-time'));
  localStorage.removeItem('videoplayer-current-time');
}

// Функция записывает в localeStorage данные пользователя

function userTypingInfo() {
  return localStorage.setItem(
    'videoplayer-current-time',
    JSON.stringify({ email: email.value, textarea: textarea.value })
  );
}

// Функция при перезагрузке возвращает данные с локалСторадж, если они там были

function savedInputs() {
  const savedMessage = localStorage.getItem('videoplayer-current-time');
  const object = JSON.parse(savedMessage);
  //   console.log(object["email"]);

  if (savedMessage) {
    email.value = object['email'];
    textarea.value = object['textarea'];
  }
}

savedInputs();
