let theInput=document.querySelector('#input');
theInput.addEventListener('keyup',function(){
    let theValue=Number(theInput.value);
    document.querySelector('#num1').innerText=theValue;
    calculate();
});

let theRange=document.querySelector('#customrange');
theRange.addEventListener('input',function(){
    let theRangeValue=Number(theRange.value);
    document.querySelector('#num2').innerText=theRangeValue;
    calculate();
});

let calculate=()=>{
    let theIn=Number(document.querySelector('#num1').innerText);
    let theRa=Number(document.querySelector('#num2').innerText);
    let result=theIn*theRa;
    document.querySelector('#num3').innerText=result;
};