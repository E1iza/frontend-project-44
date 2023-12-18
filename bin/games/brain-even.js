#!/usr/bin/env node
import { playGame } from '../../src/basicFunction.js';
import { getNumber } from '../../src/supportFunction.js';

const messageRules = 'Answer "yes" if the number is even, otherwise answer "no".';
playGame(messageRules, getNumber);
