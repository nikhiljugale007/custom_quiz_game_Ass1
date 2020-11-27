var readLineSync = require('readline-sync')
const chalk = require('chalk');

var highestScore = {
  hs_score : 0 ,
  hs_name : 'admin',
}

while(1){
  
var userName = readLineSync.question(chalk.cyanBright('\n\nPlease enter your name...\n'));
console.log(chalk.yellow('\nWelcome '+userName+' to the quiz game on famous seconds in world \n\n'))

var localScore = 0 ;

var question0 = {
  q : 'Which was the second Harry Potter book?',
  op1 : 'a Philosophers Stone',
  op2 : 'b Prisoner of Azkaban',
  op3 : 'c Goblet of Fire',
  op4 : 'd Chamber of Secrets',
  ans : 'd',
}
var question1 = {
  q : 'Who is the second person to step on moon?',
  op1 : 'a Neil Armstrong',
  op2 : 'b Rakesh Sharma',
  op3 : 'c Buzz Aldrin',
  op4 : 'd Charles Conrad',
  ans : 'c',
}
var question2 = {
  q : 'Which is the second largest country in the world by area?',
  op1 : 'a USA',
  op2 : 'b Canada',
  op3 : 'c Russia',
  op4 : 'd China',
  ans : 'b',
}
var question3 = {
  q : 'Which is the second highest mountain in the world?',
  op1 : 'a K2',
  op2 : 'b Everest',
  op3 : 'c Kanchenjunga',
  op4 : 'd Alps',
  ans : 'a',
}
var question4 = {
  q : 'Which is the second largest planet in the solar system?',
  op1 : 'a Earth',
  op2 : 'b Mars',
  op3 : 'c Jupiter',
  op4 : 'd Saturn',
  ans : 'd',
}
var question5 = {
  q : 'Which is worlds second largest ocean ?',
  op1 : 'a Pacific Ocean',
  op2 : 'b Atlantic Ocean',
  op3 : 'c Indian Ocean',
  op4 : 'd Artic Ocean',
  ans : 'b',
}

var question6 = {
  q : 'Who is second president of India ?',
  op1 : 'a Sarvepalli Radhakrishnan',
  op2 : 'b Rajendra Prasad',
  op3 : 'c Zakir Hussain',
  op4 : 'd V. V. Giri',
  ans : 'a',
}

var questionArray = [question0,question1,question2,question3,question4,question5,question6 ];

function askQuestion(question){
  console.log(chalk.red(question.q + '\n'));
  console.log(chalk.green(question.op1));
  console.log(chalk.green(question.op2));
  console.log(chalk.green(question.op3));
  console.log(chalk.green(question.op4 + '\n'));
  console.log(chalk.yellow('Please enter correct option a,b,c,d   '));
  var userAnswer = readLineSync.question();
  if(userAnswer == question.ans){
    console.log('You are right! ');
    localScore = localScore + 1;
  }
  else{
    console.log('Sorry, You are wrong.. ');
  }
  console.log('Your score = '+localScore + '\n\n');
}


for( var i=0;i< questionArray.length ;i++){
    askQuestion(questionArray[i]);
}
console.clear();


console.log(chalk.red('\n\nYour total score is '+  chalk.bold.blue(localScore)));

if(localScore > highestScore.hs_score){
  console.log(chalk.keyword('orange')("Congrats ..! You have beaten the highestScore ."));
  highestScore.hs_score = localScore;
  highestScore.hs_name = userName;
}

console.log(chalk.keyword('magenta')('\nHighest Score in game is '+ highestScore.hs_score + ' scored by '+ highestScore.hs_name + '\n\n'));


var choice = readLineSync.question('Do you want to play again (y/n) '+'\n');
if(choice[0] == 'y'){
  continue;
}
else{
  console.log(chalk.keyword('violet')('\n\n Thanks for playing, please share with your friends, have fun !!!'));
  break;
}
  
}
