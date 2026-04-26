import runEngine from '../index.js';

const description = 'What is the result of the expression?';

const generateRound = () => {
  const num1 = Math.floor(Math.random() * 20);
  const num2 = Math.floor(Math.random() * 20);
  const operators = ['+', '-', '*'];
  const operator = operators[Math.floor(Math.random() * operators.length)];

  const question = `${num1} ${operator} ${num2}`;
  let result;

  switch (operator) {
    case '+': result = num1 + num2; break;
    case '-': result = num1 - num2; break;
    case '*': result = num1 * num2; break;
    default: throw new Error(`Unknown operator: ${operator}`);
  }

  return [question, String(result)];
};

export default () => runEngine(description, generateRound);
