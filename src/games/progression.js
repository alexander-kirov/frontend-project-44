import { getUserName, generateNumber, getAnswer } from '../index.js';

export default () => {
  console.log('Welcome to the Brain Games!');
  const name = getUserName();
  console.log(`Hello, ${name}!`);

  console.log('What number is missing in the progression?');

  let i = 0;
  while (i < 3) {
    const firstNumber = generateNumber(1, 100);
    const step = generateNumber(1, 10);

    const progressionItems = [firstNumber];
    const getProgression = () => {
      for (let i = 0; i < 9; i += 1) {
        const item = progressionItems[i] + step;
        progressionItems.push(item);
      }
      return progressionItems;
    };

    getProgression();

    const a = generateNumber(1, 9);
    const temp = progressionItems[a];
    progressionItems[a] = '..';
    const question = `Question: ${progressionItems}`;
    console.log(question);

    const answer = getAnswer();

    if (Number(answer) === temp) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${temp}'.
Let's try again, ${name}`);
      i = 4;
      return i;
    }
  }
  console.log(`Congratulations, ${name}`);
};
