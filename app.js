var counter = 0;
var user = prompt("What is your name?");
 alert("Hi there "+ user + " Imma axe you a question!!!");
  console.log("the user's name is " + user);
  function questionOne(){
    var answer1 = prompt(user + " These are yes/no questions about Kyle Aubin, so please answer with Y or N. Does Kyle like cats?");
    if(answer1.toLowerCase() === "y" || answer1.toLowerCase() === "yes") {
      alert("You're right!!!"); counter +=1;
    } else {
      alert("You lose :( " + "Kyle like cats.");
    }
    console.log(answer1);
  }
  function questionTwo(){
    var answer2 = prompt(user + " does Kyle enjoy learning?");
    if(answer2.toLowerCase() === "y" || answer2.toLowerCase() === "yes"){
      alert("YAYYY you're right Kyle enjoy learning!!"); counter +=1;
    } else {
      alert("Awwwh! WRONG!!!");
    }
    console.log(answer2);
  }
  function questionThree(){
    var answer3 = prompt(user + " are Kyles eyes blue? ");
    if(answer3.toLowerCase() === "y" || answer3.toLowerCase() === "yes") {
      alert(user + " you are  correct!"); counter +=1;
    } else {
      alert("sorry "+ user + " , Kyles eyes are blue.");
    }
    console.log(answer3);
  }
  function questionFour(){
    do {var bonus = prompt(user + " I'm thinking of a number between 1-10. Can you guess what it is?");
    if (bonus == "6") {
      alert("Wow!!!! you're right!!!"); counter +=1;
    } else if(bonus < 6) {
      alert(bonus + " is too low!!");
    } else { alert(bonus + " is too high!!");}}
    while (bonus != 6);
    alert("GOOD JOB!!! "+ user + " you got "+ counter +"/4 correct" );
  }

  questionOne();
  questionTwo();
  questionThree();
  questionFour();
