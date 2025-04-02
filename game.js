let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
let userscore=document.querySelector("#user-score");
let compscore=document.querySelector("#comp-score");

const getcompChoice=(()=>{
    // rock paper sciissor
    const options=["rock","paper","scissor"];
    const ranIdx= Math.floor(Math.random()*3);
    return options[ranIdx];   
});

const drawGame=()=>{
   console.log("Game was draw.");
   msg.innerText="Game was draw!";
  msg.style.backgroundColor="rgb(30, 88, 90)";
}

const showWinner=(userWin,userChoice,compChoice)=>{
     if(userWin){
       // console.log("Congrates,You win!");
        msg.innerText=`Congrates,You win.Your ${userChoice} beats ${compChoice}`;
        userscore.innerText= `${userScore++}`;
        msg.style.backgroundColor="green";

     }else{
        console.log("OOps,You Loose!");
        msg.innerText=`OOps,You Loose! ${compChoice} beats your ${userChoice}`;
        compscore.innerText= `${compScore++}`;
        msg.style.backgroundColor="rgb(150, 9, 9)";
     }
}

const playGame=(userChoice)=>{
     console.log("user-choice",userChoice);
     const compChoice=getcompChoice();
     console.log("compChoice:" ,compChoice);

     if(userChoice==compChoice){
         drawGame()
     }else{
        let userWin=true;
        if(userChoice==="rock"){
            //scissor //paper
            userWin= compChoice==="paper" ? false : true;
        }else if( userChoice==="paper"){
            //rock //scissor
            userWin= compChoice==="scissor" ? false : true;
        }else{
            //rock // paper
            userWin= compChoice==="rock" ? false : true;
        }

        showWinner(userWin,userChoice,compChoice);
     }
};


choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        console.log("choice was clicked:",userChoice);
        playGame(userChoice);
    });
});







