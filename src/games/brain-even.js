import getNumberRandom from '../utils.js';
import { playGame } from '../index.js';

function getNumber() {
  const expression = getNumberRandom();
  const answer = expression % 2 === 0 ? 'yes' : 'no';
  return [expression, answer];
}

export default function playBrainEven() {
  playGame('Answer "yes" if the number is even, otherwise answer "no".', getNumber);
}
