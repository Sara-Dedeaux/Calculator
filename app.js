//TARGET ELEMENTS TO DISPLAY TO PAGE
let displayScreen=document.querySelector("h1");
let runningDisplay=document.querySelector(".calcBody p");

//TARGET USER INPUT
let userInput; 
let firstNum;
let secondNum;

//CALCULATIONS VARIABLES
let total;

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
    input.addEventListener("click", ()=>{
    firstNum=parseFloat(userInput);
        runningDisplay.innerHTML=(firstNum+ " " + input.value +" ")
        toMain("");

    })
})

//EVALUATE OPERATIONS SELECTED 
let subBtn=document.getElementById("subtract");
let shouldSub=false;
subBtn.addEventListener("click", ()=>{
    shouldSub=true;
})
let multBtn=document.getElementById("multiply");
let shouldMult=false;
multBtn.addEventListener("click", ()=>{
    shouldMult=true;
})
let divBtn=document.getElementById("divide");
let shouldDiv=false;
divBtn.addEventListener("click", ()=>{
    shouldDiv=true;
})
let addBtn=document.getElementById("add");
let shouldAdd=false;
addBtn.addEventListener("click", ()=>{
    shouldAdd=true;
})

//SAVE USER INPUT ONCE = SIGN IS CLICKED AND RUN CALCULATIONS
let equalsBtn=document.getElementById("equals")
equalsBtn.addEventListener("click", ()=>{
    secondNum=parseFloat(userInput);
    runningDisplay.innerHTML+=(secondNum+ " " + equalsBtn.value)
    toMain("");

   switch (true) {
    case shouldAdd:
        total=firstNum+secondNum;
        break;
    case shouldDiv:
        total=firstNum / secondNum;  
        break;
    case shouldMult :
        total=firstNum * secondNum;  
        break;
    case shouldSub :
        total=firstNum  - secondNum;  
        break;
    default:
        alert("Error")
        break;
    }
    toMain(total); 
    runningDisplay.innerHTML+=(" " + total)
    resetBools();

    //CREATE AN OBJECT TO STORE THE DATA TO USE IN FUTURE OPERATIONS
});


function resetBools(){
    shouldAdd=false;
    shouldDiv=false;
    shouldMult=false;
    shouldSub=false;
}

function toMain(display){
    displayScreen.innerHTML=display;
}

//CLEAR ENTRY BUTTON

//CLEAR ALL BUTTON

//GRAND TOTAL BUTTON



//EXTRA FEATURES GOAL:
//CAPTURE AS MANY NUMBERS AS USER WOULD LIKE TO ADD
//PROGRAM ORDER OF OPERATIONS INTO CALCULATOR




