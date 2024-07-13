const display = document.querySelector('#display-content');
const buttonDiv = document.querySelector('#button-div');
const addButton = document.querySelector('#plus');
const subtractButton = document.querySelector('#minus');
const multiplyButton = document.querySelector('#multiply');
const divideButton = document.querySelector('#divide');

let Number1 = "";
let Number2 = "";
let sum = "";
let operator = "";
let displayText = "";

function addToDisplay(num){
    displayText += num;
    display.textContent = `${displayText}`;
}

function deletefuntion(str) {
    displayText = str.slice(0, -1);
    display.textContent = `${displayText}`;
}

buttonDiv.addEventListener("click", (event) => {
    let target = event.target;

    switch (target.id) {
        case 'zero':
              addToDisplay(0);
            break;
        case 'one':
              addToDisplay(1);
            break;
        case 'two':
              addToDisplay(2);
            break;
        case 'three':
              addToDisplay(3);
            break;
        case 'four':
              addToDisplay(4);
            break;
        case 'five':
              addToDisplay(5);
            break;
        case 'six':
              addToDisplay(6);
            break;
        case 'seven':
              addToDisplay(7);
            break;
        case 'eight':
              addToDisplay(8);
            break;
        case 'nine':
              addToDisplay(9);
            break;
        case 'clear':
            function clear() {
                displayText = "";
                sum = "";
                Number1 = "";
                Number2 = "";
                operator = "";
                display.textContent = `${displayText}`;
            }
            clear();
            break;
        case 'decimal':
            if (!displayText.includes(".")){
            addToDisplay('.');
            }
            break;
        case 'delete':
            deletefuntion(displayText);
            break;
        case 'plus-minus':
            if (!displayText.includes("-")){
                displayText = "-" + displayText;
                display.textContent = `${displayText}`;
            }
            break;
    }

});

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(op, num1, num2){
    if (op == "+"){
        return add(num1, num2);
    }
    else if (op == "-"){
        return subtract(num1, num2);
    }
    else if (op == "*"){
        return multiply(num1, num2);
    }
    else if (op == "/"){
        return divide(num1, num2);
    }
}

function checkOperator(oper) {
    if (operator !== "" && Number1 !== "" && sum == "" && Number2 ==""){
        Number2 = parseFloat(displayText);
        sum = parseInt(operate(operator, Number1, Number2));
        display.textContent = `${sum}`;
        Number1 = sum;
        sum = "";
        operator = oper;
        Number2 = "";
        displayText = "";
        console.log(Number1);
        console.log(Number2);
        console.log(sum);
        console.log(operator);
        console.log(displayText);
    }
    else if(operator == "" && Number1 == "" && sum == "" && Number2 == ""){
        operator += oper;
        Number1 = parseFloat(displayText);
        displayText = "";
        display.textContent = `${displayText}`;
    }
}

addButton.addEventListener("click", () =>{
    checkOperator("+");
})

subtractButton.addEventListener("click", () => {
    checkOperator("-");
})

multiplyButton.addEventListener("click", () => {
    checkOperator("*");
})

divideButton.addEventListener("click", () => {
    checkOperator("/");
})