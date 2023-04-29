import readlineSync from 'readline-sync';

const numberQuestion = () => 3;

const randomNumber = (max, min = 0) => Math.round(Math.random() * (max - min) + min);

const startGame = (gameQuestion, gameInfo) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameQuestion);

  for (let i = 0; i < numberQuestion(); i += 1) {
    const questionGame = gameInfo[i][0];
    const rigthAnswer = gameInfo[i][1];
    console.log(`Question: ${questionGame}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer !== String(rigthAnswer)) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rigthAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};

export { numberQuestion, startGame, randomNumber };
