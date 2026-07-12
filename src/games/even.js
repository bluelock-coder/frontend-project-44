// src/games/even.js

const getRandomInt = (min, max) => {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1)) + minCeiled;
};

const generateRound = () => {
  const number = getRandomInt(1, 100);
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
  const question = String(number);

  return { question, answer: correctAnswer };
};

export default generateRound;
