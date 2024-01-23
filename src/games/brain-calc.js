import getNumberRandom from '../utils.js';

const calculateStringOperator = (a, b, operator) => {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      return false;
  }
};
export default function getExpressionRandom() {
  const number1 = getNumberRandom();
  const number2 = getNumberRandom();
  const operators = ['+', '-', '*'];
  const operatorRandom = operators[getNumberRandom(0, operators.length - 1)];
  const expression = `${number1} ${operatorRandom} ${number2}`;
  const answer = calculateStringOperator(number1, number2, operatorRandom);
  if (!answer) {
    console.log('Оператор не определен');
    return false;
  }
  return [expression, answer];
}
