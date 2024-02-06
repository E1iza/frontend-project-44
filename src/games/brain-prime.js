import getNumberRandom from '../utils.js';
import playGame from '../index.js';

function isPrime(num) {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return num !== 1;
}
function getNumber(maxRange = 500) {
  const minRange = 2;
  const number = getNumberRandom(minRange, maxRange);
  const answer = isPrime(number) ? 'yes' : 'no';
  return [number, answer];
}

export default () => playGame('Answer "yes" if given number is prime. Otherwise answer "no".', getNumber);
