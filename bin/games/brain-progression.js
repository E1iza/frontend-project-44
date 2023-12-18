#!/usr/bin/env node
import { playGame } from '../../src/basicFunction.js';
import { getProgression } from '../../src/supportFunction.js';

const messageRules = 'What number is missing in the progression?';
playGame(messageRules, getProgression);
