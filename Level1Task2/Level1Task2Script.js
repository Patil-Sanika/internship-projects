// Function to perform calculator operations
function calculate() {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  let operation = document.getElementById("operation").value;
  let result;

  // Input validation
  if (isNaN(num1) || isNaN(num2)) {
    result = "Please enter valid numbers!";
  } else {
    // Perform selected operation
    switch (operation) {
      case "add":
        result = num1 + num2;
        break;
      case "sub":
        result = num1 - num2;
        break;
      case "mul":
        result = num1 * num2;
        break;
      case "div":
        result = num2 !== 0 ? (num1 / num2) : "Cannot divide by zero!";
        break;
    }
  }

  // Show result in the span
  document.getElementById("result").innerText = result;

  // Change button color randomly when clicked
  let calcBtn = document.getElementById("calcBtn");
  calcBtn.style.backgroundColor = getRandomColor();
}

// Function to display greeting based on current time
function showGreeting() {
  let hour = new Date().getHours();
  let greeting;

  if (hour < 12) {
    greeting = " Good Morning! \n Thanks for choosing us.";
  } else if (hour < 18) {
    greeting = " Good Afternoon! \n Thanks for choosing us.";
  } else {
    greeting = " Good Evening! \n Thanks for choosing us.";
  }

  let greetingBox = document.getElementById("greetingBox");
  greetingBox.innerText = greeting;
  greetingBox.style.display = "block";
  greetingBox.style.opacity = "1";  // fully visible

  // Fade out after 2s
  setTimeout(() => {
    greetingBox.style.opacity = "0";
  }, 2000);

  // Hide element after fade effect completes
  setTimeout(() => {
    greetingBox.style.display = "none";
  }, 3000);
}

// Function to generate random HEX color
function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Run greeting automatically on page load
window.onload = showGreeting;