import { startGame, numberQuestion, randomNumber } from '../index.js';

const parityCheck = (num) => {
  const result = num % 2 === 0 ? 'yes' : 'no';
  return result;
};

export default () => {
  const result = [];

  const maxNumber = 1000;

  const gameQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';
  for (let i = 0; i < numberQuestion(); i += 1) {
    const num = randomNumber(maxNumber);
    result[i] = [];
    result[i].push(num);
    result[i].push(parityCheck(num));
  }
  startGame(gameQuestion, result);
};
