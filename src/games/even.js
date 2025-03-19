import { getStart, generateNumber } from '../index.js';

const generateQuestion = () => {
  const number = generateNumber(1, 100);
  const question = String(number);
  const result = number % 2 === 0 ? 'yes' : 'no';
  return [question, result];
};

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

export default () => {
  getStart(generateQuestion, rules);
};
