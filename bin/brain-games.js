#!/usr/bin/env node

import readlineSync from 'readline-sync';
import runGame from '../src/index.js';

const games = [
  {
    key: '1',
    name: 'Brain-Calc',
    file: '../src/games/calc.js',
    desc: 'What is the result of the expression?',
  },
  {
    key: '2',
    name: 'Brain-GCD',
    file: '../src/games/gcd.js',
    desc: 'Find the greatest common divisor of given numbers.',
  },
  {
    key: '3',
    name: 'Brain-Prime',
    file: '../src/games/prime.js',
    desc: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  },
  {
    key: '4',
    name: 'Brain-Progression',
    file: '../src/games/progression.js',
    desc: 'What number is missing in the progression?',
  },
  {
    key: '5',
    name: 'Brain-Even',
    file: '../src/games/even.js',
    desc: 'Answer "yes" if the number is even, otherwise answer "no".',
  },
];

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!\nPlease choose a game:\n`);

games.forEach((game) => {
  console.log(`${game.key}) ${game.name}`);
});

const choice = readlineSync.question('\nYour choice: ');
const selected = games.find((game) => game.key === choice);

if (!selected) {
  console.log('Invalid choice. Please run one of the specific games directly.');
  process.exit(1);
}

// Здесь нет логики игры — только выбор и запуск через общий цикл
import(selected.file)
  .then((module) => {
    const generateRound = module.default;
    runGame(selected.desc, generateRound);
  })
  .catch((err) => console.error('Failed to load game:', err));
