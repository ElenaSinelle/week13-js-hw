//Задание 1
// Создайте переменную currentDate и присвойте ей текущую дату. Значение выведите в консоль.
const currentDate = new Date();
console.log(`Задание 1: ${currentDate}`);

//Задание 2
// Создайте переменную currentYear и присвойте ей текущий год. Значение выведите в консоль.
const currentYear = currentDate.getFullYear();
console.log(`Задание 2: ${currentYear}`);

//Задание 3
// Создайте переменную currentMonth и присвойте ей текущий месяц (от 0 до 11, где 0 - январь, 11 - декабрь). Значение выведите в консоль.
const currentMonth = currentDate.getMonth();
console.log(`Задание 3: ${currentMonth}`);

//Задание 4
// Создайте переменную currentDay и присвойте ей текущий день месяца. Значение выведите в консоль.
const currentDay = currentDate.getDate();
console.log(`Задание 4: ${currentDay}`);

//Задание 5
// Создайте переменную birthday и присвойте ей дату вашего дня рождения в текущем году. Значение выведите в консоль.
const birthday = new Date(2024,0,10);
console.log(`Задание 5: ${birthday}`);

//Задание 6
// Создайте переменную futureDate и присвойте ей будущую дату (например, через 1 месяц и 10 дней от текущей даты). Значение выведите в консоль.
// вот так: const futureDate = new Date(2024,2,21);

// или вот так:
const futureDate = new Date();
futureDate.setMonth(futureDate.getMonth() + 1); //прибавляем 1 месяц
futureDate.setDate(futureDate.getDate() + 10); // прибавляем 10 дней
console.log(`Задание 6: ${futureDate}`);

// или вот так, то в 1 и 3 вариантах количество дней приходится считать вручную ((( а не хочется
// const futureDate = new Date();
// futureDate.setDate(futureDate.getDate() + 39);
// console.log(futureDate);


//Задание 7
// Выведите в консоль разницу в днях между futureDate и currentDate
let difference = Math.round((futureDate - currentDate) / (1000 * 60 * 60 * 24));
console.log(`Задание 7: ${difference}`);

//Задание 8
// Создайте переменную pastDate и присвойте ей прошедшую дату (например, 5 дней назад от текущей даты). Значение выведите в консоль.
const pastDate = new Date();
pastDate.setDate(pastDate.getDate() - 5);
console.log(`Задание 8: ${pastDate}`);

//Задание 9
// Выведите в консоль разницу в днях между currentDate и pastDate
let difference2 = Math.round((currentDate - pastDate) / (1000 * 60 * 60 * 24));
console.log(`Задание 9: ${difference2}`);

//Задание 10
// Создайте переменную nextWeek и присвойте ей дату следующей недели. Значение выведите в консоль.
const nextWeek = new Date();
nextWeek.setDate(nextWeek.getDate() + 7);
console.log(`Задание 10: ${nextWeek}`);

//Задание 11
// Выведите в консоль день недели для nextWeek
console.log(`Задание 11: ${nextWeek.getDay()}`);

//Задание 12
// Создайте переменную futureYear и присвойте ей значение текущего года плюс 5. Значение выведите в консоль.
const futureYear = new Date();
futureYear.setFullYear(futureYear.getFullYear() + 5);
console.log(`Задание 12: ${futureYear}`);

//Задание 13
// Создайте переменную futureDateInFutureYear и присвойте ей дату вашего дня рождения в будущем году (futureYear). Значение выведите в консоль.
const futureDateInFutureYear = new Date(futureYear.getFullYear(),0,10);
console.log(`Задание 13: ${futureDateInFutureYear}`);

//Задание 14
// Выведите в консоль разницу в годах между futureYear и текущим годом
let difference3 = Math.round((futureYear - currentYear) / (1000 * 60 * 60 * 24 * 12 * 365));
console.log(`Задание 14: ${difference3}`);

//Задание 15
// Используя метод Date.parse(), создайте новый объект date и преобразуйте переменную strDate в дату.
// Выведите объект date в консоль.
const strDate = '2023-06-15T08:30:00.000Z';
const date = new Date(Date.parse(strDate));
console.log(`Задание 15: ${date}`);

//Задание 16
// Используя метод Date.parse(), получите таймстамп (количество миллисекунд) из переменной strDate.
// Выведите таймстамп в консоль.
const dateStamp = Date.parse(strDate);
console.log(`Задание 16: ${dateStamp}`);

//Задание 17
// Используя метод Date.parse(), попытайтесь преобразовать переменную wrongDate в дату. Добавьте условие, если результат преобразования является NaN, выведите в консоль сообщение 'Неправильный формат даты', в другом случае, выведите сообщение 'Правильный формат даты'.
// Подсказка: используйте условие if...else
// const wrongDate = '2023/06/15';
const wrongDate = '2023...0615';
if (!Date.parse(wrongDate)) {
  console.log('Задание 17: Неправильный формат даты');
} else {
  console.log(`Задание 17: Правильный формат даты. Результат - ${new Date(Date.parse(wrongDate))}`);
}

//Задание 18
// Используя цикл if...else, проверьте является ли переменная number положительным. Результат выведите в консоль.
const number = -125;
if (number > 0) {
  console.log(`Задание 18: Переменная number - положительное число: ${number}`);
} else if (number === 0) {
  console.log(`Задание 18: Переменная number = 0: ${number}`);
} else {
  console.log(`Задание 18: Переменная number - отрицательное число: ${number}`);
}

//Задание 19
// Используя цикл if...else, проверьте является ли переменная number чётным числом. Результат выведите в консоль.
if (number % 2) {
  console.log(`Задание 19: Переменная number - нечётное число: ${number}`);
} else {
  console.log(`Задание 19: Переменная number - чётное число: ${number}`);
}

//Задание 20
// Используя цикл if...else, проверьте является ли переменная number кратным 3. Результат выведите в консоль.
if (!(number % 3)) {
  console.log(`Задание 20: Переменная number кратна 3: ${number}`);
} else {
  console.log(`Задание 20: Переменная number не кратна 3: ${number}`);
}

//Задание 21
// Используя цикл if...else, проверьте является ли переменная number однозначным. Результат выведите в консоль.
if (String(Math.abs(number)).length === 1) {
  console.log(`Задание 21: Переменная number является однозначным числом: ${number}`);
} else {
  console.log(`Задание 21: Переменная number не является однозначным числом: ${number}`);
}

//Задание 22
// Используя цикл if...else, проверьте является ли переменная number двузначным. Результат выведите в консоль.
if (String(Math.abs(number)).length === 2) {
  console.log(`Задание 22: Переменная number является двузначным числом: ${number}`);
} else {
  console.log(`Задание 22: Переменная number не является двузначным числом: ${number}`);
}

//Задание 23
// Используя цикл if...else, проверьте является ли переменная number положительным или нулём. Результат выведите в консоль.
if (number >= 0) {
  console.log(`Задание 23: Переменная number - положительное число или 0: ${number}`);
} else {
  console.log(`Задание 23: Переменная number не является положительнвым числом или 0: ${number}`);
}

//Задание 24
// Используя цикл if...else, проверьте является ли переменная number кратным 5 или 7. Результат выведите в консоль.
if (!(number % 5) || !(number % 7)) {
  console.log(`Задание 24: Переменная number кратна 5 или 7: ${number}`);
} else {
  console.log(`Задание 24: Переменная number не кратна 5 или 7: ${number}`);
}

//или так:
// if ((number % 5 === 0) || (number % 7 === 0)) {
//   console.log(`Задание 24: Переменная number кратна 5 или 7: ${number}`);
// } else {
//   console.log(`Задание 24: Переменная number не кратна 5 или 7: ${number}`);
// }


//Задание 25
// Используя цикл if...else, проверьте является ли переменная number отрицательным или нулём. Результат выведите в консоль.
if (number <= 0) {
  console.log(`Задание 25: Переменная number - отрицательное число или 0: ${number}`);
} else {
  console.log(`Задание 25: Переменная number не является отрицательным числом или 0: ${number}`);
}

//Задание 26
// Используя цикл if...else, проверьте является ли переменная number трёхзначным положительным числом. Результат выведите в консоль.
if (number > 0 && String(Math.abs(number)).length === 3) {
  console.log(`Задание 26: Переменная number является трёхзначным положительным числом: ${number}`);
} else {
  console.log(`Задание 26: Переменная number не является трёхзначным положительным числом: ${number}`);
}

//Задание 27
// Используя switch case, напишите программу, которая принимает на вход целое число от 1 до 7 и выводит в консоль название соответствующего дня недели (например, 1 - "Понедельник", 2 - "Вторник" и т.д.).
const day = 7;
switch(day) {
  case 1:
    console.log('Задание 27: Понедельник');
    break;
  case 2:
    console.log('Задание 27: Вторник');
    break;
  case 3:
    console.log('Задание 27: Среда');
    break;
  case 4:
    console.log('Задание 27: Четверг');
    break;
  case 5:
    console.log('Задание 27: Пятница');
    break;
  case 6:
    console.log('Задание 27: Суббота');
    break;
  case 7:
    console.log('Задание 27: Воскресенье');
    break;
  default:
    console.log('Задание 27: введено неправильное число');
}


//Задание 28
// Используя цикл switch case, напишите программу, которая принимает на вход символ направления (N, S, E, W) и выводит в консоль полное название этого направления (N - "Север", S - "Юг", E - "Восток", W - "Запад").
let direction = 'W';
let fullName;

switch (direction) {
  case 'N':
    fullName = 'Север';
    console.log(`Задание 28: полное название - ${fullName}`);
    break;
  case 'S':
    fullName = 'Юг';
    console.log(`Задание 28: полное название - ${fullName}`);
    break;
  case 'E':
    fullName = 'Восток';
    console.log(`Задание 28: полное название - ${fullName}`);
    break;
  case 'W':
    fullName = 'Запад';
    console.log(`Задание 28: полное название - ${fullName}`);
    break;
  default:
    console.log('Задание 28: введён неправильный символ');
}
