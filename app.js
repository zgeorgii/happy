var counter = 0;
var res1 = document.getElementById('result1');
var res2 = document.getElementById('result2');
var res3 = document.getElementById('result3');
var res4 = document.getElementById('result4');
var user = prompt("What is your name?");
  console.log("the user's name is " + user);

var questData = [
  ['"Hi there " + user + ". Imma axe you a question!!! These are yes/no questions about Kyle Aubin, so please answer with Y or N. Does Kyle like cats?"',
  "answer1.toLowerCase() === 'y'",
  "answer1.toLowerCase() === 'yes'",
  '"You answered: " + answer1 + ". You\'re right!!!","You answered: " + answer1 + ". You lose :( " + "Kyle likes cats."'
  ]
  [
    'user + " does Kyle enjoy learning?"',
    "answer2.toLowerCase() === 'y'",
    "answer2.toLowerCase() === 'yes'",
    '"You answered: " + answer2 + ". YAYYY youre right Kyle enjoys learning!!"',
    '"You answered: " + answer2 + ". Awwwh! WRONG!!!"'
  ]
  [
    ' user + ", Are Kyles eyes blue?"',
    "answer3.toLowerCase() === 'y'",
    "answer3.toLowerCase() === 'yes'",
    '"You answered: " + answer3 + ". " + user + " You are correct!"',
    '"You answered: " + answer3 + ". Sorry, " + user + " , Kyles eyes are blue."'
  ]
  [
    '+ user + ", I\'m thinking of a number between 1-10. Can you guess what it is?"',
    "6",
    '"You answered: " + bonus + ". Wow!!!! youre right!!! GOOD JOB!!! " + user + " you got " + counter +"/4 correct"',
    ' bonus + " is too low!!"',
    ' bonus + " is too high!!"'
  ]
]

function questions() {

  var answer1 = prompt(questData[i][0]);
  if(questData[i][1] || questData[i][2]) {
    res1.textContent = questData[i][3];
    counter +=1;
  } else {
    res1.textContent = questData[i][4];
  }
  console.log(answer1);

  var answer2 = prompt(questData[i][0]);
  if(questData[i][1] || questData[i][2]){
    res2.textContent = questData[i][3];
    counter +=1;
  } else {
    res2.textContent = questData[i][4];
  }
  console.log(answer2);

  var answer3 = prompt(questData[i][0]);
  if(questData[i][1] || questData[i][2]){
    res3.textContent = questData[i][3];
    counter +=1;
  } else {
    res3.textContent = questData[i][4];
  }
  console.log(answer3);

  do {
    var bonus = prompt(questData[i][0]);
    if (bonus == questData[i][1]) {
      counter +=1;
      res4.textContent = questData[i][2];
    } else if(bonus < questData[i][3]) {
      res4.textContent = questData[i][4];
    } else {res4.textContent = questData[i][5];}
  } while (bonus != 6);
}

for (var i = 0; i < questData.length; i++) {
questions(); }
