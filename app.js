//TARGET ELEMENTS 
let displayScreen=document.querySelector("h1");
let runningDisplay=document.querySelector(".calcBody p");
let subBtn=getElementById("subtract");
let multBtn=getElementById("multiply");
let divBtn=getElementById("divide");

//TARGET USER INPUT
let userInput; 
let firstNum;
let secondNum;




//DISPLAY NUMBER BUTTON VALUES TO PAGE WHEN CLICKED
let numButtons=document.querySelectorAll(".num");
numButtons.forEach(input =>{
    input.addEventListener("click", function() {
        userInput=displayScreen.innerHTML+=input.value;
    })
})

//REMOVE LAST NUMBER ENTERED BY USER ON CLICK OF DELETE BUTTON
let deletedNum=document.getElementById("backButton");
deletedNum.addEventListener("click", ()=>{
    let alterInput= userInput.split("");
    alterInput.pop(); 
    userInput= alterInput.join("");
    toMain(userInput);
})

//SAVE USER INPUT ONCE OPERATION BUTTON IS CLICKED
let operationButtons=document.querySelectorAll(".operation");
operationButtons.forEach(input =>{
    input.addEventListener("click", function(){
        firstNum=parseFloat(userInput);
        console.log(firstNum)
        toRunning(firstNum + " " + input.value)
        toMain("")
        
        
    })
})






//ADD 
let addBtn=getElementById("add");







function toMain(display){
    displayScreen.innerHTML=display;
}

function toRunning(display){
    runningDisplay.innerHTML=display
}






//IF A BUTTON IS CLICKED DISPLAY TO THE SCREEN 


//CREATE FUNCTIONS TO PREFORM CALCULATIONS


