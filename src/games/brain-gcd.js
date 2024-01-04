import getNumberRandom from '../supportFunction.js';

export default function getGcd() {
  const a = getNumberRandom(1);
  const b = getNumberRandom(1);
  const expression = `${a} ${b}`;
  let max = Math.max(a, b);
  let min = Math.min(a, b);
  while (max % min) {
    const temp = min;
    min = max % min;
    max = temp;
  }
  const answer = min;
  return [expression, answer];
}
