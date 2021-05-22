var readlineSync = require('readline-sync');
const chalk = require('chalk');

let score = 0;

let questions = [
  {
    question:'Where do I live?',
    answer:'Ahmedabad'
  },
  {
    question:'What do I do',
    answer:'Coding'
  },
  {
    question:'Which technology I work on?',
    answer:'Salesforce'
  },
  {
    question:'Where do I work?',
    answer:'OIT'
  },
  {
    question:'What I do in my leisure time?',
    answer:'Watch Football'
  }
];

console.log(chalk.yellowBright('Do you know Rahul? '));
console.log(chalk.yellowBright('Let\'s check with this small quiz'));
console.log();

function playQuiz(question,ans){
  let userAns = readlineSync.question(chalk.white.bgBlue.bold(question+' '));

  if(userAns.toUpperCase() == ans.toUpperCase()){
    console.log(chalk.green('That is correct! '));
    score++;
  } else {
    console.log(chalk.red('That is wrong! '));
    score--;
  }

  console.log(chalk.hex('#DEADED').bold('Your score is : '+score));
  console.log();
}

questions.forEach(function(eachItem){
  playQuiz(eachItem.question, eachItem.answer);
})
