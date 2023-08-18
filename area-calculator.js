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
    // return recArea;
    console.log(recArea)
}