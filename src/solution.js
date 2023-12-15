import readlineSync from 'readline-sync';

const getNumberRandom = () => Math.floor(Math.random() * 100);
const getRound = () => {
  const number = getNumberRandom();
  let resultRound;
  let numberConvert;
  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ').trim().toLowerCase();
  if (number % 2 === 0) {
    numberConvert = 'yes';
  } else numberConvert = 'no';
  if (numberConvert === answer) {
    resultRound = 'Correct!';
  } else resultRound = `'${answer}' is wrong answer ;(. Correct answer was '${numberConvert}'.`;
  console.log(resultRound);
  return resultRound;
};

const isEvenGame = (name) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const result = getRound();
    if (result !== 'Correct!') {
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default isEvenGame;
