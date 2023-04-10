import readlineSync from 'readline-sync';

const request = (text = '') => {
  const name = readlineSync.question(`${text} `);
  return name;
};

const parityCheck = (num) => {
  const result = num % 2 === 0 ? 'yes' : 'no';
  return result;
};

export { request, parityCheck };
