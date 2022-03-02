const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;
let passwordsMatch = false;

function processFormData(e) {
    e.preventDefault();
    // Validate Form
    validateForm();
    // Submit Form if Valid
    if (isValid && passwordsMatch) {
      storeFormData();
    }
  }
  
  // Event Listener
  form.addEventListener('submit', processFormData);