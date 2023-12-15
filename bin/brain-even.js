#!/usr/bin/env node
import getGreeting from '../src/cli.js';
import isEvenGame from '../src/solution.js';

console.log('Welcome to the Brain Games!');
const name = getGreeting();
isEvenGame(name);
