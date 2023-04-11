#!/usr/bin/env node
import {
  hello, request, wrongAnswer, progression, randomNumber,
} from '../src/index.js';

const name = hello();
const maxNumber = 10; // максимальное начальное значение последовательности
const minLengthArray = 5; // минимальная длинна последовательности
const maxLengthArray = 10; // максимальная длинна последовательности
const minStep = 1; // минимальный шаг последовательности
const maxStep = 5; // максимальный шаг последовательности
let firstNumber = 0;
let lenght = 0; 
let step = 0;
console.log('What number is missing in the progression?');
let finish = true;

for (let i = 1; i <= 3; i += 1) {
  firstNumber = Math.round(Math.random() * maxNumber);
  lenght = randomNumber(minLengthArray, maxLengthArray);
  step = randomNumber(minStep, maxStep);
  const array = progression(firstNumber, lenght, step);
  const item = randomNumber(1, array.length); // какой по номер в последовательности будет удален
  const temp = array[item - 1];
  array[item - 1] = '..';
  console.log(`Question: ${array.join(' ')}`); // вопрос пользователю
  const answer = request('Your answer: '); // запрос ответа

  if (Number(temp) === Number(answer)) {
    console.log('Correct!');
  } else {
    wrongAnswer(answer, temp, name);
    finish = false;
    break;
  }
}

if (finish) {
  console.log(`Congratulations, ${name}!`);
}
