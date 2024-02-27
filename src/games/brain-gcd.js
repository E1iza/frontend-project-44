import getNumberRandom from '../utils.js';
import playGame from '../index.js';

function getGcd() {
  const minNumber = 1;
  const firstNumber = getNumberRandom(minNumber);
  const secondNumber = getNumberRandom(minNumber);
  const question = `${firstNumber} ${secondNumber}`;
  let max = Math.max(firstNumber, secondNumber);
  let min = Math.min(firstNumber, secondNumber);
  while (max % min) {
    const temp = min;
    min = max % min;
    max = temp;
  }
  const answer = min;
  return [question, answer];
}

const gameDescription = 'Find the greatest common divisor of given numbers.';
export default () => playGame(gameDescription, getGcd);
