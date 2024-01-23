import getNumberRandom from '../utils.js';

export default function getGcd() {
  const firstNumber = getNumberRandom(1);
  const secondNumber = getNumberRandom(1);
  const expression = `${firstNumber} ${secondNumber}`;
  let max = Math.max(firstNumber, secondNumber);
  let min = Math.min(firstNumber, secondNumber);
  while (max % min) {
    const temp = min;
    min = max % min;
    max = temp;
  }
  const answer = min;
  return [expression, answer];
}
