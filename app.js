//MAKE VALUE APPEAR ON DISPLAY

    //TARGET ELEMENT FOR DISPLAY
    let displayScreen=document.querySelector("h1");

  
//MAKE NUMBER BUTTON VALUES AN INT

//TARGET ALL NUMBER BUTTONS TO MAKE THEM AN INT
let numButtons=document.querySelectorAll(".num");
let operationButtons=document.querySelectorAll(".operation")
let displayButtons=numButtons+operationButtons;
console.log(displayButtons)



for (let i = 0; i < numButtons.length; i++) {
    const element = numButtons[i];

    console.log(element.value)
    
    element.value=parseInt(element.value);

    console.log(element.value)
    
}


//IF A BUTTON IS CLICKED DISPLAY TO THE SCREEN 



//CREATE FUNCTIONS TO PREFORM CALCULATIONS


