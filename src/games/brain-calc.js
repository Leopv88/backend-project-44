import { startGame, QUESTIONS_COUNT, getRandomNumber } from '../index.js';

const calc = (num1, num2, operator) => {
  switch (operator) {
    case '*':
      return num1 * num2;
    case '-':
      return num1 - num2;
    case '+':
      return num1 + num2;
    default:
      return null;
  }
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
    gameQuestions.push([
      `${num1} ${operator} ${num2}`,
      calc(num1, num2, operator),
    ]);
  }
  startGame(gameRules, gameQuestions);
};
