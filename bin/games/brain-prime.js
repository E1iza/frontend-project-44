#!/usr/bin/env node
import { playGame } from '../../src/basicFunction.js';
import { getOneNumber } from '../../src/supportFunction.js';

const messageRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
playGame(messageRules, getOneNumber);
