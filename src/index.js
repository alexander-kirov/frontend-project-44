import readlineSync from 'readline-sync';

export const getStart = (generateQuestion, rules) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!
${rules}`);

  let correctAnswers = 0;
  while (correctAnswers < 3) {
    const [question, result] = generateQuestion();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === result) {
      console.log('Correct!');
      correctAnswers += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.
Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export const generateNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
