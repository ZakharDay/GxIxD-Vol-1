// Проверка подключения скрипта

console.log('Yo!');
console.log('=================');

//
// ТИПЫ И СТРУКТУРЫ ДАННЫХ
//

// Ничего, нуль

let n = null;
console.log(null, n);

// Неопределено

let undef;
console.log(undef);

// Числа и строки

const x = 10;

// Нельзя делать вторичное присвоение константе
// x = 5;

let y = 20.5;
var z = 30;
console.log(x);
console.log(y);
console.log(z);
console.log(Number.isInteger(x));
console.log(Number.isInteger(y));

const greeting = 'Hello World!';
console.log(greeting);

const stringWithInt = '100';
console.log(parseInt(stringWithInt).toFixed(2));

const sumInt = x + z;
console.log(sumInt);

const sumIntFloat = x + y;
console.log(sumIntFloat);

const sumIntString = x + greeting;
console.log(sumIntString);
console.log('=================');

// Булёвые значения

const boolean = true;
console.log(boolean);
console.log(!boolean);

const falseBool = false;
console.log(falseBool);
console.log(!falseBool);

// Массивы

const array = [7, 'Всем привет!', x, x + y, [z, z + y]];
console.log(array);
console.log(array[1]);
console.log(array[4][1]);
console.log('=================');

array.push('Mutant');
console.log(array);

array.forEach((element) => console.log(element));

array.forEach(function (element) {
  console.log(element);
});

function logArrayElement(el) {
  console.log(el);
}

array.forEach((element) => logArrayElement(element));

// Объекты

const object = {
  name: 'Zakhar',
  job: 'Designer',
};

console.log(object);
console.log(object.name);
console.log(object['name']);
console.log('=================');

object.name = 'Day';
object.lol = 'Mutant';
console.log(object);

Object.keys(object).forEach(function (key) {
  console.log(object[key]);
});

//
// ФУНКЦИИ
//

function doSomething() {
  console.log('Something');
}

const doSomethingElse = () => {
  console.log('Something else');
};

console.log(doSomething);
console.log(doSomethingElse);

doSomething();
doSomethingElse();

function doSomethingWithData(a, b) {
  console.log(a + b);
}

doSomethingWithData(1, 16);

function doSomethingAndReturn(a, b) {
  return a + b;
}

const sum = doSomethingAndReturn(1, 16);

console.log(sum);

console.log('=================');

//
// АЛГОРИТМЫ
//

for (let index = 0; index < array.length; index++) {
  const element = array[index];
  console.log(element);
}

for (let index = 0; index < 5; index++) {
  console.log(index + 1);
}

for (let index = 0; index < 3; index++) {
  const div = document.createElement('div');
  div.style.width = '100px';
  div.style.height = '100px';
  div.style.marginBottom = '10px';
  div.style.backgroundColor = 'black';

  console.log(div);

  document.body.appendChild(div);
}

if (boolean) {
  console.log('Yes');
}

if (falseBool) {
  console.log('No');
} else {
  console.log('Else');
}

console.log(10 + 10 > 19);

if (10 + 10 > 19) {
  console.log(10 + 10);
}

if (10 + 10 > 20) {
  console.log(10 + 10);
} else {
  console.log('10 + 10 not lower then 20');
}

for (let index = 0; index < 100; index++) {
  const span = document.createElement('span');
  let spanText = index + 1 + ', ';

  if (index == 99) {
    spanText = index + 1;
  }

  span.innerHTML = spanText;
  document.body.appendChild(span);
}

console.log(new Document());

console.log(new Array());

console.log(10 + 10 > 20 ? 'True' : 'False');

if (10 + 10 > 20) {
  console.log('True');
} else {
  console.log('False');
}
