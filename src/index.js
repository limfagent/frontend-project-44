import readlineSync from 'readline-sync'

export const runEvenGame = () => {
  console.log('Welcome to the Brain Games!')
  const name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}!`)
  console.log('Answer "yes" if the number is even, otherwise answer "no".')

  for (let i = 0; i < 3; i += 1) {
    const randomNumber = Math.floor(Math.random() * 100)
    console.log(`Question: ${randomNumber}`)
    const userAnswer = readlineSync.question('Your answer: ')

    const isEven = randomNumber % 2 === 0;
    const correctAnswer = isEven ? 'yes' : 'no'

    if (userAnswer === correctAnswer) {
      console.log('Correct!')
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${name}!`)
      return
    }
  }

  console.log(`Congratulations, ${name}!`)
}
