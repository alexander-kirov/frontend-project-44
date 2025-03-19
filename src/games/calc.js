import { getStart, generateNumber } from '../index.js';

const operators = ['-', '+', '*'];

const randomOperator = () => operators[Math.floor(Math.random() * operators.length)];

const generateQuestion = () => {
  const firstNumber = generateNumber(1, 100);
  const secondNumber = generateNumber(1, 100);
  const op = randomOperator();
  const question = `${firstNumber} ${op} ${secondNumber}`;
  let result;
  if (op === '-') {
    result = String(firstNumber - secondNumber);
  } else if (op === '+') {
    result = String(firstNumber + secondNumber);
  } else if (op === '*') {
    result = String(firstNumber * secondNumber);
  }
  return [question, result];
};

const rules = 'What is the result of the expression?';

export default () => {
  getStart(generateQuestion, rules);
};
