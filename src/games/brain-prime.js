import startGame from '../index.js';

const randomNumber = (min, max) => Math.round(Math.random() * (max - min) + min);

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

  const minNumber = 1; // минимальное число
  const maxNumber = 100; // максимальное число
  const numberQuestion = 3; // Количество вопросов

  result.push('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 1; i <= numberQuestion; i += 1) {
    const num = randomNumber(minNumber, maxNumber);
    result.push(num); // вопрос пользователю
    result.push(simpleNumber(num)); // вопрос пользователю
  }
  startGame(result);
};
