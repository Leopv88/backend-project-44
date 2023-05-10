import { startGame, QUESTIONS_COUNT, getRandomNumber } from '../index.js';

const isSimpleNumber = (num) => {
  for (let i = (num - 1); i > 1; i -= 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

export default () => {
  const gameQuestions = [];

  const minNumber = 1;
  const maxNumber = 100;

  const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  for (let i = 0; i < QUESTIONS_COUNT; i += 1) {
    const num = getRandomNumber(maxNumber, minNumber);
    gameQuestions[i] = [
      num,
      isSimpleNumber(num),
    ];
  }
  startGame(gameRules, gameQuestions);
};
