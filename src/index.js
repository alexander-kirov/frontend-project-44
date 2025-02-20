import readlineSync from 'readline-sync';

// Запись имени пользователяi

export const getUserName = () => {
  const getName = readlineSync.question('May I have your name? ');
  return getName;
};

// Получение ответа пользователя

export const getAnswer = () => {
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

// Случайное число

export const generateNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Случайный элемент массива

export const randomItem = (array) => {
  const randomIndex = Math.floor(Math.random() * array.length);
  const result = array[randomIndex];
  return result;
};

/* export const getLose = () => {
  return `'${answer}' is wrong answer ;(. Correct answer was '${result}'.
Let's try again, ${name}`;
} */
