import { getUserName, generateNumber, randomItem, getAnswer } from '../index.js';

export default () => {
  console.log("Welcome to the Brain Games!");
  const name = getUserName();
  console.log(`Hello, ${name}!`);

  console.log("What is the result of the expression?");
  let i = 0;
  while (i < 3) {
    const firstNumber = generateNumber(1, 100);
    const secondNumber = generateNumber(1, 100);
    const operators = ['-', '+', '*'];
    const randomOperator = randomItem(operators);
    const question = `Question: ${firstNumber} ${randomOperator} ${secondNumber}`;
    console.log(question);

    let result;
    if (randomOperator === '-') {
      result = String(firstNumber - secondNumber);
    } else if (randomOperator === '+') {
      result = String(firstNumber + secondNumber);
    } else if (randomOperator === '*') {
      result = String(firstNumber * secondNumber);
    };

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
