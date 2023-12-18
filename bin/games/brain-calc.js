#!/usr/bin/env node
import { playGame } from '../../src/basicFunction.js';
import { getExpressionRandom } from '../../src/supportFunction.js';

const messageRules = 'What is the result of the expression?';
playGame(messageRules, getExpressionRandom);
