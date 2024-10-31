// JavaScript code for form validation
// Prevent form from submitting

// Retrieve the input field value
// Regular expression pattern for alphanumeric input
// Check if the input value matches the pattern
// Valid input: display confirmation and submit the form
// Invalid input: display error message

const form = document.getElementById('myForm');
const inputField = document.getElementById('inputField');


form.addEventListener('submit', function(event) {
  event.preventDefault();


  const userInput = inputField.value;


  const alphanumericPattern = /^[a-zA-Z0-9]+$/;


  if (alphanumericPattern.test(userInput)) {
    alert('Thank you! Your input is valid.');
    
  } else {
    alert('Invalid input! Please enter only letters and numbers.');
  }
});
