const screenDisplay = document.querySelector('.screen');
const buttons = document.querySelectorAll('button');
console.log(buttons);

let calculation = [];
let accumulativeCalculation;

function calculate(button) {
    const value = button.textContent;
    
    // Handle the 'CLEAR' button
    if (value === 'CLEAR') {
        calculation = [];
        screenDisplay.textContent = '.';  // Clear the screen or reset to a default state
        return;
    }

    // Handle the '=' button for evaluation
    else if (value === '=') {
        try {
            screenDisplay.textContent = eval(accumulativeCalculation);  // Evaluate the current expression
            console.log(eval(accumulativeCalculation));
        } catch (e) {
            screenDisplay.textContent = 'Error';  // If there's an error in the calculation
            console.error(e);
        }
        return;
    }

    // For all other buttons (numbers and operators)
    else {
        calculation.push(value);  // Add the value to the calculation array
        accumulativeCalculation = calculation.join('');  // Join the array into a string
        screenDisplay.textContent = accumulativeCalculation;  // Display the current expression
    }
}

buttons.forEach(button => button.addEventListener('click', () => calculate(button)));




