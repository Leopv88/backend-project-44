#!/usr/bin/env node
import {
  hello, request, wrongAnswer, greatestCD,
} from '../src/index.js';

const name = hello();
const maxNumber = 10; // Максимальное число для вычисления
console.log('Find the greatest common divisor of given numbers.');

let finish = true;

for (let i = 1; i <= 3; i += 1) {
  const num1 = Math.round(Math.random() * maxNumber); // получаем случайное число num1
  const num2 = Math.round(Math.random() * maxNumber); // получаем случайное число num2
  console.log(`Question: ${num1} ${num2}`); // вопрос пользователю
  const answer = request('Your answer: '); // запрос ответа
  if (greatestCD(num1, num2) === Number(answer)) {
    console.log('Correct!');
  } else {
    wrongAnswer(answer, greatestCD(num1, num2), name);
    finish = false;
    break;
  }
}

if (finish) {
  console.log(`Congratulations, ${name}!`);
}
