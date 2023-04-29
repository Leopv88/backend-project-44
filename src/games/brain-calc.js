import { startGame, numberQuestion, randomNumber } from '../index.js';

const calc = (num1, num2, operator) => {
  if (operator === '*') {
    return num1 * num2;
  }
  if (operator === '-') {
    return num1 - num2;
  }
  return num1 + num2;
};

export default () => {
  const result = [];
  const arrayOperator = ['*', '-', '+'];
  const maxNumber = 10;
  const gameQuestion = 'What is the result of the expression?';
  for (let i = 0; i < numberQuestion(); i += 1) {
    const operator = arrayOperator[Math.floor(Math.random() * arrayOperator.length)];
    const num1 = randomNumber(maxNumber);
    const num2 = randomNumber(maxNumber);
    result[i] = [];
    result[i].push(`${num1} ${operator} ${num2}`);
    result[i].push(calc(num1, num2, operator));
  }
  startGame(gameQuestion, result);
};
