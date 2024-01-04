#!/usr/bin/env node
import { playGame } from '../src/index.js';
import getOneNumber from '../src/games/brain-prime.js';

playGame('Answer "yes" if given number is prime. Otherwise answer "no".', getOneNumber);
