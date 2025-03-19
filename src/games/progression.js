import { getStart, generateNumber } from '../index.js';

const generateQuestion = () => {
  const firstNumber = generateNumber(1, 100);
  const step = generateNumber(1, 10);

  const progressionItems = [firstNumber];
  for (let i = 0; i < 9; i += 1) {
    const item = progressionItems[i] + step;
    progressionItems.push(item);
  }

  const a = generateNumber(0, 9);
  const temp = progressionItems[a];
  progressionItems[a] = '..';
  const question = progressionItems.join(' ');
  const result = String(temp);

  return [question, result];
};

export default () => {
  const rules = 'What number is missing in the progression?';
  getStart(generateQuestion, rules);
};
