let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let newBtn=document.querySelector("#new");

turno=true;

const winpattern=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

boxes.forEach ((box) => {
    box.addEventListener("click",(e) => {
            if(turno){
                box.innerText="X";
                box.style.color="blue";
                turno=false;
            }else{
                box.innerText="O";
                box.style.color="red";
                turno=true;
            }
            box.disabled=true;
            checkWinner();
            });
});


const resetGame=()=>{
    turno=true;
    enabledBoxes();
    msgContainer.classList.add("hide");
}



const disabledBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enabledBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const drawGame=()=>{
    count=0;
    for(let box of boxes){
        if(box.innerText != ""){
            count++;
            if(count===9){
          msg.innerText=`!!!!!!oops! the game has no winner ...play again.....!!!!!!!!!!!!!!!!!!!!!!!! `;
          msgContainer.classList.remove("hide");
        }
    }
    }
}


const showWinner=(winner)=>{
    msg.innerText=`Congratulations! the winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
}

let checkWinner =()=>{
    for(let winner of winpattern){
        let pos1Val=boxes[winner[0]].innerText;
        let pos2Val=boxes[winner[1]].innerText;
        let pos3Val=boxes[winner[2]].innerText;
    
    if(pos1Val !="" && pos2Val != "" && pos3Val !="" ){
   if(pos1Val===pos2Val && pos2Val=== pos3Val){
    
    showWinner( pos1Val);
   }
   
}
drawGame();
}
}
newBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);