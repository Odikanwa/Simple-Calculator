// Pick the screen
const screen = document.querySelector('.screen');
// Pick all buttons
const buttons = document.querySelectorAll('button');

//Listen to ClickEvents on buttons
buttons.forEach(function(button) {
  button.addEventListener('click', evaluate);
});

// evaluate function definition
function evaluate(event) {
  // Assign values to clicked buttons
  const ButtonClicked = event.target.value;

  if (ButtonClicked === '=') {
    // Verify if screen is empty before evaluating
    if (screen.value !== '') {
      // Evaluate and show answer on screen
      screen.value = eval(screen.value);
    }
  } else if (ButtonClicked === 'C') {
    // Clear out everything on screen
    screen.value = '';
  } else {
    // Show full operation to the Screen
    screen.value += ButtonClicked;
  }
}
