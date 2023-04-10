#!/usr/bin/env node
import { request, parityCheck } from '../src/game.js';

console.log('Welcome to the Brain Games!');
const name = request('May I have your name?');
console.log(`Hello, ${name}!`);

// запуск цикла проверки четности
console.log('Answer "yes" if the number is even, otherwise answer "no".');
let finish = true;
for (let i = 1; i <= 3; i += 1) {
  const num = Math.round(Math.random() * 1000); // получаем случайное число
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
