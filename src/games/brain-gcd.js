import { startGame, numberQuestion, randomNumber } from '../index.js';

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
  if (num1 === 0 || num2 === 0) {
    return max;
  }
  let result = min;
  while ((max % result !== 0) || (min % result !== 0)) {
    result -= 1;
  }
  return result;
};

export default () => {
  const result = [];

  const maxNumber = 30;

  const gameQuestion = 'Find the greatest common divisor of given numbers.';
  for (let i = 0; i < numberQuestion(); i += 1) {
    const num1 = randomNumber(maxNumber);
    const num2 = randomNumber(maxNumber);
    result[i] = [];
    result[i].push(`${num1} ${num2}`);
    result[i].push(greatestCD(num1, num2));
  }
  startGame(gameQuestion, result);
};
