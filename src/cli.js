import readlineSync from 'readline-sync';

const question = () => {
    const name = readlineSync.question('Your answer: ');
    console.log('Hello,' + name + '!');
};

export default question;