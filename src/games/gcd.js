import { getStart, generateNumber } from '../index.js';

const getGCD = (a, b) => {
  let num1 = a;
  let num2 = b;

  while (num2 !== 0) {
    const temp = num2;
    num2 = num1 % num2;
    num1 = temp;
  }

  return num1;
};

const generateQuestion = () => {
  const firstNumber = generateNumber(1, 100);
  const secondNumber = generateNumber(1, 100);
  const question = `${firstNumber} ${secondNumber}`;
  const result = String(getGCD(firstNumber, secondNumber));
  return [question, result];
};

const rules = 'Find the greatest common divisor of given numbers.';

export default () => {
  getStart(generateQuestion, rules);
};
