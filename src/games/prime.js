import { getUserName, generateNumber, getAnswer } from '../index.js';

export default () => {
  console.log('Welcome to the Brain Games!');
  const name = getUserName();
  console.log(`Hello, ${name}!`);

  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  let i = 0;
  while (i < 3) {
    const num = generateNumber(1, 100);
    console.log('ЧИСЛО', num);
    let result = '';
    const upperBorder = num / 2;
    console.log(upperBorder);
    for (let divisor = 2; divisor <= upperBorder; divisor += 1) {
	    console.log('ДЕЛИТЕЛЬ', divisor)
      if (num % divisor === 0) {
        result = 'no';
        divisor = num;
      } else {
          result = 'yes';
      }
    }
	  console.log('!!!!!!', result);
    const question = `Question: ${num}`;
    console.log(question);
    const answer = getAnswer();

    if (answer === result) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.
Let's try again, ${name}`);
      i = 4;
      return i;
    }
  }
  console.log(`Congratulations, ${name}`);
};
