
let randomNumber=Math.floor(Math.random()*100)+1;
let attempts=0;
let score=10;
const button= document.getElementById("guessBtn");

let input=document.getElementById("guessInput");

let output=document.getElementById("output-msg");

let scoreDisplay=document.getElementById("score");

let attemptDisplay=document.getElementById("attempts");

const restartBtn=document.getElementById("restartBtn")

 let mode=document.querySelector(".mode")

// mode








// mode

button.addEventListener("click",()=>{

const userGuess=Number(input.value);
attempts++;

if(!userGuess||userGuess<1||userGuess>100){
    output.textContent=`🚫 please enter a valid number(1-100).`;
    return;
}

if (userGuess===randomNumber){
    output.textContent=`🎉 correct! you guessed it in ${attempts}attempts`;
    button.disabled=true
    input.disabled=true
}

else if(userGuess>randomNumber){
    output.textContent="📉 Too high! try again";
    score--;
}

else{
    output.textContent="📈 Too low! try again";
    score--;
}


scoreDisplay.textContent=score>=0?score:0;
attemptDisplay.textContent=attempts



if(score<=0){
    output.textContent="💀 Game over! you run out of score"

    button.disabled=true;
    input.disabled=true;
}





input.value="";
input.focus();


})


// for restart

restartBtn.addEventListener("click",()=>{


randomNumber=Math.floor(Math.random()*100)+1;
attempts=0;
score=10;

output.textContent="lets start guessing!";
scoreDisplay.textContent=score;
attemptDisplay.textContent=attempts
input.value="";
input.disabled=false
button.disabled=false

input.focus();


})




let isdark=false
mode.addEventListener("click",()=>{


   if(isdark===false){
document.body.style.backgroundColor="black"
mode.textContent="Light mode 🌞"
mode.style.backgroundColor="white"
mode.style.color="black"

isdark=true

}

else{
    mode.textContent="Dark mode 🌙"
    mode.style.color="white"


    document.body.style.backgroundColor="white"
    mode.style.backgroundColor="black"


    isdark=false

}


})