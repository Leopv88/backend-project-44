import startGame from '../index.js';

const calc = (num1, num2, operator) => {
  if (operator === '*') {
    return num1 * num2;
  }
  if (operator === '-') {
    return num1 - num2;
  }
  return num1 + num2;
};

export default () => {
  const result = [];
  const arrayOperator = ['*', '-', '+'];
  const maxNumber = 10; // Максимальное число для вычисления
  const numberQuestion = 3; // Количество вопросов
  result.push('What is the result of the expression?');
  for (let i = 1; i <= numberQuestion; i += 1) {
    const operator = arrayOperator[Math.floor(Math.random() * arrayOperator.length)];
    const num1 = Math.round(Math.random() * maxNumber); // получаем случайное число num1
    const num2 = Math.round(Math.random() * maxNumber); // получаем случайное число num2
    result.push(`${num1} ${operator} ${num2}`); // вопрос пользователю
    result.push(calc(num1, num2, operator)); // вопрос пользователю
  }
  startGame(result);
};
