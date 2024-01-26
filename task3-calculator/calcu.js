

let string = "";

function updateInput() {
  document.querySelector('input').value = string;
}

function handleError() {
  string = "Error";
  updateInput();
  setTimeout(() => {
    string = "";
    updateInput();
  }, 1500); // Clear the error message after 1.5 seconds
}

function handleButtonClick(value) {
  if (value === '=') {
    try {
      string = eval(string);
      updateInput();
    } catch (error) {
      handleError();
    }
  } 
  else if (value === 'X') {
    string += '*';
    updateInput();
  } 
  else if (value === 'DE') {
    string = string.slice(0, -1);
    updateInput();
  } 
  
  else if (value === 'AC') {
    string = "";
    updateInput();
  } 
  else if (value === '00') {
    string += '00';
    updateInput();
  }

  else if (value === '%') {
    string = (parseFloat(string) || 0) / 100;
    updateInput();
  }
  else {
    string = string + value;
    updateInput();
  }
}

let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    handleButtonClick(e.target.innerHTML);
  });
});

document.addEventListener('keydown', (e) => {
  const key = e.key.toUpperCase();
  const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', '.','%', 'ENTER', 'BACKSPACE', 'DELETE','ALT'];

  if (allowedKeys.includes(key)) {
    e.preventDefault();

    if (key === 'ENTER') {
      handleButtonClick('=');
    } 
    else if (key === 'BACKSPACE' ) {
      handleButtonClick('DE');
    }
    else if ( key === 'DELETE') {
      handleButtonClick('AC');
    }
    else if ( key === '%') {
      handleButtonClick('%');
    }
    else if ( key === 'ALT') {
      handleButtonClick('00');
    }
     else {
      handleButtonClick(key);
    }
  }
});

document.addEventListener('DOMContentLoaded', function () {
  typeText();
});

function typeText() {
  const title = document.getElementById('mathTitle');
  const originalText = "Use ME TO SOLVE YOUR MATHEMATICAL PROBLEMS";
  let i = 0;

  function type() {
      if (i < originalText.length) {
          title.innerHTML += originalText.charAt(i);
          i++;
          setTimeout(type, 100); 
      } 
      else {
          i = 0;
          title.innerHTML = '&#128540;';
          setTimeout(type, 1000); 
      }
  }

  type();
}