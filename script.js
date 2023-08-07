

const input = document.querySelector('input[name="email"]');
const errorMessage = document.querySelector('.error-message');

input.addEventListener('invalid', function (event) {
  if (event.target.validity.valueMissing) {
    
    event.preventDefault();
    errorMessage.textContent = 'The field cannot be empty';
  } else {
    
    event.preventDefault();
    errorMessage.textContent = 'The email address is not formatted correctly';
  }
})
