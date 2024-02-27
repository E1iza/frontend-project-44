import getNumberRandom from '../utils.js';
import playGame from '../index.js';

const calculateStringOperator = (a, b, operator) => {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      console.log('Оператор не определен');
      return false;
  }
};
function getExpressionRandom() {
  const number1 = getNumberRandom();
  const number2 = getNumberRandom();
  const operators = ['+', '-', '*'];
  const startIndex = 0;
  const stopIndex = operators.length - 1;
  const operatorRandom = operators[getNumberRandom(startIndex, stopIndex)];
  const question = `${number1} ${operatorRandom} ${number2}`;
  const answer = calculateStringOperator(number1, number2, operatorRandom);
  return [question, answer];
}

const gameDescription = 'What is the result of the expression?';
export default () => playGame(gameDescription, getExpressionRandom);
