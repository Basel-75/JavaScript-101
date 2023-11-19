let color = 'blue';
console.log(color);
console.log(color);
console.log(color);
console.log(color);

color = 'black';
console.log(color);
console.log(color);
console.log(color);

let name1;
console.log(name1);

let value = 2;
console.log(value * 'JavaScript');

let language = 'JavaScript';
console.log(language.length);
console.log(language[0]);

let colors = ['red', 'green', 'blue'];
console.log(colors);
console.log(colors[0]);
colors[1] = 'black';
console.log(colors);
console.log(colors.includes('black'));
colors.unshift('white');
console.log(colors);

const values = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
console.log(values[1][1]);

let message = ['welcome', 'to', 'JavaScript'];
let result1 = message.join('@');
console.log(result1);

let age = 13;
if (age < 12) {
  console.log('Sorry, you\'re not old enough to play this game');
} else {
  console.log('Welcome to the game');
}

const colors1 = ['red', 'green', 'blue'];
let colorNumber = 52;
switch (colorNumber) {
  case 1:
    console.log(colors1[0]);
    break;
  case 2:
    console.log(colors1[1]);
    break;
  case 3:
    console.log(colors1[2]);
    break;
  default:
    console.log('white');
    break;
}

const Arr = ['first', 'second', 'third', 'forth'];
for (let i = 0; i < Arr.length; i++) {
  console.log(Arr[i]);
}

let j = 0;
while (j < Arr.length) {
  console.log(Arr[j]);
  j++;
}

function printNumbers(to) {
  for (let i = 1; i <= to; i++) {
    console.log(i);
  }
}

function add(firstNumber, secondNumber) {
  let result = firstNumber + secondNumber;
  return result;
}
printNumbers(add(3, 7));
