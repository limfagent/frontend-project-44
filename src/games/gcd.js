import runEngine from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

// Функция для поиска НОД (алгоритм Эвклида — классика!)
const getGcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return getGcd(b, a % b);
};

const generateRound = () => {
  const num1 = Math.floor(Math.random() * 50) + 1;
  const num2 = Math.floor(Math.random() * 50) + 1;

  const question = `${num1} ${num2}`;
  const result = getGcd(num1, num2);

  return [question, String(result)];
};

export default () => runEngine(description, generateRound);
