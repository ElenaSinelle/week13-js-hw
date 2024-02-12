'use strict'
const input = document.querySelector('.count__input');
const btn = document.querySelector('.count__button');
const result = document.querySelector('.count__result');

function checkInput () {
  let minInput = new Date();
  let year = minInput.getFullYear();
  let month = String(minInput.getMonth() +1);
  month = month.length == 1 ? month.padStart(2, '0') : month;
  let date = String(minInput.getDate());
  date = date.length == 1 ? date.padStart(2, '0') : date;
  let today = `${year}-${month}-${date}`;

  if(!input.value || (input.value < today))  {
    result.classList.add('wrong');
    result.textContent = 'Please enter your Birthday in the future';
  } else if(input.value == today) {
    result.classList.remove('wrong');
    result.textContent = 'Congratulations! Your Birthday is today!';
  } else {
    result.classList.remove('wrong');
    const daysCounted = countDays();
    let dayVariant = '';
    let verbVariant = '';
    if (daysCounted === 1) {
      dayVariant = 'day';
      verbVariant = 'is';
    } else {
      dayVariant = 'days';
      verbVariant = 'are';
    }
    result.textContent = `There ${verbVariant} ${daysCounted} ${dayVariant} left to your Birthday`;
  }
}

function countDays() {
  const dateNow = Date.now();
  const difference = Math.ceil((Date.parse(input.value) - dateNow) / (1000 * 60 * 60 * 24));
  return difference;
}

btn.addEventListener('click', checkInput);
