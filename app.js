var counter = 0;
var res1 = document.getElementById('result1');
var res2 = document.getElementById('result2');
var res3 = document.getElementById('result3');
var res4 = document.getElementById('result4');
var user = prompt("What is your name?");
  console.log("the user's name is " + user);
  function questionOne(){
    var answer1 = prompt("Hi there "+ user + ". Imma axe you a question!!! These are yes/no questions about Kyle Aubin, so please answer with Y or N. Does Kyle like cats?");
    if(answer1.toLowerCase() === "y" || answer1.toLowerCase() === "yes") {
      res1.textContent = 'You answered: ' + answer1 + ". You're right!!!";
      counter +=1;
    } else {
      res1.textContent = 'You answered: ' + answer1 + ". You lose :( " + "Kyle likes cats.";
    }
    console.log(answer1);
  }
  function questionTwo(){
    var answer2 = prompt(user + " does Kyle enjoy learning?");
    if(answer2.toLowerCase() === "y" || answer2.toLowerCase() === "yes"){
      res2.textContent = 'You answered: ' + answer2 + ". YAYYY you're right Kyle enjoys learning!!";
      counter +=1;
    } else {
      res2.textContent = 'You answered: ' + answer2 + ". Awwwh! WRONG!!!";
    }
    console.log(answer2);
  }
  function questionThree(){
    var answer3 = prompt(user + ", Are Kyles eyes blue? ");
    if(answer3.toLowerCase() === "y" || answer3.toLowerCase() === "yes"){
      res3.textContent = 'You answered: ' + answer3 + '. ' + user + " You are  correct!";
      counter +=1;
    } else {
      res3.textContent = 'You answered: ' + answer3 + ". Sorry, " + user + " , Kyle's eyes are blue.";
    }
    console.log(answer3);
  }
  function questionFour(){
    do {
      var bonus = prompt(user + ", I'm thinking of a number between 1-10. Can you guess what it is?");
      if (bonus == "6") {
        counter +=1;
        res4.textContent = 'You answered: ' + bonus + ". Wow!!!! you're right!!! GOOD JOB!!! " + user + " you got " + counter +"/4 correct";
      } else if(bonus < 6) {
        res4.textContent = bonus + " is too low!!";
      } else {res4.textContent = bonus + " is too high!!";}
    } while (bonus != 6);
  }


  questionOne();
  questionTwo();
  questionThree();
  questionFour();
