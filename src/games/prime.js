import { getStart, generateNumber } from '../index.js';

const isPrime = (number) => {
  if (number < 2) return false;
  if (number === 2) return true;
  if (number % 2 === 0) return false;

  const upperBorder = number / 2;
  for (let divisor = 3; divisor <= upperBorder; divisor += 1) {
    if (number % divisor === 0) return false;
  }
  return true;
};

const generateQuestion = () => {
  const num = generateNumber(1, 100);
  const question = String(num);
  const result = isPrime(num) ? 'yes' : 'no';
  return [question, result];
};

export default () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  getStart(generateQuestion, rules);
};
