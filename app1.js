//TARGET ELEMENTS TO DISPLAY TO PAGE
let displayScreen=document.querySelector("h1");
let runningDisplay=document.querySelector(".calcBody p");
function toMain(display){
    displayScreen.innerHTML=display;
}
function toRunning(display){
    runningDisplay.innerHTML+=display;
}

//TARGET USER INPUT
let userInput; 
let capturedNum;
let numsEntered = [];
let totalsEntered= []; //NOT YET USED

//CALCULATIONS VARIABLES
let subTotal=0;
let total=0;
let firstNum;
let secondNum;

//TARGETS NUMBER BUTTONS FOR CLICK EVENT TO SET USER INPUT
let numButtons=document.querySelectorAll(".num");
numButtons.forEach(input =>{
    input.addEventListener("click", function() {
        userInput=displayScreen.innerHTML+=input.value;
    })
})

//SAVE USER INPUT ONCE OPERATION BUTTON IS CLICKED
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

//WHEN = IS CLICKED: 
let equalsBtn=document.getElementById("equals");
equalsBtn.addEventListener("click", calculations);

function calculations(){
    //CAPUTRES LAST NUMBER ENTERED NEEDED TO BEGIN CALCULATIONS
    capturedNum=userInput;
    numsEntered.push(capturedNum);
    numsEntered.push("=")
    toRunning(capturedNum + " = " );
    
   //LOOP THROUGH ALL NUMS ENTERED AND IF MULTIPLE EXPRESSIONS HAVE BEEN ENTERED - THEY CAN BE EVAULATED SEPARATELY 
    for (let i = 0; i < numsEntered.length; i++) {
        const element = numsEntered[i];
        
        //IF AN EQUAL SIGN IS FOUND IT IS KNOWN THAT THE EXPRESSION IS COMPLETED AND CAN USE i INDEX TO KNOW HOW MANY ELEMENTS EXIST IN EXPRESSION TO BE EVALUATED
        if (element== "=") {
            for (let j = 0; j<i; j++) {
                //IF AN OPERATOR IS FOUND WE KNOW THE NEXT ELEMENT IS THE SECOND NUMBER IN THE EXPRESSION
                if (numsEntered[j]=="+" ||(numsEntered[j])== '-' ||(numsEntered[j])=='*' ||(numsEntered[j])=='/'){
                    secondNum=parseFloat(numsEntered[j+1]);

                    //IF j IS LESS THAN OR = TO 1 THEN WE KNOW IT IS THE FIRST NUMBER IN THE EXPRESSION- THE CURRENT INDEX IS AT THE OPERATION SIGN SO WE LOOK ONE SPACE BEHIND IT
                    if (j<=1) {
                        firstNum=parseFloat(numsEntered[j-1]);
                    //ELSE A NUMBER HAS BEEN ADDED BEFORE SO THE FIRST NUM IS SET AS THE SUBTOTAL
                    }else{
                        firstNum=subTotal;
                    }
                    //ONCE VARIABLES TO CALCULATE HAVE BEEN SET CALCULATIONS HAPPEN BASED ON OPERATION SIGN
                    if (numsEntered[j]== "+") {
                        subTotal=firstNum+secondNum
                    }else if (numsEntered[j] == "-") {
                        subTotal=firstNum-secondNum
                    }else if (numsEntered[j] == "*"){
                        subTotal= firstNum*secondNum
                    }else if (numsEntered[j]== "/") {
                        subTotal=firstNum/secondNum
                    } 
                }
            }
        }
    }//END OUTTER FOR LOOP
    toRunning(subTotal + " ")
    toMain(subTotal)
    totalsEntered.push(subTotal);
    console.log(totalsEntered);
}//END FUNCTION


   

//GRAND TOTAL BUTTON
let gtBtn=document.getElementById("grandTotal");
gtBtn.addEventListener("click", ()=>{
    runningDisplay.innerHTML="";
    totalsEntered.forEach(element => {
        total+=element;
        toRunning("+" + element + " ");
        
    });

    toMain(total);
})
    



//CLEAR ALL BUTTON
let clearBtn=document.getElementById("clearAll");
clearBtn.addEventListener("click", ()=>{
    capturedNum="";
    numsEntered=[];
    totalsEntered=[];
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


//KEY PRESS FUNCTIONALITY ADDED 
document.addEventListener('keydown', function(event) {
    switch (true) {
        case event.key=='.':
            userInput=displayScreen.innerHTML+=event.key;
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


    
   