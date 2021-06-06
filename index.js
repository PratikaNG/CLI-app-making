
var readlineSync = require('readline-sync');
 var score = 0;

function user(question,answer){
 var userAnswer = readlineSync.question(question);
 if(userAnswer === answer){
   console.log("right");
   score = score+1;
   
   
 }else{
   console.log("wrong");
   score= score -1;
  
 }
 console.log("current score :",score);
 console.log("-----------");
};
var questions = [{question:"Where do i live?",
  answer:"mysore"},
  {
  question:"What do i like?",
  answer:"peace"}
];
for( var i = 0;i <=questions.length;i++){
  var currentQuestion=questions[i];
  user(currentQuestion.question,currentQuestion.answer);
}