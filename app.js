const screenDisplay = document.querySelector('.screen');
const buttons = document.querySelectorAll('button');
console.log(buttons);

function calculate() {
    console.log(clicked);
}

buttons.forEach(button => button.addEventListener('click', calculate));
