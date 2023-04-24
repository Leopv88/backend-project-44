import startGame from '../index.js';

const parityCheck = (num) => {
  const result = num % 2 === 0 ? 'yes' : 'no';
  return result;
};

export default () => {
  const result = [];

  const maxNumber = 1000; // Максимальное число для вычисления
  const numberQuestion = 3; // Количество вопросов

  result.push('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 1; i <= numberQuestion; i += 1) {
    const num = Math.round(Math.random() * maxNumber); // получаем случайное число
    result.push(num); // вопрос пользователю
    result.push(parityCheck(num)); // вопрос пользователю
  }
  startGame(result);
};
