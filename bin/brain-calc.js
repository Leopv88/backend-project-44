#!/usr/bin/env node
import {
  hello, request, calc, wrongAnswer,
} from '../src/index.js';

const name = hello();
const arrayOperator = ['*', '-', '+'];
let operator = '';
const maxNumber = 10; // Максимальное число для вычисления

// запуск цикла запросов ответов
console.log('What is the result of the expression?');
let finish = true;
for (let i = 1; i <= 3; i += 1) {
  operator = arrayOperator[Math.floor(Math.random() * arrayOperator.length)];
  const num1 = Math.round(Math.random() * maxNumber); // получаем случайное число num1
  const num2 = Math.round(Math.random() * maxNumber); // получаем случайное число num2
  console.log(`Question: ${num1} ${operator} ${num2}`); // вопрос пользователю
  const answer = request('Your answer: '); // запрос ответа
  if (calc(num1, num2, operator) === Number(answer)) {
    console.log('Correct!');
  } else {
    wrongAnswer(answer, calc(num1, num2, operator), name);
    finish = false;
    break;
  }
}

if (finish) {
  console.log(`Congratulations, ${name}!`);
}
