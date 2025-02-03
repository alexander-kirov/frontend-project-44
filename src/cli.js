import readlineSync from 'readline-sync';

export default () => {
  const name = readlineSync.question('May I have your name? ');
  const greeting = `Hello, ${name}!`;
  return greeting;
};
