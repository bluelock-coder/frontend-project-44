#!/usr/bin/env node
import runGame from '../src/index.js';
import generateRound from '../src/games/calc.js';

const gameDescription = 'What is the result of the expression?';

runGame(gameDescription, generateRound);
