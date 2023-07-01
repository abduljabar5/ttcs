
function validateForm() {
  const serviceSelect = document.getElementById('form').value;
    const pickUp = document.querySelector('#pick-up').value.trim();
    const dropOff = document.querySelector('#drop-off').value.trim();
    const passengers = document.querySelector('#passengers').value.trim();
    const submit = document.getElementById('submit');
    const errorMessages = [];
    if (!pickUp) {
        errorMessages.push('Pick up location is required');
        const pickUp = document.querySelector('#pick-up')
        pickUp.classList = "form-control is-invalid"
    }else{
        const pickUp = document.querySelector('#pick-up')
        pickUp.classList = "form-control is-valid";
    }

    if (!dropOff) {
        errorMessages.push('Drop off location is required');
        const dropOff = document.querySelector('#drop-off')
        dropOff.classList = "form-control is-invalid"
    } else{
        const dropOff = document.querySelector('#drop-off')
        dropOff.classList = "form-control is-valid";
    }
    if (serviceSelect === 'Select Service') {
      errorMessages.push('Drop off location is required');
      const serviceSelect = document.getElementById('form');
      serviceSelect.classList = "form-control is-invalid"
  } else{
    const serviceSelect = document.getElementById('form');
      serviceSelect.classList = "form-control is-valid";
  }


    if (!passengers) {
        errorMessages.push('Number of passengers is required');
        const passengers = document.querySelector('#passengers')
        passengers.classList = "form-control is-invalid"
    } else if (!isValidPassengers(passengers)) {
        errorMessages.push('Number of passengers should be between 1 and 10');
        const passengers = document.querySelector('#passengers')
        passengers.classList = "form-control is-invalid"
    }else{
        const passengers = document.querySelector('#passengers')
        passengers.classList = "form-control is-valid";
    }


    if (errorMessages.length > 0) {
        // showErrors(errorMessages);
    } 
    else {
     
        next();
    }
}

function isValidPassengers(passengers) {
    return passengers >= 1 && passengers <= 10;
}

function showErrors(errors) {
    const errorContainer = document.createElement('div');
    errorContainer.classList.add('error');

    errors.forEach(error => {
        const errorMessage = document.createElement('p');
        errorMessage.textContent = error;
        errorContainer.appendChild(errorMessage);
    });

    const form = document.querySelector('#appointment-form');
    form.insertBefore(errorContainer, form.firstChild);

}

  const stepMenuOne = document.querySelector('.formbold-step-menu1')
const stepMenuTwo = document.querySelector('.formbold-step-menu2')
const stepMenuThree = document.querySelector('.formbold-step-menu3')
const stepMenuFour = document.querySelector('.formbold-step-menu4')

const stepOne = document.querySelector('.formbold-form-step-1')
const stepTwo = document.querySelector('.formbold-form-step-2')
const stepThree = document.querySelector('.formbold-form-step-3')
const stepFour = document.querySelector('.formbold-form-step-4')
const bookNow = document.getElementById('Book-now')
const formSubmitBtn = document.getElementById('formSubmitBtn')
const formBackBtn = document.querySelector('.formbold-back-btn')
formSubmitBtn.addEventListener("click", function(event){
  event.preventDefault()
  validateForm();
})
function next(event) {
  if(stepMenuOne.className == 'formbold-step-menu1 active') {
     

      stepMenuOne.classList.remove('active')
      stepMenuTwo.classList.add('active')

      stepOne.classList.remove('active')
      stepTwo.classList.add('active')

      formBackBtn.classList.add('active')
       formSubmitBtn.style.display = "none"
          bookNow.style.display='block'
      formBackBtn.addEventListener("click", function (event) {
        event.preventDefault()

        stepMenuOne.classList.add('active')
        stepMenuTwo.classList.remove('active')

        stepOne.classList.add('active')
        stepTwo.classList.remove('active')
        formSubmitBtn.style.display = "block"
        bookNow.style.display='none'

        formBackBtn.classList.remove('active')
        document.getElementById('form').value = 'Select Service'
        if(stepMenuThree.className == 'formbold-step-menu3 active') {
          stepMenuTwo.classList.add('active')
          stepMenuThree.classList.remove('active')
    
          stepTwo.classList.add('active')
          stepThree.classList.remove('active')
    
          // formBackBtn.classList.remove('active')
         
        }

      })

    } 

}


