//TARGET ELEMENTS TO DISPLAY TO PAGE
let displayScreen=document.querySelector("h1");
let runningDisplay=document.querySelector(".calcBody p");

//TARGET USER INPUT
let userInput; 
let capturedNum;
let numsEntered = [];
let totalsEntered= [];


//CALCULATIONS VARIABLES
let subTotal=0;
let total;
let expressionArr=[];
let firstNum;
let secondNum;

//DISPLAY NUMBER BUTTON VALUES TO PAGE WHEN CLICKED
let numButtons=document.querySelectorAll(".num");
numButtons.forEach(input =>{
    input.addEventListener("click", function() {
        userInput=displayScreen.innerHTML+=input.value;
    })
})

//CREATE FUNCTIONS 
function toMain(display){
    displayScreen.innerHTML=display;
}

function resetBools(){
    shouldAdd=false;
    shouldDiv=false;
    shouldMult=false;
    shouldSub=false;
}

function toRunning(display){
    runningDisplay.innerHTML+=(" " + display); 
}

//SAVE USER INPUT ONCE OPERATION BUTTON IS CLICKED
let operationButtons=document.querySelectorAll(".operation");
operationButtons.forEach(input =>{
    input.addEventListener("click", ()=>{
        capturedNum=(userInput);
        numsEntered.push(capturedNum);
        runningDisplay.innerHTML+=(capturedNum + " " + input.value +" ")
        capturedNum="";
        toMain("");
        
    })
})

//WHEN = IS CLICKED: 
let equalsBtn=document.getElementById("equals")
equalsBtn.addEventListener("click", calculations)

//EVALUATE OPERATIONS SELECTED 
let subBtn=document.getElementById("subtract");
let shouldSub=false;
subBtn.addEventListener("click", ()=>{
    shouldSub=true;
    numsEntered.push("-");
})
let multBtn=document.getElementById("multiply");
let shouldMult=false;
multBtn.addEventListener("click", ()=>{
    shouldMult=true;
    numsEntered.push("*");

})
let divBtn=document.getElementById("divide");
let shouldDiv=false;
divBtn.addEventListener("click", ()=>{
    shouldDiv=true;
    numsEntered.push("/");

})
let addBtn=document.getElementById("add");
let shouldAdd=false;
addBtn.addEventListener("click", ()=>{
    shouldAdd=true;
    numsEntered.push("+");

    



})

function calculations(){
     capturedNum=userInput;
     numsEntered.push(capturedNum);
    numsEntered.push("=")
    let expression;
    let sumArr=[];
    console.log(numsEntered)

    runningDisplay.innerHTML+=(capturedNum + " = " )
    
  
    for (let i = 0; i < numsEntered.length; i++) {
        
        const element = numsEntered[i];
        
        if (element== "=") {
            
            expression= numsEntered[i-1]
            for (let j = i-2; j >= 0; j--) {
                 const element2= numsEntered[j]
                 expression+=element2;
                         
            }
            let reverseString= expression.split("");
            reverseString.reverse();
            expression=reverseString.join("");

            expressionArr.push(expression)
        }
        
        for (let i = 0; i < expressionArr.length; i++) {
            const element = expressionArr[i];
            console.log(element)
            let buffer=element.split("")
            
            for (let j = 0; j < buffer.length; j++) {
                const element = buffer[j];
                
                
                if (element=="+" || element== '-' || element=='*' || element=='/'){
                    secondNum=parseFloat(buffer[j+1]);
                    if (j<=1) {
                        firstNum=parseFloat(buffer[j-1]);
                    }else{
                        firstNum=subTotal;
                    }

                    if (element== "+") {
                        subTotal=firstNum+secondNum
                        console.log(subTotal)
                        

                    }else if (element == "-") {
                        subTotal=firstNum-secondNum
                    }else if (element == "*"){
                        subTotal= firstNum*secondNum
                    }else if (element== "/") {
                        subTotal=firstNum*secondNum
                    }//END INNER IF/ELSE
                    
                }//END OUTTER IF

               
                toMain(subTotal)
            }//END INNER FOR LOOP
            
            runningDisplay.innerHTML+=(subTotal+" ")
            

        }//END MIDDLE FOR LOOP
    }//END OUTTER FOR LOOP

    console.log(subTotal)

}//END FUNCTION

//CLEAR ALL BUTTON
let clearBtn=document.getElementById("clearAll");
clearBtn.addEventListener("click", ()=>{
    capturedNum="";
    numsEntered=[];
    expressionArr=[];
    runningDisplay.innerHTML="";
    userInput="";
    toMain(userInput);
})

//REMOVE LAST NUMBER ENTERED BY USER ON CLICK OF DELETE BUTTON
let deletedNum=document.getElementById("backButton");
deletedNum.addEventListener("click", ()=>{
    let alterInput= userInput.split("");
    alterInput.pop(); 
    userInput= alterInput.join("");
    toMain(userInput);
})

//CLEAR ENTRY BUTTON
//TARGRET BUTTON FOR CLICK EVENT TO DELETE THE CURRENT ENTRY
let ceBtn=document.getElementById("clearEntry");
ceBtn.addEventListener("click", ()=>{
userInput="";
toMain(userInput);
})


    
   //fill an array with numbers, operators, and = sign. 
   //pattern should inlcude: number operator number operator
   //numArray[1] operator[1] numArray[2] operator[2]... .this should continue 
   // or array [1] number [2] operation [3] number [4] operation  
   //so when looped and = is found - loop backward through array

   //1+3=
   //expression= splice array if + is found arr[]


    