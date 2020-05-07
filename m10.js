
// Elements accessed
var button1=document.getElementById("counter1");
var playerOneScore=document.getElementById("score1");
var button2=document.getElementById("counter2");
var playerTwoScore=document.getElementById("score2");
var reset=document.getElementById("reset");
var winner=document.getElementById("winner");

// Score variables
var score1=0;
var score2=0;

// Setting up initial scores
playerOneScore.innerText = score1;
playerTwoScore.innerText = score2;

// Event listeners
button1.addEventListener("click",(() => {
    var limit=document.getElementById("limit").value;
    score1++;
    playerOneScore.textContent=score1;
    if(score1==limit||(score1>score2 && score1>limit)){
      playerOneScore.classList.add("green");
      button1.setAttribute("disabled","true");
      button2.setAttribute("disabled","true");
      printWinner();
    }
}));

button2.addEventListener("click",(() => {
    var limit=document.getElementById("limit").value;
    score2++;
    playerTwoScore.textContent=score2;
    if(score2==limit||(score2>score1 && score1>limit)){
       playerTwoScore.classList.add("green");
        button1.setAttribute("disabled","true");
        button2.setAttribute("disabled","true");
      }
    printWinner();
}));

reset.addEventListener("click",(() => {
    button1.removeAttribute("disabled","true");
    button2.removeAttribute("disabled","true");
    playerOneScore.classList.remove("green");
    playerTwoScore.classList.remove("green");
    score1,score2=0;
    playerOneScore.textContent=score1;
    playerTwoScore.textContent=score2;
    document.getElementById("limit").value=5;
    winner.textContent="";
}));

// Printing the winner
function printWinner(){
    winner.textContent = (score1 > score2) ? "Player1" : "Player2";
}
    
    
    
    
    
    
    
    
    
    
    
    
    
    
