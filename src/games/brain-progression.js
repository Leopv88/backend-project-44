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
    const progressionLenght = getRandomNumber(maxLengthArray, minLengthArray);
    const progressionStep = getRandomNumber(maxStep, minStep);
    const progression = getProgression(firstNumber, progressionLenght, progressionStep);
    const hiddenIndex = getRandomNumber(progression.length - 1);
    const expectedAnswer = progression[hiddenIndex];
    progression[hiddenIndex] = '..';
    gameQuestions[i] = [
      `${progression.join(' ')}`,
      expectedAnswer,
    ];
  }
  startGame(gameRules, gameQuestions);
};
