let firstNum = document.getElementById("numOne");
let secondNum = document.getElementById("numTwo");
let result = document.getElementById("output");

function doAdd(){
    let temp = Number(firstNum.value) + Number(secondNum.value);
    result.innerHTML = `${temp}`;
    if (temp < 0){
        result.style.color = "red";
    } else {
        result.style.color = "black";
    }

}

function doSub() {
    let temp = Number(firstNum.value) - Number(secondNum.value);
    result.innerHTML = `${temp}`;
    if (temp < 0){
        result.style.color = "red";
    } else {
        result.style.color = "black";
    }
}

function doMul() {
    let temp = Number(firstNum.value) * Number(secondNum.value);
    result.innerHTML = `${temp}`;
    if (temp < 0){
        result.style.color = "red";
    } else {
        result.style.color = "black";
    }
}

function doDiv() {
    let temp = Number(firstNum.value) / Number(secondNum.value);
    result.innerHTML = `${temp}`;
    if (temp < 0){
        result.style.color = "red";
    } else {
        result.style.color = "black";
    }
}

function doPow(){
    let base = Number(firstNum.value);
    let exp = Number(secondNum.value);
    let temp = 1;
    for (let i = 0; i < exp; i++) {
        temp = temp * base;
    }
    result.innerHTML = `${temp}`;
    if (temp < 0){
        result.style.color = "red";
    } else {
        result.style.color = "black";
    }
}
function doClear() {
    firstNum.value = "";
    secondNum.value = "";
    result.innerHTML = "";
}
