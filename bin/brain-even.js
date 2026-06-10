#!/usr/bin/env node
import cli from '../src/cli.js';
import { runGame } from '../src/gameEven.js';

const start = () => {
  const name = cli();
  console.log('Welcome to the Brain Games!');
  runGame(name);
};

start();
