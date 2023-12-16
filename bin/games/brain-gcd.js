#!/usr/bin/env node
import {playGame} from '../../src/basicFunction.js';
import {getTwoNumber} from "../../src/supportFunction.js";
import {getGcd} from "../../src/supportFunction.js";

const messageRules= 'Find the greatest common divisor of given numbers.';
playGame(messageRules, getTwoNumber, getGcd);