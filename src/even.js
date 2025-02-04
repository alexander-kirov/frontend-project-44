import readlineSync from 'readline-sync';

export default () => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let i = 0;

  while (i < 3) {
    const generateNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
    const number = generateNumber(1, 100);
    const question = `Question: ${number}`;
    console.log(question);

    let even;
    number % 2 === 0 ? even = 'yes' : even = 'no';
  
    const answer = readlineSync.question('Your answer: ');
      if (answer === even) {
      console.log('Correct!');
      i += 1;
      } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${even}'.
Let's try again, ${name}`);
      return i = 4;
      };
  };
  console.log(`Congratulations, ${name}!`);
};
