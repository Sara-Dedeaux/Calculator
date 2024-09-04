//#region GLOBAL VARIABLES
//TARGET USER INPUT
let userInput; 
let capturedNum;
let numsEntered = [];

//CALCULATIONS VARIABLES
let subTotal=0;
let total=0;
let firstNum;
let secondNum;
//#endregion

//#region PAGE DISPLAY
//TARGET ELEMENTS TO DISPLAY TO PAGE
let displayScreen=document.querySelector("h1");
let runningDisplay=document.querySelector(".calcBody p");

//FUNCTIONS TO DISPLAY TO PAGE
function toMain(display){
    displayScreen.innerHTML=display;
}
function toRunning(display){
    runningDisplay.innerHTML+=display;
}
//#endregion


//#region CLICK EVENTS

//CLICK EVENT TO ADDED TO NUMBERS BUTTONS TO SET USER INPUT WHEN TRIGGERED
let numButtons=document.querySelectorAll(".num");
numButtons.forEach(input =>{
    input.addEventListener("click", function() {
        userInput=displayScreen.innerHTML+=input.value;
    })
})

//CLICK EVENT ADDED TO OPERATION BUTTONS TO SET USER INPUT WHEN TRIGGERED
let operationButtons=document.querySelectorAll(".operation");
operationButtons.forEach(input =>{
    input.addEventListener("click", ()=>{
        capturedNum=(userInput);
        numsEntered.push(capturedNum);
        toRunning(capturedNum + " " + input.value +" ")
        capturedNum="";
        toMain("");
        numsEntered.push(input.value);
    })
})

//MOUSE OVER / MOUSE LEAVE EVENTS ADDED TO ALL BUTTONS TO CHANGE BUTTON COLOR WHEN TRIGGERED
let allBtn=document.querySelectorAll("input");
allBtn.forEach(input =>{
    input.addEventListener("mouseover", ()=>{
        input.style.backgroundColor="#ADD8E6";
    })

    input.addEventListener("mouseleave", ()=>{
        input.style.backgroundColor="#070313";
    })

})


//CLICK EVENT ADDED TO +/- BUTTON TO CHANGE NUMBER SELECTED OPPOSITE SIGN
let negNumBtn=document.getElementById("negative");
negNumBtn.addEventListener("click", ()=>{
          capturedNum=(parseFloat(userInput)*-1);
     userInput=capturedNum
  
    toMain(userInput);
   
})

//CLICK EVENT ADDED TO RUN CALCULATIONS WHEN EQUAL SIGN IS CLICKED -(CALLS CALCULATIONS FUNCTION)
let equalsBtn=document.getElementById("equals");
equalsBtn.addEventListener("click", calculations);

//CLICK EVENT FOR GRAND TOTAL BUTTON ADDS TOGETHER ALL SOLUTIONS TO CALCULATIONS
let gtBtn=document.getElementById("grandTotal");
gtBtn.addEventListener("click", ()=>{
    runningDisplay.innerHTML="";
    numsEntered.forEach(element => {
        if (element != "="){
            total+=element;
            toRunning("+" + element + ";  ");
        }
    });

    toRunning("=")
    toMain(total);
    setTimeout(() => { toMain(""); toRunning(total)}, 1000);
})

//CLICK EVENT FOR CLEAR ALL BUTTON RESETS VARIABLES TO CLEAR ALL DATA 
let clearBtn=document.getElementById("clearAll");
clearBtn.addEventListener("click", ()=>{
  
    runningDisplay.innerHTML="";
    capturedNum=null;
    userInput="";
    numsEntered=[];
    total=0;
})

//CLICK EVENT FOR DEL REMOVE LAST NUMBER ENTERED BY USER
let deletedNum=document.getElementById("backButton");
deletedNum.addEventListener("click", ()=>{
    let alterInput= userInput.split("");
    alterInput.pop(); 
    userInput= alterInput.join("");
    toMain(userInput);
})

//CLICK EVENT CE DELETE THE CURRENT ENTRY
let ceBtn=document.getElementById("clearEntry");
ceBtn.addEventListener("click", ()=>{
    userInput="";
    toMain(userInput);
})


//#endregion

// CALCULATIONS CONTAINS ALL CODE REQUIRED TO SOLVE EQUATION ENTERED
function calculations(){

    //CAPUTRES LAST NUMBER ENTERED NEEDED TO BEGIN CALCULATIONS
    capturedNum=userInput;
    numsEntered.push(capturedNum);
    numsEntered.push("=")
    toRunning(capturedNum + " = " );

    //BOOLS DECLARED AND EQUATION EVALUATED IN PREPARATION FOR ORDER OF OPERATIONS
    let multFound=false;
    let divFound=false;
    let addFound=false;
    let subFound=false;
    numsEntered.forEach(element => {
        
        if (element== "*" || element=="x" || element=="X") {
            multFound=true;
        }else if (element=="/") {
            divFound=true;
        }else if (element=="+"){
            addFound=true;
        }else if (element== "-"){
            subFound=true;
        }
    });
    
    //IF STRUCTURED FOR ORDER OF OPERATIONS - ONCE OPERATION SIGN IS FOUND THE NUMBERS ARE SET AND CALCULATIONS RUN. THE ARRAY IS SPLICED TO REMOVE THE NUMBERS AND OPERATOR SIGN AND ADDS IN THE CALCULATION (SUBTOTAL) INTO THE ARRAY 
    if(multFound==true){
        for (let i = 0; i < numsEntered.length; i++) {
            const element = numsEntered[i];
            if(element=="*" || element=="x" || element=="X"){
                firstNum=parseFloat(numsEntered[i-1]);
                secondNum=parseFloat(numsEntered[i+1]);
                subTotal=firstNum*secondNum
                
                numsEntered.splice((i-1),3,subTotal);
            }
        }
    }
    if(divFound==true){
        for (let i = 0; i < numsEntered.length; i++) {
            const element = numsEntered[i];
            if(element=="/"){
                firstNum=parseFloat(numsEntered[i-1]);
                secondNum=parseFloat(numsEntered[i+1]);
                subTotal=firstNum/secondNum
                
                numsEntered.splice((i-1),3,subTotal);
            }
        }
    }
    if(addFound==true){
        for (let i = 0; i < numsEntered.length; i++) {
            const element = numsEntered[i];
            if(element=="+"){
                firstNum=parseFloat(numsEntered[i-1]);
                secondNum=parseFloat(numsEntered[i+1]);
                subTotal=firstNum+secondNum
                
                numsEntered.splice((i-1),3,subTotal);
            }
        }
    }
    if(subFound==true){
        for (let i = 0; i < numsEntered.length; i++) {
            const element = numsEntered[i];
            if(element=="-"){
                firstNum=parseFloat(numsEntered[i-1]);
                secondNum=parseFloat(numsEntered[i+1]);
                subTotal=firstNum-secondNum
                
                numsEntered.splice((i-1),3,subTotal);
            }
        }
    }

    //AFTER ALL CALCULATIONS HAVE RUN DISPLAY IS UPDATED
    toRunning(subTotal + ";  ")
    toMain(subTotal)
    setTimeout(() => {toMain(""); }, 1500); 

}//END FUNCTION

//KEY PRESS FUNCTIONALITY ADDED 
document.addEventListener('keydown', function(event) {
    switch (true) {
        case event.key=='.':
            userInput=displayScreen.innerHTML+=event.key;
            console.log(userInput)
        break;
        case event.key=='0':
            userInput=displayScreen.innerHTML+=event.key;
        break;
        case event.key=='1':
            userInput=displayScreen.innerHTML+=event.key;
        break;
        case event.key=='2':
            userInput=displayScreen.innerHTML+=event.key;
        break;
        case event.key=='3':
            userInput=displayScreen.innerHTML+=event.key;
        break;
        case event.key=='4':
            userInput=displayScreen.innerHTML+=event.key;
        break;
        case event.key=='5':
            userInput=displayScreen.innerHTML+=event.key;
        break;
        case event.key=='6':
            userInput=displayScreen.innerHTML+=event.key;
        break;
        case event.key=='7':
            userInput=displayScreen.innerHTML+=event.key;
        break;
        case event.key=='8':
            userInput=displayScreen.innerHTML+=event.key;
        break;
        case event.key=='9':
            userInput=displayScreen.innerHTML+=event.key;
        break;
        case event.key=='+':
            capturedNum=(userInput);
            numsEntered.push(capturedNum);
            toRunning(capturedNum + " " + event.key +" ")
            capturedNum="";
            toMain("");
            numsEntered.push(event.key)
        break;
        case event.key=='-':
            capturedNum=(userInput);
            numsEntered.push(capturedNum);
            toRunning(capturedNum+ " " + event.key +" ")
            capturedNum="";
            toMain("");
            numsEntered.push(event.key)
        break;
        case event.key=='*':
            capturedNum=(userInput);
            numsEntered.push(capturedNum);
            toRunning(capturedNum + " " + event.key +" ")
            capturedNum="";
            toMain("");
            numsEntered.push(event.key)
        break;
        case event.key=='/':
            capturedNum=(userInput);
            numsEntered.push(capturedNum);
            toRunning(capturedNum + " " + event.key +" ")
            capturedNum="";
            toMain("");
            numsEntered.push(event.key)
        break;
        case event.key=="Enter":
            event.preventDefault();
          calculations();
        break;
        case event.key== "=":
          calculations();
        break;
        case event.key=="Delete":
            firstNum="";
            secondNum="";
            runningDisplay.innerHTML="";
            numsEntered= [];
            userInput="";
            toMain(userInput);
        break;
        case event.key== "Backspace":
            let alterInput= userInput.split("");
            alterInput.pop(); 
            userInput= alterInput.join("");
            toMain(userInput);
        break;
        default:
        break
    }   
})