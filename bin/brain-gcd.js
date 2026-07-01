#!/usr/bin/env node

import readlineSync from 'readline-sync';

/* global process */

function gcd(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log('brain-gcd\n');
console.log('Welcome to the Brain Games!');

const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!\nFind the greatest common divisor of given numbers.\n`);

const rounds = 3;

for (let i = 0; i < rounds; i++) {
  const a = getRandomInt(1, 100);
  const b = getRandomInt(1, 100);
  const correctAnswer = gcd(a, b);

  console.log(`Question: ${a} ${b}`);
  const userAnswer = readlineSync.question('Your answer: ');

  if (Number(userAnswer) === correctAnswer) {
    console.log('Correct!\n');
  } else {
    console.log(
      `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`
    );
    process.exit(1);
  }
}

console.log(`Congratulations, ${name}!`);
