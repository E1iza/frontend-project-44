#!/usr/bin/env node
import { playGame } from '../src/index.js';
import getProgression from '../src/games/brain-progression.js';

playGame('What number is missing in the progression?', getProgression);
