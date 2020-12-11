// assignment for levelOne
// QUIZ: How well do you know the Marvel movies? 

var chalk = require('chalk');
var readlineSync = require('readline-sync');
var score = 0;

var userName = readlineSync.question("enter your name please : ")
console.log(chalk.green("hey welcome " + userName))
console.log("--------------------------------")

function marvel(question, answer){
  var userAnswer = readlineSync.question(question)

  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log(chalk.green("yeeh ! Right"))
    console.log(chalk.yellowBright("Correct Answer : ", answer))
    score = score+1;
  }
  else{
    console.log(chalk.red("WRONG"))
    console.log(chalk.yellowBright("Correct Answer : ", answer))
  }
  console.log("your score is : ", score)
  console.log("--------------------------------")
}

// highScorer data
var highScore = [
  {
    name : "one",
    score : 4,
  },
  {
    name : "two",
    score : 3
  },
  {
    name : "three",
    score : 2
  },
]

// array of object
var marvelObjArray = [ {
    question : "What is Tony Stark’s final line in the first Iron Man : ",
    answer : "I am iron man"
  },{
    question : "which fictional country is Black Panther set? : ",
    answer : "wakanda"
  },{
    question : "Which Avenger does Thor team up with in Thor: Ragnarok? : ",
    answer : "hulk"
  },{
    question: "What is Ant Man’s real name? : ",
    answer : "scott Lang"
  }, {
    question :  "Who is Black Panther’s sister? : ",
    answer : "shuri"
  },{
    question : "Who is killed by Loki in Avengers Assemble? : ",
    answer :  "Agent coulson"
  }
]

// ACCESSING THE ARRAY OF OBJECT
for(var i = 0 ;i < marvelObjArray.length ;i++){
  console.log("Question No. : ", i+1)
  var currentObject =  marvelObjArray[i];
  marvel(currentObject.question ,  currentObject.answer)
}

// beaten the highScore or not
for(var i =0 ; i<highScore.length ; i++){
  var current = highScore[i];
  if(current.score < score){
    console.log(chalk.red("hey! you have beaten the " + (i+1)+ "HighScore"));
  }
}

console.log(chalk.bold.green("Your final score is : ", score))