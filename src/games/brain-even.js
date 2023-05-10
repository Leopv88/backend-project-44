import { startGame, QUESTIONS_COUNT, getRandomNumber } from '../index.js';

const isEven = (num) => num % 2 === 0;

export default () => {
  const gameQuestions = [];

  const maxNumber = 1000;

  const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';
  for (let i = 0; i < QUESTIONS_COUNT; i += 1) {
    const num = getRandomNumber(maxNumber);
    const expectedAnswer = isEven(num) ? 'yes' : 'no';
    gameQuestions[i] = [
      num,
      expectedAnswer,
    ];
  }
  startGame(gameRules, gameQuestions);
};
