import getNumberRandom from '../utils.js';
import { playGame } from '../index.js';

function isPrime(num) {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return num !== 1;
}
function getOneNumber(max = 500) {
  const number = getNumberRandom(2, max);
  const answer = isPrime(number) ? 'yes' : 'no';
  return [number, answer];
}

export default function playBrainPrime() {
  playGame('Answer "yes" if given number is prime. Otherwise answer "no".', getOneNumber);
}
