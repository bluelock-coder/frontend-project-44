// src/games/progression.js
const getRandomInt = (min, max) => {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1)) + minCeiled;
};

const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }
  return progression;
};

const generateRound = () => {
  const length = getRandomInt(5, 10);
  const start = getRandomInt(-50, 50);

  let step = getRandomInt(-10, 10);
  if (step === 0) step = 1;

  const progression = generateProgression(start, step, length);
  const hiddenIndex = getRandomInt(0, length - 1);

  
  const expectedAnswer = String(progression[hiddenIndex]);

  progression[hiddenIndex] = '..';
  const question = progression.join(' ');

  return { question, expectedAnswer };
};

export default generateRound;
