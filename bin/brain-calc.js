#!/usr/bin/env node
// bin/brain-calc.js
import runGame from '../src/index.js';
import generateRound from '../src/games/calc.js';

const DESCRIPTION = 'What is the result of the expression?';

runGame(DESCRIPTION, generateRound);
