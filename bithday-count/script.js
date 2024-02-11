'use strict'
const input = document.querySelector('.count__input');
const btn = document.querySelector('.count__button');
const result = document.querySelector('.count__result');

function checkInput () {
  input.min = Date.now();

  if(!input.value || (Date.parse(input.value) < input.min))  {
    result.classList.add('wrong');
    result.textContent = 'Please enter your Birthday in the future';
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
