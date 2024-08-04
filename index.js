// note: all of the variables are global variables
var die1, die2, dieSum, balance, banner, outcome, die1Name, die2Name, numRolls, award, rollhistory=""; // define variables
balance = 0;  // initial value
var die1Image = new Image();
var die2Image = new Image();
var awards = [
  "The Winner of the Best Mobile App Design Award",
  "The Winner of the Innovative User Experience Award",
  "The Winner of the Creative Design Excellence Award",
  "The Winner of the Top Developer of the Year Award",
  "The Winner of the Outstanding Front-End Developer Award",
  "The Winner of the Coding Excellence Award",
  "The Winner of the Team Leadership Excellence Award",
  "The Winner of the Project Management Award",
  "The Winner of the Mentorship Award",
  "The Winner of the Tech Innovator Award",
  "The Winner of the Impactful Technology Award",
  "The Winner of the Sustainable Design Award"
];

function BalanceCount() {
  // Return the current balance
  return balance;
}

function rollDice() {
    die1 = Math.floor(Math.random() * 6) + 1;
    die2 = Math.floor(Math.random() * 6) + 1;
    dieSum = die1 + die2;

    // set the dice images based on the roll
    die1Image = document.querySelectorAll("img")[15];
    die1Name = "images/dice" + die1 + ".png";
    die1Image.setAttribute("src", die1Name);

    die2Image = document.querySelectorAll("img")[16];
    die2Name = "images/dice" + die2 + ".png";
    die2Image.setAttribute("src", die2Name);

    award = awards[dieSum%15];
}

function whoWon() {
    // in h3 report how much money was won or lost and the balance
    if (dieSum <= 5){
      outcome = "You lose! Remember, you are facing " + award;
      balance -= 5;
    } else if (dieSum >= 9){
      outcome = "You win! Be Proud! You win " + award;
      balance += 5;
    } else {
      outcome = "Draw!";
    }

    // Report the outcome:
    banner = outcome +"</br>";
    rollhistory = rollhistory + banner;
    document.querySelector("h4").innerHTML = rollhistory;
}

function letsPlay(){
  rollDice();
  whoWon();
}

function Start(){
numRolls = parseInt(document.getElementById('numRolls').value);
for (var i = 0; i < numRolls; i++) {
    letsPlay();
  }

}
