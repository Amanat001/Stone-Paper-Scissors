let choices= document.querySelectorAll(".choice")
let message= document.querySelector("#msg")

let userScore= document.querySelector("#user-score")
let compScore= document.querySelector("#comp-score")

let userCount=0;
let CompCount=0;

const draw=()=>{
    message.innerText= "Match Draw";
    message.style.backgroundColor= "#081b31";
}

const showWinner=(userWin)=>{
    if(userWin)
    {
        message.innerText= "You Won" 
        userCount++;
        message.style.backgroundColor="green"
    }
    else
    {
        message.innerText= "You Lose"
        CompCount++;
        message.style.backgroundColor="red"
    }
}

const generateChoice=()=>{
    const Options= ["rock", "paper", "scissors"];
    const randidx= Math.floor(Math.random()* 3);
    return Options[randidx];
}


const PlayGame=(UserChoice)=>{
    const userChoice=UserChoice;
    const CompChoice= generateChoice();
    console.log("Your Choice:", userChoice)
    console.log("Computer Choice:", CompChoice)
    let userWin= true;
    if(userChoice === CompChoice)
    {
        console.log("Going to Call Draw")
        draw();
    }
    else
    {
        if(userChoice == "rock")
        {
            userWin= CompChoice == "paper"? false : true
        }
        else if(userChoice == "paper")
        {
            userWin= CompChoice == "scissors"? false : true
        }
        else if(userChoice == "scissors")
        {
            userWin= CompChoice == "rock"? false : true
        }
        showWinner(userWin);
    }
};


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const UserChoice= choice.getAttribute("id")
        PlayGame(UserChoice);
        userScore.innerText=userCount;
        compScore.innerText=CompCount;
    })
});