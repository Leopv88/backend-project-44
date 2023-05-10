import readlineSync from 'readline-sync';

const QUESTIONS_COUNT = 3;

const getRandomNumber = (max, min = 0) => Math.round(Math.random() * (max - min) + min);

const startGame = (gameRules, gameQuestions) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameRules);

  for (let i = 0; i < QUESTIONS_COUNT; i += 1) {
    const questionGame = gameQuestions[i][0];
    const rigthAnswer = String(gameQuestions[i][1]);
    console.log(`Question: ${questionGame}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer !== rigthAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rigthAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};

export { QUESTIONS_COUNT, startGame, getRandomNumber };
