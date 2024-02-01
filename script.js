// let operator = '';
// let firstOperand = '';
let secondOperand = '';


const numberButtons = document.querySelectorAll('[data-number]');
const currentNum = document.querySelector('.currentNum')

// CALCULATOR OBJECT
const calculator = {
    displayValue: '0', 
    firstOperand: null,
    waitingFOrSecondOperand: false,
    operator: null
};

//Function to update the display
function updateDisplay() {
    const display = document.querySelector('.display');
    display.textContent = calculator.displayValue
}
updateDisplay();

//Key eventListeners
const btns = document.querySelector('.calc-btns');
btns.addEventListener('click', (event) => {
    const target = event.target;
    //check is clicked element is a button
    if(!target.matches('button')){
        return;
    }
    if(target.classList.contains('decimal') ) {
        inputDecimal(target.textContent)
        updateDisplay()
        return;
    }
    if(target.classList.contains('operator')) {
        handleOperators(target.textContent)
        updateDisplay()
        return;
    }
    if(target.classList.contains('clear')) {
        console.log(target.textContent)
        return;
    }
    if(target.classList.contains('delete')) {
        console.log(target.textContent)
        return;
    }
    if(target.classList.contains('equal')) {
        console.log(target.textContent)
        return;
    }
    inputNumber(target.textContent);
    updateDisplay();
})
//Function to handle numbers
function inputNumber(number) {
    const {displayValue, waitingFOrSecondOperand} = calculator;
    
    if(waitingFOrSecondOperand === true) {
        calculator.displayValue = number;
        calculator.waitingFOrSecondOperand = false;
    }else{
        calculator.displayValue = displayValue === '0' ? number : displayValue + number;
    }
    
    console.log(calculator)
}
//function to handle decimal
function inputDecimal(dot) {
    if(!calculator.displayValue.includes(dot)) {
        calculator.displayValue += dot;
    }
}
//function to handle operators
function handleOperators(nextOperator) {
    const {firstOperand, displayValue, operator} = calculator
    const inputValue = parseFloat(displayValue);

    if(firstOperand === null && !isNaN(inputValue)) {
        calculator.firstOperand = inputValue
    }

    calculator.waitingFOrSecondOperand = true;
    calculator.operator = nextOperator;
    console.log(calculator)
}

//Operation functions
const add = (num1, num2) => num1 + num2;
const subtract = (num1,num2) => num1 - num2;
const multiply = (num1,num2) => num1 * num2; 
const divide = (num1, num2) => num1 / num2; 

function operate(operator, a, b) {
    a = Number(a)
    b = Number(b)
    switch (operator) {
        case '+':
            return add(a,b)
        case '-':
            return subtract(a,b)
        case '×':
            return multiply(a,b)
        case '÷':
            if(b === 0) return null
            else return divide(a,b)
        default:
            return null   
    }   
}