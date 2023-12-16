export const isEven = (question) => question % 2 === 0 ? 'yes' : 'no';
export const getNumberRandom = () => Math.floor(Math.random() * 100);
export const getResultExpression = (question) => {
    const [number1, operator, number2] = question.split(' ');
    return calculateStringOperator(Number(number1), Number(number2), operator);
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
export const getTwoNumber = () => {
    const number1 = getNumberRandom() + 1;
    const number2 = getNumberRandom() + 1;
    return `${number1} ${number2}`;
}

export const getGcd = (question) => {
    let [a, b] = question.split(' ');
    a = Number(a);
    b = Number(b);
    let max = Math.max(a, b);
    let min = Math.min(a, b);
    while (max % min) {
        const temp = min;
        min = max % min;
        max = temp;
    }
    return min;
}
