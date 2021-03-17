let firstNumber=null;
let secondNumber=null;
let operator=null;


const zeroNumberBtn=document.getElementById('zero-num');
const oneNumberBtn=document.getElementById('one-num');
const twoNumberBtn=document.getElementById('two-num');
const threeNumberBtn=document.getElementById('three-num');
const fourNumberBtn=document.getElementById('four-num');
const fiveNumberBtn=document.getElementById('five-num');
const sixNumberBtn=document.getElementById('six-num');
const sevenNumberBtn=document.getElementById('seven-num');
const eightNumberBtn=document.getElementById('eight-num');
const nineNumberBtn=document.getElementById('nine-num');
const floatBtn=document.getElementById('float');
const addBtn=document.getElementById('add');
const subtractBtn=document.getElementById('subtract');
const multiplyBtn=document.getElementById('multiply');
const divsionBtn=document.getElementById('divsion');
const equalBtn=document.getElementById('equal');




const showWindow=document.getElementById('show-window');
const showNumber=function(event){
    showWindow.textContent+=event.target.value;

}

const operatorHandler=function(event){
    operator=event.target.id;
    firstNumber=+showWindow.textContent;
    showWindow.textContent=null;
}
const equalHandler = function(){
    let result=0
    console.log(operator);
    switch(operator){
        case ('add'):
            result=firstNumber+(+showWindow.textContent);
            break;
        case ('multiply'):
            result=firstNumber*(+showWindow.textContent);
            break;
        case ('divsion'):
            result=firstNumber/(+showWindow.textContent)
            break;
    }
    showWindow.textContent=result;

    
}


zeroNumberBtn.addEventListener('click',showNumber);
oneNumberBtn.addEventListener('click',showNumber);
twoNumberBtn.addEventListener('click',showNumber);
threeNumberBtn.addEventListener('click',showNumber);
fourNumberBtn.addEventListener('click',showNumber);
fiveNumberBtn.addEventListener('click',showNumber);
sixNumberBtn.addEventListener('click',showNumber);
sevenNumberBtn.addEventListener('click',showNumber);
eightNumberBtn.addEventListener('click',showNumber);
nineNumberBtn.addEventListener('click',showNumber);


floatBtn.addEventListener('click',operatorHandler);
addBtn.addEventListener('click',operatorHandler);
multiplyBtn.addEventListener('click',operatorHandler);
divsionBtn.addEventListener('click',operatorHandler);
equalBtn.addEventListener('click',equalHandler);
subtractBtn.addEventListener('click',operatorHandler);



