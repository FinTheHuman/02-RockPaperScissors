$(document).ready(function(){
  var userChoice = prompt("Do you choose rock, paper or scissors?");
  var computerChoice = Math.random();



if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} console.log("Computer: " + computerChoice);
var compare = function(choice1,choice2) {
    if(userChoice === computerChoice) {
        return "The result is a tie!";
    };
    if(choice2 === "scissors") {
    return "scissors wins";
      $('body').append("scissors wins");
}
else {
    return "paper wins";
  $('body').append("paper wins");
}
if(choice2 === "scissors") {
    return "rock wins";
  $('body').append("rock wins");
}
else {
    return "scissors wins";
  $("body").append("scissors wins");
}
};
});