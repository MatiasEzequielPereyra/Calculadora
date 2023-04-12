const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.button');

let operatorClicked = false;
let resultDisplayed = false;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.value === 'C') {
      display.textContent = '0';
      operatorClicked = false;
      resultDisplayed = false;
    } else if (button.value === 'CE') {
      if(display.textContent.length <= 1){
        display.textContent ='0';
      }else{
        display.textContent = display.textContent.slice(0, -1);
      }
      operatorClicked = false;
      resultDisplayed = false;
    } else if (button.value === '=') {
      let result = eval(display.textContent);
      if(result.toString().length > 10){
        result = result.toPrecision(10);
      }
      display.textContent = result;
      operatorClicked = false;
      resultDisplayed = true;
    } else if (['+', '-', '*', '/'].includes(button.value)) {
      if (!operatorClicked) {
        display.textContent += button.value;
        operatorClicked = true;
        resultDisplayed = false;
      } else if (!resultDisplayed) {
        display.textContent = display.textContent.slice(0, -1) + button.value;
        operatorClicked = true;
      }
    } else {
      if (resultDisplayed) {
        display.textContent = '0';
        resultDisplayed = false;
      }
      if (display.textContent === '0') {
        display.textContent = button.value;
      } else if (display.textContent.length < 10) {
        display.textContent += button.value;
      }
      operatorClicked = false;
    }
  });
});
