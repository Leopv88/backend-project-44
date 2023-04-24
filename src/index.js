import readlineSync from 'readline-sync';

export default (gameInfo) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(gameInfo[0]); // задача в игре
  let finish = true;
  for (let i = 1; i < gameInfo.length; i += 2) {
    const questionGame = gameInfo[i];
    const rigthAnswer = gameInfo[i + 1];
    console.log(`Question: ${questionGame}`); // вопрос пользователю
    const answer = readlineSync.question('Your answer: '); // запрос ответа

    if (answer === String(rigthAnswer)) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rigthAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      finish = false;
      break;
    }
  }

  if (finish) {
    console.log(`Congratulations, ${userName}!`);
  }
};
