import getRandomInt from '../utils.js';

const OPERATIONS = ['+', '-', '*'];

const getOperation = () => OPERATIONS[getRandomInt(0, OPERATIONS.length - 1)];

const calculate = (a, b, op) => {
  switch (op) {
    case '+': return a + b;
    case '-': return a >= b ? a - b : b - a;
    case '*': return a * b;
    default: throw new Error(`Unknown operation: ${op}`);
  }
};

const generateRound = () => {
  const a = getRandomInt(1, 100);
  const b = getRandomInt(1, 100);
  const op = getOperation();

  let question;
  if (op === '-') {
    question = a >= b ? `${a} ${op} ${b}` : `${b} ${op} ${a}`;
  } else {
    question = `${a} ${op} ${b}`;
  }

  const expectedAnswer = String(calculate(a, b, op));
  return { question, expectedAnswer };
};

export default generateRound;
