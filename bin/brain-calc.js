#!/usr/bin/env node
import { playGame } from '../src/index.js';
import getExpressionRandom from '../src/games/brain-calc.js';

playGame('What is the result of the expression?', getExpressionRandom);
