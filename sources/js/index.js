
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
showWindow.innerHTML='';
const showNumber=function(event){
    showWindow.textContent=showWindow.innerHTML+event.target.value;
    

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


floatBtn.addEventListener('click',showNumber);
addBtn.addEventListener('click',showNumber);
multiplyBtn.addEventListener('click',showNumber);
divsionBtn.addEventListener('click',showNumber);
equalBtn.addEventListener('click',showNumber);
subtractBtn.addEventListener('click',showNumber);



