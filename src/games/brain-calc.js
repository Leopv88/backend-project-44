import { startGame, QUESTIONS_COUNT, getRandomNumber } from '../index.js';

const calc = (num1, num2, operator) => {
  if (operator === '*') {
    return num1 * num2;
  }
  if (operator === '-') {
    return num1 - num2;
  }
  if (operator === '+') {
    return num1 + num2;
  }
  return null;
};

export default () => {
  const gameQuestions = [];
  const arrayOperator = ['*', '-', '+'];
  const maxNumber = 10;
  const gameRules = 'What is the result of the expression?';
  for (let i = 0; i < QUESTIONS_COUNT; i += 1) {
    const operator = arrayOperator[getRandomNumber(arrayOperator.length - 1)];
    const num1 = getRandomNumber(maxNumber);
    const num2 = getRandomNumber(maxNumber);
    gameQuestions[i] = [
      `${num1} ${operator} ${num2}`,
      calc(num1, num2, operator),
    ];
  }
  startGame(gameRules, gameQuestions);
};
