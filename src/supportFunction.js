export const isEven = (question) => question % 2 === 0 ? 'yes' : 'no';
export const getNumberRandom = () => Math.floor(Math.random() * 100);
export const getResultExpression = (question) => {
    const [number1, operator, number2] = question.split(' ');
    return calculateStringOperator(Number(number1), Number(number2), operator).toString();
}
export const getExpressionRandom = () => {
    const number1 = getNumberRandom();
    const number2 = getNumberRandom();
    const operators = ['+', '-', '*'];
    const operatorRandom = operators[Math.floor(Math.random() * operators.length)];
    return `${number1} ${operatorRandom} ${number2}`;
}
const calculateStringOperator = (a, b, operator) => {
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
    }
}
