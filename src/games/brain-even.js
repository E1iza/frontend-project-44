import getNumberRandom from '../utils.js';

export default function getNumber() {
  const expression = getNumberRandom();
  const answer = expression % 2 === 0 ? 'yes' : 'no';
  return [expression, answer];
}
