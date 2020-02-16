const GET_VALUE = document.querySelector("#add");
const GET_INPUT = document.querySelector("input");
const GET_CARD = document.querySelector(".row");
const GET_BODY = document.querySelector("body");

//when we click on button 
GET_VALUE.addEventListener("click", () => {
    const input_value = GET_INPUT.value;
    if(input_value !=""){
        displayValue();
        clearInput(); 
        randomColor();
    }
});

//when we click on key Enter 
document.addEventListener("keyup", event => {
    if(event.code === "Enter"){
        const input_value = GET_INPUT.value;
        if(input_value !=""){
            displayValue();
            clearInput(); 
            randomColor();
        }
    }
}) 

function displayValue(){
    let INPUT = GET_INPUT.value;
    let HTML_CODE = "";
    if(INPUT !=""){
        HTML_CODE = `
        <div class="card">
            <h3>${INPUT}</h3>
            <button type="button" id="btn-button">Cancal</button>
        </div>
        `;
    }
    GET_CARD.insertAdjacentHTML("beforeend", HTML_CODE);
}

function clearInput (){
    GET_INPUT.value = "";
}

//random color 
function randomColor(){
   const ColorList = ["#7b1fa2", "#1e88e5", "#c2185b", "#00897b", "#039be5", "#ffd0a8"];
   var input_value = GET_INPUT.value;
   var colorIndex = Math.floor(Math.random() * ColorList.length);  
   if(input_value != null){
       GET_BODY.style.backgroundColor = ColorList[colorIndex]
   }
}