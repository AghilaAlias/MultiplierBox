

 // constants
 const limit = 144;
 const ELEMENT_CLASS = 'numberElement'
 const ELEMENT_CLASS_SELECTED = 'numberElementSelected'

 // Check for DOMContentLoaded
document.addEventListener("DOMContentLoaded", buildNumberBox);

// Initilized to make it iteratable
buildNumbers = function buildNumbers(){
    return Array.apply(null, Array(144)); 
}

function buildNumberBox(){
    var numberBox = generateNumberBox(); //  calling the generator.
    document.getElementById('body').appendChild(numberBox);
}

// Build the number box and return the element
function generateNumberBox(){   
var range = buildNumbers();
var containerMultiplier = document.getElementById("multipliers");
for(var index= 1; index<= limit; index++){
    var numberElement = document.createElement("DIV");
    var numberText = document.createTextNode(index);
    numberElement.id = index;
    numberElement.classList.add(ELEMENT_CLASS);
    numberElement.addEventListener('click',handleMultiples);
    numberElement.appendChild(numberText);
    containerMultiplier.appendChild(numberElement);    
}
return containerMultiplier;
}

// Handle the selection
function handleMultiples(ev) {
var num = parseInt(ev.currentTarget.innerHTML);
var selectedNumber = ev.currentTarget;
var selectedNumberClassList = selectedNumber.classList;
var range = parseInt(144/num);
if(selectedNumberClassList.contains(ELEMENT_CLASS_SELECTED) && num){
    resetMultiplier();
    return;
}else{
resetMultiplier();
for(var i= 1;i<=range;i++){
    result = i*num;
    toogleElement(result);
}
}
}

// Reset the multipliers
function resetMultiplier(){
 const multipliers = document.querySelectorAll('.multipliers div');
 multipliers.forEach(element => {
  if(element.classList.contains(ELEMENT_CLASS_SELECTED))
    element.classList.remove(ELEMENT_CLASS_SELECTED)
});
}

// Toggle selection
function toogleElement(result){
    var selectedElement = document.getElementById(result);
    var elementClassList = selectedElement.classList;
    if(elementClassList.contains(ELEMENT_CLASS_SELECTED)){
        elementClassList.remove(ELEMENT_CLASS_SELECTED)
    }else{
        elementClassList.add(ELEMENT_CLASS_SELECTED)
    }    
}