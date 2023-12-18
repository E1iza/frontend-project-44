import readlineSync from 'readline-sync';
import getGreeting from './cli.js';

export const getRound = (gameFunction) => {
  const [quest, correctAnswer] = gameFunction();
  let resultRound;
  console.log(`Question: ${quest}`);
  const answer = readlineSync.question('Your answer: ').trim().toLowerCase();
  if (correctAnswer.toString() === answer) {
    resultRound = 'Correct!';
  } else resultRound = `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`;
  return [resultRound, resultRound === 'Correct!'];
};

export const playGame = (messageRules, gameFunction, countRound = 3) => {
  const name = getGreeting();
  console.log(messageRules);
  for (let i = 0; i < countRound; i += 1) {
    const [message, resultRound] = getRound(gameFunction);
    console.log(message);
    if (!resultRound) {
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
