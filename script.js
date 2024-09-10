let userscore=0;
let compscore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#movepicker");
const choicebycom=()=>{
    const options=["rock","paper","scissors"];
    const idx=Math.floor(Math.random()*3);
    return options[idx];
};
const drawgame=()=>{
  msg.innerText=`Match was Draw.Try again`;
  msg.style.backgroundColor = "#081b31";
};
const checkwin=(userwin,userchoice,compchoice)=>{
if(userwin){
    msg.innerText=`You Won! Your ${userchoice} beats ${compchoice}`; 
    msg.style.backgroundColor="green";
}
else{
   msg.innerText=`You Lose ${compchoice} beats your ${compchoice}`;
   msg.style.backgroundColor="red";
}
};
const playgame=(userchoice)=>{
      console.log(`User's choice: ${userchoice}`);
      const compchoice=choicebycom();
      console.log(`Comp's choice: ${choicebycom()}`);
      if(userchoice===compchoice){
        drawgame();
      }
      else{
        let userwin=true;
        if(userchoice==="rock"){
        userwin=compchoice==="paper"?false:true; 
        }
        else if(userchoice==="paper"){
        userwin=compchoice==="scissors"?false:true;  
        }
        else{
            userwin=compchoice==="rock"?false:true;
        }
        checkwin(userwin,userchoice,compchoice);
      }
};
choices.forEach((choice)=>{ 
  choice.addEventListener("click",()=>{
     const userchoice=choice.getAttribute("id");
      playgame(userchoice);
    });
});