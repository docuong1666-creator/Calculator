function add(a,b) {
    return a + b;
};

function subtract(a,b) {
    return a - b;
};

function multiply(a,b) {
    return a * b;
};

function divide(a,b) {
    return a / b;
};

let number1 = 0;
let number2 = 0;
let operator = '';

function operate(operator, number1, number2) {
    
    switch (operator) {
        case "+":
            return add(number1,number2);
            break;
        case "-":
            return subtract(number1,number2);
            break;
        case "*":
            return multiply(number1,number2);
            break;
        case "/":
            return divide(number1,number2);
            break;
    }
};

const display = document.querySelector('#display');
const numberBtns = document.querySelectorAll('.number-btn');
const operateBtns = document.querySelectorAll('.operate-btn');
const operatorBtn = document.querySelector('.operator-btn');
const clearBtn = document.querySelector('.clear-btn');

numberBtns.forEach( 
    button => button.addEventListener('click', (event) => {
        display.textContent += event.target.innerText;
        if ( !operator ) {
            number1 += event.target.innerText;
            console.log(`Number1: ${number1}`)
        } else if (operator) {
            number2 += event.target.innerText;
            console.log(`Number2: ${number2}`)
        }
}));

operateBtns.forEach(
    button => button.addEventListener('click', (event) => {
        let targetOperate = event.target.innerText;
        display.textContent += " " + targetOperate + " ";
        operator = targetOperate;
    })
);

operatorBtn.addEventListener('click', (event) => {
    let targetOperator = event.target.innerText;
    number1 = +number1;
    number2 = +number2;
    let resultMath = operate(operator, number1, number2);
    display.textContent += " " + targetOperator + " " + resultMath;
});

clearBtn.addEventListener('click', (event) => {
    display.textContent = '';
    number1 = 0;
    number2 = 0;
    operator = '';
});