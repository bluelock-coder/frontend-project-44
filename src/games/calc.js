// src/games/calc.js
import getRandomInt from '../utils.js';

const OPERATIONS = ['+', '-', '*'];

const getOperation = () => OPERATIONS[getRandomInt(0, OPERATIONS.length - 1)];

const calculate = (a, b, op) => {
  switch (op) {
    case '+':
      return a + b;
    case '-':
      // Гарантируем неотрицательный результат
      if (a >= b) {
        return a - b;
      }
      // Если a < b, меняем местами
      return b - a;
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

  
  let question;
  if (op === '-') {
    if (a >= b) {
      question = `${a} ${op} ${b}`;
    } else {
      
      question = `${b} ${op} ${a}`;
    }
  } else {
    question = `${a} ${op} ${b}`;
  }

  const correctAnswer = String(calculate(a, b, op));
  return { question, answer: correctAnswer };
};

export default generateRound;
