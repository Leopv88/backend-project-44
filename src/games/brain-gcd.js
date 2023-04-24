import startGame from '../index.js';

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

  const maxNumber = 30; // Максимальное число для вычисления
  const numberQuestion = 3; // Количество вопросов

  result.push('Find the greatest common divisor of given numbers.');
  for (let i = 1; i <= numberQuestion; i += 1) {
    const num1 = Math.round(Math.random() * maxNumber); // получаем случайное число num1
    const num2 = Math.round(Math.random() * maxNumber); // получаем случайное число num2
    result.push(`${num1} ${num2}`); // вопрос пользователю
    result.push(greatestCD(num1, num2)); // вопрос пользователю
  }
  startGame(result);
};
