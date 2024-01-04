#!/usr/bin/env node
import { playGame } from '../src/index.js';
import getNumber from '../src/games/brain-even.js';

playGame('Answer "yes" if the number is even, otherwise answer "no".', getNumber);
