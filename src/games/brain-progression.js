import { startGame, QUESTIONS_COUNT, getRandomNumber } from '../index.js';

const getProgression = (firstNumber, lenght, step) => {
  const array = [];
  array[0] = firstNumber;
  for (let i = 1; i < lenght; i += 1) {
    array[i] = array[i - 1] + step;
  }
  return array;
};

export default () => {
  const gameQuestions = [];
  const maxNumber = 10;
  const minLengthArray = 5;
  const maxLengthArray = 10;
  const minStep = 1;
  const maxStep = 5;

  const gameRules = 'What number is missing in the progression?';
  for (let i = 0; i < QUESTIONS_COUNT; i += 1) {
    const firstNumber = getRandomNumber(maxNumber);
    const lenght = getRandomNumber(maxLengthArray, minLengthArray);
    const step = getRandomNumber(maxStep, minStep);
    const array = getProgression(firstNumber, lenght, step);
    const item = getRandomNumber(array.length - 1);
    const rightAnswer = array[item];
    array[item] = '..';
    gameQuestions[i] = [
      `${array.join(' ')}`,
      rightAnswer,
    ];
  }
  startGame(gameRules, gameQuestions);
};
