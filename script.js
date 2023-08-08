const input = document.querySelector('input[name="email"]');
const errorMessage = document.querySelector('.error-message');

input.addEventListener('invalid', (event) => {
  if (event.target.validity) {  
    event.preventDefault();
    input.classList.add("errorInput");
    if (event.target.validity.valueMissing) {
      errorMessage.textContent = 'Email required.';
    } else {
      errorMessage.textContent = 'Valid email required.';
    }
  } 
})
