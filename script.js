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
        clear()
        updateDisplay()
        return;
    }
    if(target.classList.contains('delete')) {
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
    if(calculator.waitingFOrSecondOperand === true) {
        calculator.displayValue = '0.'
        calculator.waitingFOrSecondOperand = false;
        return
    }
    
    if(!calculator.displayValue.includes(dot)) {
        calculator.displayValue += dot;
    }
}

//function to handle operators
function handleOperators(nextOperator) {
    const {firstOperand, displayValue, operator} = calculator
    const inputValue = parseFloat(displayValue);

    if(operator && calculator.waitingFOrSecondOperand) {
        calculator.operator = nextOperator;
        console.log(calculator);
        return;
    }

    if(firstOperand === null && !isNaN(inputValue)) {
        calculator.firstOperand = inputValue
    }else if (operator) {
        const result = calculate(firstOperand, inputValue, operator);

        calculator.displayValue = String(result);
    }

    calculator.waitingFOrSecondOperand = true;
    calculator.operator = nextOperator;
    console.log(calculator)
}

//function to do calculations 
function calculate(firstOperand, secondOperand, operator) {
    if(operator === '+') {
        return add(firstOperand, secondOperand)
    }else if(operator === '-') {
        return subtract(firstOperand, secondOperand)
    }else if(operator === '×') {
        return multiply(firstOperand, secondOperand)
    }else if(operator === '÷') {
        return divide(firstOperand, secondOperand)
    }
    return secondOperand;
}

function clear() {
    calculator.displayValue = '0';
    calculator.firstOperand = null;
    calculator.waitingFOrSecondOperand = false;
    calculator.operator = null
    console.log(calculator);
}

//Operation functions
const add = (firstOperand, secondOperand) => firstOperand + secondOperand;
const subtract = (firstOperand,secondOperand) => firstOperand - secondOperand;
const multiply = (firstOperand,secondOperand) => firstOperand * secondOperand; 
const divide = (firstOperand, secondOperand) => firstOperand / secondOperand; 

