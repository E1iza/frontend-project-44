#!/usr/bin/env node
import { playGame } from '../src/index.js';
import getGcd from '../src/games/brain-gcd.js';

playGame('Find the greatest common divisor of given numbers.', getGcd);
