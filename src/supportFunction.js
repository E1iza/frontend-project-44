const getNumberRandom = (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;
export const getNumber = () => {
  const expression = getNumberRandom();
  const answer = expression % 2 === 0 ? 'yes' : 'no';
  return [expression, answer];
};
const calculateStringOperator = (a, b, operator) => {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      return a + b;
  }
};
export const getExpressionRandom = () => {
  const number1 = getNumberRandom();
  const number2 = getNumberRandom();
  const operators = ['+', '-', '*'];
  const operatorRandom = operators[getNumberRandom(0, operators.length - 1)];
  const expression = `${number1} ${operatorRandom} ${number2}`;
  const answer = calculateStringOperator(number1, number2, operatorRandom);
  return [expression, answer];
};

export const getGcd = () => {
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
};
export const getProgression = (step = [-15, 15], start = [-100, 100], count = 10) => {
  const stepValue = getNumberRandom(step[0], step[1]);
  const startValue = getNumberRandom(start[0], start[1]);
  const countValue = getNumberRandom(5, count);
  const progression = [startValue];
  for (let i = 0; i < countValue; i += 1) {
    progression.push(progression[i] + stepValue);
  }
  const indexItemSkip = getNumberRandom(0, progression.length - 1);
  const itemSkip = progression[indexItemSkip];
  progression[indexItemSkip] = '..';
  return [progression.join(' '), itemSkip];
};
function isPrime(num) {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return num !== 1;
}
export const getOneNumber = (max = 500) => {
  const number = getNumberRandom(2, max);
  const answer = isPrime(number) ? 'yes' : 'no';
  return [number, answer];
};
