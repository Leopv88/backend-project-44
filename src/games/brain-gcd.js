import { startGame, QUESTIONS_COUNT, getRandomNumber } from '../index.js';

const getGCD = (num1, num2, divider = num1 > num2 ? num1 : num2) => {
  if (num1 % divider === 0 && num2 % divider === 0) {
    return divider;
  }
  return getGCD(num1, num2, divider - 1);
};

export default () => {
  const gameQuestions = [];

  const maxNumber = 30;

  const gameRules = 'Find the greatest common divisor of given numbers.';
  for (let i = 0; i < QUESTIONS_COUNT; i += 1) {
    const num1 = getRandomNumber(maxNumber);
    const num2 = getRandomNumber(maxNumber);
    gameQuestions[i] = [
      `${num1} ${num2}`,
      getGCD(num1, num2),
    ];
  }
  startGame(gameRules, gameQuestions);
};
