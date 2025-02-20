import { getUserName, generateNumber, getAnswer } from '../index.js';

export default () => {
  console.log('Welcome to the Brain Games!');
  const name = getUserName();
  console.log(`Hello, ${name}!`);

  console.log('Find the greatest common divisor of given numbers.');

  let i = 0;

  while (i < 3) {
    const firstNumber = generateNumber(1, 100);
    const secondNumber = generateNumber(1, 100);

    const question = `Question: ${firstNumber} ${secondNumber}`;
    console.log(question);

    const getGCD = (num1, num2) => {
      let temp;
      if (num1 > num2) {
        while (num2 !== 0) {
          temp = num2;
          num2 = num1 % num2;
          num1 = temp;
        }
      }
      if (num1 < num2) {
        return getGCD(num2, num1);
      }
      return temp;
    };
    const result = getGCD(firstNumber, secondNumber);

    const answer = getAnswer();
    if (Number(answer) === result) {
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
