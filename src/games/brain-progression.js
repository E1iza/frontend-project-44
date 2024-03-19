import getNumberRandom from '../utils.js';
import playGame from '../index.js';

const getProgression = (startNumber, stepProgression, lengthProgression) => {
  const progression = [startNumber];
  for (let i = 0; i < lengthProgression; i += 1) {
    progression.push(progression[i] + stepProgression);
  }
  return progression;
};

const getBrainProgression = (step = [-15, 15], startInt = [-100, 100], countItems = [5, 10]) => {
  const startNumber = getNumberRandom(startInt[0], startInt[1]);
  let stepProgression = getNumberRandom(step[0], step[1]);
  if (stepProgression === 0) stepProgression += 1;
  const lengthProgression = getNumberRandom(countItems[0], countItems[1]);
  const question = getProgression(startNumber, stepProgression, lengthProgression);
  const startIndex = 0;
  const stopIndex = question.length - 1;
  const indexNumberSkip = getNumberRandom(startIndex, stopIndex);
  const itemSkip = question[indexNumberSkip];
  question[indexNumberSkip] = '..';
  return [question.join(' '), itemSkip];
};

const gameDescription = 'What number is missing in the progression?';
export default () => playGame(gameDescription, getBrainProgression);
