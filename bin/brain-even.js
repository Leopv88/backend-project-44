#!/usr/bin/env node
import { request, parityCheck, hello } from '../src/games/index.js';

const name = hello();
let finish = true;
const maxNumber = 1000; // Максимальное число для вычисления

// запуск цикла проверки четности
console.log('Answer "yes" if the number is even, otherwise answer "no".');

for (let i = 1; i <= 3; i += 1) {
  const num = Math.round(Math.random() * maxNumber); // получаем случайное число
  console.log(`Question: ${num}`); // вопрос пользователю
  const answer1 = request('Your answer: '); // запрос ответа
  if (parityCheck(num) === answer1) {
    console.log('Correct!');
  } else {
    console.log(`'${answer1}' is wrong answer ;(. Correct answer was '${parityCheck(num)}'.`);
    console.log(`Let's try again, ${name}!`);
    finish = false;
    break;
  }
}

if (finish) {
  console.log(`Congratulations, ${name}!`);
}
