import readlineSync from 'readline-sync';

export default function playGame(messageRules, generateGame, countRound = 3) {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${userName}!`);
  console.log(messageRules);
  for (let i = 0; i < countRound; i += 1) {
    const [question, correctAnswer] = generateGame();
    let resultRound;
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ').trim().toLowerCase();
    if (correctAnswer.toString() === answer) {
      resultRound = 'Correct!';
    } else resultRound = `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`;
    console.log(resultRound);
    if (resultRound !== 'Correct!') {
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
}
