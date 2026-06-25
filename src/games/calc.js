// src/games/calc.js
import getRandomInt from '../utils.js';

const OPERATIONS = ['+', '-', '*'];

const getOperation = () => OPERATIONS[getRandomInt(0, OPERATIONS.length)];

const calculate = (a, b, op) => {
  switch (op) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      throw new Error(`Unknown operation: ${op}`);
  }
};

const generateRound = () => {
  const a = getRandomInt(1, 100);
  const b = getRandomInt(1, 100);
  const op = getOperation();
  const question = `${a} ${op} ${b}`;
  const correctAnswer = String(calculate(a, b, op));
  return { question, correctAnswer };
};

export default generateRound;