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
  const name = request('May I have your name?');
  console.log(`Hello, ${name}!`);
  return name;
};

const wrongAnswer = (wrong, correct, name) => {
  console.log(`'${wrong}' is wrong answer ;(. Correct answer was '${correct}'.`);
  console.log(`Let's try again, ${name}!`);
};

export {
  request, parityCheck, calc, hello, wrongAnswer,
};
