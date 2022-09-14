import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const isButtonActive = document.querySelector('button');
const KEY_SAFFE = 'feedback-form-state';

const formData = JSON.parse(localStorage.getItem(KEY_SAFFE)) || {};

feedbackForm.email.value = formData.email ?? '';
feedbackForm.message.value = formData.message ?? '';

if (!feedbackForm.email.value || !feedbackForm.message.value )
isButtonActive.disabled = true;

feedbackForm.addEventListener('input', throttle(newFormData, 500));
function newFormData(e) {
  if (feedbackForm.email.value && feedbackForm.message.value )
  isButtonActive.disabled = false;
  else  isButtonActive.disabled = true;
  formData[e.target.name] = e.target.value;

  localStorage.setItem(KEY_SAFFE, JSON.stringify(formData));
}

feedbackForm.addEventListener('submit', onClickSubmit);
function onClickSubmit(e) {
  e.preventDefault();
  e.target.reset();
  console.log(formData);

  localStorage.removeItem(KEY_SAFFE);
  isButtonActive.disabled = true;
}


// const refCalls = {

//   form: document.querySelector(".feedback-form"),
//   input: document.querySelector("input"),
//   textarea: document.querySelector("textarea"),
// }

// const KEY_SAFFE = "feedback-form-state";

// let dataForm = {};

// refCalls.form.addEventListener('input', throttle(onValueInput, 500));
// refCalls.form.addEventListener('submit', onSubmit);


// try {

//   dataForm = JSON.parse(localStorage.getItem("feedback-form-state")) ||
//     { 'email': '', 'message': '',  };

// } catch (error) { }

// refCalls.input.value = dataForm.email ;//?? ''
// refCalls.textarea.value = dataForm.message ;//?? ''

// function onValueInput(e){
// dataForm[e.target.name] = e.target.value;
// localStorage.setItem(KEY_SAFFE, JSON.stringify(dataForm));
// checkInputData(e.target); //!!
// };

// function onSubmit(e) {

//   e.preventDefault();

//   if (noValid()) return;

//   localStorage.removeItem(KEY_SAFFE);
//   console.log(dataForm);
//   resetInputField(e); //!!
// };

// function noValid() {
//   if(!dataForm.email || !dataForm.message){
//     checkInputData(refCalls.input);
//     checkInputData(refCalls.textarea);
//     alert("");
//     return true;
//   }
//   return;
// }

// function checkInputData(inputField) {
//   if(inputField.value) {
//     inputField.classList.remove('invalid');
//     inputField.classList.add('valid');
//   }
// }



// Отслеживай на форме событие input, и
// каждый раз записывай в локальное хранилище объект с
//  полями email и message, в которых сохраняй текущие
//   значения полей формы. Пусть ключом для хранилища будет строка "feedback-form-state".
// При загрузке страницы проверяй состояние хранилища,
// и если там есть сохраненные данные, заполняй ими поля формы.
// В противном случае поля должны быть пустыми.
// При сабмите формы очищай хранилище и поля формы, а также выводи объект с полями email,
//  message и текущими их значениями в консоль.
// Сделай так, чтобы хранилище обновлялось не чаще чем раз в 500 миллисекунд.
// Для этого добавь в проект и используй библиотеку lodash.throttle.
