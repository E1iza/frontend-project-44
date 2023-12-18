#!/usr/bin/env node
import { playGame } from '../../src/basicFunction.js';
import { getGcd } from '../../src/supportFunction.js';

const messageRules = 'Find the greatest common divisor of given numbers.';
playGame(messageRules, getGcd);
