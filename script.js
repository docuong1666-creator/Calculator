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

let number1 = '';
let number2 = '';
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

function backSpace() {
    if (number2) {
        number2 = number2.slice(0,-1);
        display.textContent = display.textContent.slice(0,-1);
    } else if (!number2 && operator && operator !== '=') {
        operator = '';
        display.textContent = display.textContent.slice(0,-3);
    } else if (!number2 && !operator && operator !== '=' && number1) {
        number1 = number1.slice(0,-1);
        display.textContent = display.textContent.slice(0,-1);
    } else {
        display.textContent = '';
        number1 = '';
        number2 = '';
        operator = '';
}};

const display = document.querySelector('#display');
const numberBtns = document.querySelectorAll('.number-btn');
const operateBtns = document.querySelectorAll('.operate-btn');
const operatorBtn = document.querySelector('.operator-btn');
const clearBtn = document.querySelector('.clear-btn');
const backSpaceBtn = document.querySelector('.backspace-btn');

numberBtns.forEach( 
    button => button.addEventListener('click', (event) => {
        
        if (operator === '=' && !number2) {
            display.textContent = '';
            display.textContent = event.target.innerText;
            number1 = event.target.innerText;
            operator = '';
        } else if (!operator) {
            if(number1.includes('.') && event.target.innerText === '.') {
                return;
            }
            display.textContent += event.target.innerText;
            number1 += event.target.innerText;
        } else if (operator && number1 && operator !== '=') {
            if(number2.includes('.') && event.target.innerText === '.') {
                return;
            }
            display.textContent += event.target.innerText;
            number2 += event.target.innerText;
        }
}));

operateBtns.forEach(
    button => button.addEventListener('click', (event) => {
        let targetOperate = event.target.innerText;
        console.log(number2);
        if(!number1 && number1 !== 0) {
            return display.textContent = 'Pick a number first';
        }else if (!operator) {
            operator = targetOperate;
            display.textContent += " " + targetOperate + " ";
        } else if (operator && !number2) {
            operator = targetOperate;
            display.textContent = number1 + " " + operator + " "
        }else if (operator && number2) {
            number1 = +number1;
            number2 = +number2;
            let resultMath = operate(operator, number1, number2).toFixed(2);
            number1 = resultMath;
            number2 = '';
            operator = targetOperate;
            display.textContent = number1 + " " + operator + " ";
        }
    })
);

operatorBtn.addEventListener('click', (event) => {
    if (!number1 & number1 !== 0) return display.textContent = "ERROR";
    if (!number2) return display.textContent = number1;
    number1 = +number1;
    number2 = +number2;
    let resultMath = operate(operator, number1, number2).toFixed(2);
    display.textContent = resultMath;
    number1 = resultMath;
    number2 = '';
    operator = '=';
});

backSpaceBtn.addEventListener('click', backSpace);
document.addEventListener('keydown', (event) => {
    if (event.key == 'Backspace') backSpace();
})




clearBtn.addEventListener('click', (event) => {
    display.textContent = '';
    number1 = '';
    number2 = '';
    operator = '';
});