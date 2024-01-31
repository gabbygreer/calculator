let operator;
let firstOperand = '';
let secondOperand = '';
const display = document.querySelector('.display');
const buttons = document.querySelector('.btns');
const numbers = document.querySelector('.number');
// let buttons = Array.from(document.querySelector('.button'));

//Append input to display
const displayNumber = numbers.addEventListener('click', (event) => {
    display.append(event.target.innerText)
    })



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