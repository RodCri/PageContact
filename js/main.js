const btn = document.querySelector('#contact');

btn.addEventListener('click',(event)=>{
  event.preventDefault();
  validateEmail()
});

const validateEmail = ()=> {
	// Get our input reference.
	var emailField = document.querySelector('#company__input');
	// Define our regular expression.
	var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
	// Using test we can check if the text match the pattern
	if(validEmail.test(emailField.value) && emailField.value != ''){
    emailField.classList.add('email__ok')
    emailField.classList.remove('email__failed')
		return true;
	}else{
    emailField.classList.add('email__failed')
    emailField.classList.remove('email__ok')
		return false;
	}
} 