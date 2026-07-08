#!/usr/bin/env node

import readlineSync from 'readline-sync';


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

const getGameData = () => {
 
  const length = getRandomInt(5, 10);
  const start = getRandomInt(-50, 50);
  
 
  let step = getRandomInt(-10, 10);
  if (step === 0) {
    step = 1;
  }

  const progression = generateProgression(start, step, length);

  
  const hiddenIndex = getRandomInt(0, length - 1);
  const correctAnswer = progression[hiddenIndex];

  progression[hiddenIndex] = '..';

  const question = progression.join(' ');
  return { question, answer: String(correctAnswer) };
};

const runGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  const rounds = 3;
  let round = 0;

  while (round < rounds) {
    const { question, answer } = getGameData();
    console.log('What number is missing in the progression?');
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === answer) {
      console.log('Correct!');
      round += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

runGame();
