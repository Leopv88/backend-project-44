#!/usr/bin/env node
import {
  hello, request, wrongAnswer, randomNumber, simpleNumber,
} from '../src/index.js';

const name = hello();
const maxNumber = 100; // максимальное число

console.log('Welcome to the Brain Games!');
let finish = true;

for (let i = 1; i <= 3; i += 1) {
  const num = randomNumber(1, maxNumber);
  console.log(`Question: ${num}`); // вопрос пользователю
  const answer = request('Your answer: '); // запрос ответа

  if (simpleNumber(num) === answer) {
    console.log('Correct!');
  } else {
    wrongAnswer(answer, simpleNumber(num), name);
    finish = false;
    break;
  }
}

if (finish) {
  console.log(`Congratulations, ${name}!`);
}
