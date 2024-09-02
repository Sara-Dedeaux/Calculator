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
let totalsEntered= []; 
let expressionArr=[];

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

//WHEN - IS DOUBLE CLICKED - USER INPUT CAN BE CHANGED TO A NEGATIVE NUMBER
let negNumBtn=document.getElementById("negative");
negNumBtn.addEventListener("dblclick", ()=>{
    console.log("i work")
    capturedNum=(userInput);
    capturedNum=(parseFloat(userInput)*-1);
    userInput=capturedNum
    console.log(capturedNum)
    numsEntered.push(capturedNum);
     toMain(capturedNum);
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

            //USE LOOP TO STORE EXPRESSION - FIRST NUM / OPERATION / SECOND NUM

            for (let j = 0; j <i ; j++) {
                const element = numsEntered[j];
               expressionArr.push(element);
            
            }
            console.log(expressionArr);
        }
    }//END OUTTER FOR LOOP

    let multFound=false;
    let divFound=false;
    let addFound=false;
    let subFound=false;

    expressionArr.forEach(element => {
        
        if (element== "*") {
            multFound=true;
        }else if (element=="/") {
            divFound=true;
        }else if (element=="+"){
            addFound=true;
        }else if (element== "-"){
            subFound=true;
        }
    });

    console.log(multFound);
    console.log(divFound)
    console.log(addFound)
    console.log(subFound)

    
    if(multFound==true){
        for (let i = 0; i < expressionArr.length; i++) {
            const element = expressionArr[i];
            if(element=="*"){
                firstNum=parseFloat(expressionArr[i-1]);
                secondNum=parseFloat(expressionArr[i+1]);
                subTotal=firstNum*secondNum
                
                expressionArr.splice((i-1),3,subTotal);
            }

            console.log(expressionArr)
        }
    }
    if(divFound==true){
        for (let i = 0; i < expressionArr.length; i++) {
            const element = expressionArr[i];
            if(element=="/"){
                firstNum=parseFloat(expressionArr[i-1]);
                secondNum=parseFloat(expressionArr[i+1]);
                subTotal=firstNum/secondNum
                
                expressionArr.splice((i-1),3,subTotal);
            }
            console.log(expressionArr)

        }
    }
    if(addFound==true){
        for (let i = 0; i < expressionArr.length; i++) {
            const element = expressionArr[i];
            if(element=="+"){
                firstNum=parseFloat(expressionArr[i-1]);
                secondNum=parseFloat(expressionArr[i+1]);
                subTotal=firstNum+secondNum
                
                expressionArr.splice((i-1),3,subTotal);
            }
            console.log(expressionArr)

        }
    }
    if(subFound==true){
        for (let i = 0; i < expressionArr.length; i++) {
            const element = expressionArr[i];
            if(element=="-"){
                firstNum=parseFloat(expressionArr[i-1]);
                secondNum=parseFloat(expressionArr[i+1]);
                subTotal=firstNum-secondNum
                
                expressionArr.splice((i-1),3,subTotal);
            }
            console.log(expressionArr)

        }
    }

    toRunning(subTotal + ";  ")
    toMain(subTotal)
    totalsEntered.push(subTotal);
    console.log(totalsEntered);
   
    setTimeout(() => {
    toMain(""); 
    }, 1000); // 1000 milliseconds (1 second) delay

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
    capturedNum=null;
    userInput='';
    runningDisplay.innerHTML=null;
    numsEntered=[];
    totalsEntered=[];
    expressionArr=[];
    total=0;
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


    
   