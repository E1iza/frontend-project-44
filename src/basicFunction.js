import readlineSync, {question} from 'readline-sync';
import getGreeting from "./cli.js";

const getRound = (gameFunction, isAnswerRight) => {
    const question = gameFunction();
    let resultRound;
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ').trim().toLowerCase();
    const correctAnswer = isAnswerRight(question)
    if (correctAnswer === answer) {
        resultRound = 'Correct!';
    } else resultRound = `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`;
    return [resultRound, resultRound === 'Correct!'];
};

export const playGame = (messageRules, gameFunction, isAnswerRight) => {
    const name = getGreeting();
    console.log(messageRules);
    for (let i = 0; i < 3; i += 1) {
        const [message, resultRound] = getRound(gameFunction, isAnswerRight);
        console.log(message);
        if (!resultRound) {
            console.log(`Let's try again, ${name}!`);
            return;
        }
    }
    console.log(`Congratulations, ${name}!`);
}
