import readlineSync from 'readline-sync';

const request = (text = '') => {
  const name = readlineSync.question(`${text} `);
  return name;
};

const parityCheck = (num) => {
  const result = num % 2 === 0 ? 'yes' : 'no';
  return result;
};

const calc = (num1, num2, operator) => {
  if (operator === '*') {
    return num1 * num2;
  }
  if (operator === '-') {
    return num1 - num2;
  }
  return num1 + num2;
};

const hello = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}!`);
  return name;
};

const wrongAnswer = (wrong, correct, name) => {
  console.log(`'${wrong}' is wrong answer ;(. Correct answer was '${correct}'.`);
  console.log(`Let's try again, ${name}!`);
};

const greatestCD = (num1, num2) => {
  let min = 0;
  let max = 0;
  if (num1 > num2) {
    max = num1;
    min = num2;
  } else if (num1 < num2) {
    max = num2;
    min = num1;
  } else {
    return num1;
  }
  let result = min;
  while ((max % result !== 0) || (min % result !== 0)) {
    result -= 1;
  }
  return result;
};

const progression = (firstNumber, lenght, step) => {
  const array = [];
  array[0] = firstNumber;
  for (let i = 1; i < lenght; i += 1) {
    array[i] = array[i - 1] + step;
  }
  return array;
};

const randomNumber = (min, max) => Math.round(Math.random() * (max - min) + min);

const simpleNumber = (num) => {
  for (let i = (num - 1); i > 1; i -= 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

export {
  request, parityCheck, calc, hello, wrongAnswer, greatestCD, progression, randomNumber,
  simpleNumber,
};
