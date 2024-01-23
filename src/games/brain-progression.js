import getNumberRandom from '../utils.js';

export default function getProgression(step = [-15, 15], startInt = [-100, 100], countItems = 10) {
  const stepValue = getNumberRandom(step[0], step[1]);
  const startItem = getNumberRandom(startInt[0], startInt[1]);
  const countItemsValue = getNumberRandom(5, countItems);
  const progression = [startItem];
  for (let i = 0; i < countItemsValue; i += 1) {
    progression.push(progression[i] + stepValue);
  }
  const indexItemSkip = getNumberRandom(0, progression.length - 1);
  const itemSkip = progression[indexItemSkip];
  progression[indexItemSkip] = '..';
  return [progression.join(' '), itemSkip];
}
