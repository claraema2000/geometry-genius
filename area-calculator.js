//Manual system
//Triangle Area
function calculateTriArea(){
    // document.getElementById('idName').addEventListener();
    const base = document.getElementById('t-base');
    const baseValueStr = base.value;
    const baseValue = parseFloat(baseValueStr);
    console.log(baseValue)
    const height = document.getElementById('t-height');
    const heightValueStr = height.value;
    const heightValue = parseFloat(heightValueStr);
    console.log(heightValue)
    const TriArea = 0.5 * baseValue * heightValue;
    const areaSpan = document.getElementById('area-span-t');
    areaSpan.innerText = TriArea;
    // return TriArea;
    console.log(TriArea)
}
//Rectangle Area
function calculateRecArea(){
    const width = document.getElementById('r-width');
    const widthValueStr = width.value;
    const widthValue = parseFloat(widthValueStr);
    console.log(widthValue)
    const length = document.getElementById('r-length');
    const lengthValueStr = length.value;
    const lengthValue = parseFloat(lengthValueStr);
    console.log(lengthValue)
    const recArea = widthValue * lengthValue;
    const areaSpan = document.getElementById('area-span-r');
    areaSpan.innerText = recArea;
    console.log(recArea)
}

//Reusable Function --> Reduce duplicate code
//reusable get input value in number
function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputValueStr = inputField.value;
    const inputValue = parseFloat(inputValueStr);
    return inputValue;
}
//reusable set div/p/span value
function setElementInnerText(elementId, area){
    const elementField = document.getElementById(elementId);
    elementField.innerText = area;
}
//Parallelogram Area
function calculateParaArea(){
    const base = getInputValue("p-base");
    const height = getInputValue("p-height");
    const paraArea = base * height;
    setElementInnerText("area-span-p", paraArea);
}
//Ellipse Area
function calculateElliArea(){
    const majorRad = getInputValue('e-radius1');
    const minorRad = getInputValue('e-radius2');
    const pi = Math.PI;
    const area = pi * majorRad * minorRad;
    setElementInnerText("area-span-e", area);
}