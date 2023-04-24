import startGame from '../index.js';

const randomNumber = (min, max) => Math.round(Math.random() * (max - min) + min);

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
  const maxNumber = 10; // максимальное начальное значение последовательности
  const minLengthArray = 5; // минимальная длинна последовательности
  const maxLengthArray = 10; // максимальная длинна последовательности
  const minStep = 1; // минимальный шаг последовательности
  const maxStep = 5; // максимальный шаг последовательности
  let firstNumber = 0;
  let lenght = 0;
  let step = 0;
  const numberQuestion = 3; // Количество вопросов

  result.push('What number is missing in the progression?');
  for (let i = 1; i <= numberQuestion; i += 1) {
    firstNumber = Math.round(Math.random() * maxNumber);
    lenght = randomNumber(minLengthArray, maxLengthArray);
    step = randomNumber(minStep, maxStep);
    const array = progression(firstNumber, lenght, step);
    const item = randomNumber(1, array.length); // какой по номер в последовательности будет удален
    const temp = array[item - 1];
    array[item - 1] = '..';

    result.push(`${array.join(' ')}`); // вопрос пользователю
    result.push(temp); // вопрос пользователю
  }
  startGame(result);
};
