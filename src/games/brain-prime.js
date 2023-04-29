import { startGame, numberQuestion, randomNumber } from '../index.js';

const simpleNumber = (num) => {
  for (let i = (num - 1); i > 1; i -= 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

export default () => {
  const result = [];

  const minNumber = 1;
  const maxNumber = 100;

  const gameQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  for (let i = 0; i < numberQuestion(); i += 1) {
    const num = randomNumber(maxNumber, minNumber);
    result[i] = [];
    result[i].push(num);
    result[i].push(simpleNumber(num));
  }
  startGame(gameQuestion, result);
};
