import getNumberRandom from '../utils.js';
import playGame from '../index.js';

const isEven = (num) => (num % 2 === 0);

function getNumber() {
  const question = getNumberRandom();
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
}

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
export default () => playGame(gameDescription, getNumber);
