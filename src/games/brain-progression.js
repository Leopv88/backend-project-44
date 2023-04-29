import { startGame, numberQuestion, randomNumber } from '../index.js';

const progression = (firstNumber, lenght, step) => {
  const array = [];
  array[0] = firstNumber;
  for (let i = 1; i < lenght; i += 1) {
    array[i] = array[i - 1] + step;
  }
  return array;
};

export default () => {
  const result = [];
  const maxNumber = 10;
  const minLengthArray = 5;
  const maxLengthArray = 10;
  const minStep = 1;
  const maxStep = 5;
  let firstNumber = 0;
  let lenght = 0;
  let step = 0;

  const gameQuestion = 'What number is missing in the progression?';
  for (let i = 0; i < numberQuestion(); i += 1) {
    firstNumber = randomNumber(maxNumber);
    lenght = randomNumber(maxLengthArray, minLengthArray);
    step = randomNumber(maxStep, minStep);
    const array = progression(firstNumber, lenght, step);
    const item = randomNumber(array.length, 1);
    const temp = array[item - 1];
    array[item - 1] = '..';
    result[i] = [];
    result[i].push(`${array.join(' ')}`);
    result[i].push(temp);
  }
  startGame(gameQuestion, result);
};
