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
let target ='';

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

function numberButton(event) {
    if (!number1 || operator === '=' && !number2) {
            display.textContent = target;
            number1 = target;
            operator = '';
        } else if (!operator) {
            if(number1.includes('.') && target === '.') {
                return;
            }
            display.textContent += target;
            number1 += target;
        } else if (operator && number1 && operator !== '=') {
            if(number2.includes('.') && target === '.') {
                return;
            }
            display.textContent += target;
            number2 += target;
        }
};

function operateButton(event) {
    let targetOperate = target;
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
};

function operatorButton(event) {
    if (!number1 & number1 !== 0) return display.textContent = "ERROR";
    if (!number2) return display.textContent = number1;
    number1 = +number1;
    number2 = +number2;
    let resultMath = operate(operator, number1, number2).toFixed(2);
    display.textContent = resultMath;
    number1 = resultMath;
    number2 = '';
    operator = '=';
};

function clearButton() {
    display.textContent = '';
    number1 = '';
    number2 = '';
    operator = '';
};

const display = document.querySelector('#display');
const numberBtns = document.querySelectorAll('.number-btn');
const operateBtns = document.querySelectorAll('.operate-btn');
const operatorBtn = document.querySelector('.operator-btn');
const clearBtn = document.querySelector('.clear-btn');
const backSpaceBtn = document.querySelector('.backspace-btn');

numberBtns.forEach( 
    button => button.addEventListener('click', (event) => {
        target = event.target.innerText
        numberButton()
    } ));

operateBtns.forEach(
    button => button.addEventListener('click', (event) => {
        target = event.target.innerText
        operateButton()
    }));

operatorBtn.addEventListener('click', operatorButton);

backSpaceBtn.addEventListener('click', backSpace);

document.addEventListener('keydown', (event) => {
    if (event.key == 'Backspace') backSpace();
    if (['0','.','1','2','3','4','5','6','7','8','9'].includes(event.key)) {
        target = event.key;
        numberButton()
    }
    if (['+','-','*','/'].includes(event.key)) {
        target = event.key;
        operateButton()
    }
    if (event.key == '=' || event.key == 'Enter') operatorButton();
    if ( event.key == 'c' ) clearButton();
})




clearBtn.addEventListener('click', clearButton);