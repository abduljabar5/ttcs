
document.addEventListener('DOMContentLoaded', function() {
  // Get the select element by its id
  const serviceSelect = document.getElementById('form');

  // Add a change event listener to the select element
  serviceSelect.addEventListener('change', function() {
    // Get the selected value
    const selectedValue = this.value;

    // Log the selected value
    console.log('Selected value:', selectedValue);
    if(selectedValue === '3'){
      console.log(55);
    } else{
      console.log('ya broke');
    }
  });
});

function validateForm() {
  const serviceSelect = document.getElementById('form').value;
  console.log(serviceSelect);
    const firstName = document.querySelector('#first-name').value.trim();
    const lastName = document.querySelector('#last-name').value.trim();
    const email = document.querySelector('#email').value.trim();
    const phone = document.querySelector('#phone').value.trim();
    const time = document.querySelector('#appointment-time').value.trim();
    const date = document.querySelector('#appointment-date').value.trim();
    const pickUp = document.querySelector('#pick-up').value.trim();
    const dropOff = document.querySelector('#drop-off').value.trim();
    const passengers = document.querySelector('#passengers').value.trim();
    const specialRequests = document.querySelector('#special-requests').value.trim();
    const submit = document.getElementById('submit');
    const errorMessages = [];
    if (!firstName) {
        errorMessages.push('First name is required');
        const firstName = document.querySelector('#first-name');
        firstName.classList = "form-control is-invalid";
    }else{
        const firstName = document.querySelector('#first-name')
        firstName.classList = "form-control is-valid";
    }

    if (!lastName) {
        errorMessages.push('Last name is required');
        const lastName = document.querySelector('#last-name')
        lastName.classList = "form-control is-invalid";
    } else{
        const lastName = document.querySelector('#last-name')
        lastName.classList = "form-control is-valid";
    }

    if (!email) {
        const email = document.querySelector('#email')
        errorMessages.push('Email is required');
        email.classList = "form-control is-invalid"
    } else if (!isValidEmail(email)) {
        const email = document.querySelector('#email')
        errorMessages.push('Email is invalid');
        email.classList = "form-control is-invalid"
    }else{
        const email = document.querySelector('#email')
        email.classList = "form-control is-valid";
    }


    if (!phone) {
        errorMessages.push('Phone number is required');
        const phone = document.querySelector('#phone');
        phone.classList = "form-control is-invalid"
    } else if (!isValidPhone(phone)) {
        errorMessages.push('Phone number is invalid');
        const phone = document.querySelector('#phone');
        phone.classList = "form-control is-invalid"
    }else{
        const phone = document.querySelector('#phone')
        phone.classList = "form-control is-valid";
    }

    if (!time) {
        errorMessages.push('Date and time of appointment is required');
        const time = document.querySelector('#appointment-time')
        time.classList = "form-control is-invalid"
    }else{
        const time = document.querySelector('#appointment-time')
        time.classList = "form-control is-valid";
    }
    if (!date) {
        errorMessages.push('Date and time of appointment is required');
        const date = document.querySelector('#appointment-date')
        date.classList = "form-control is-invalid"
    }else{
        const date = document.querySelector('#appointment-date')
        date.classList = "form-control is-valid";
    }

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

function isValidEmail(email) {
    // This regular expression checks if an email is valid
    const regex = /.+@.+\..+/;
    return regex.test(email);
}

function isValidPhone(phone) {
    // This regular expression checks if a phone number is valid
    const regex = /^\d{10}$/;
    return regex.test(phone);
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

const formSubmitBtn = document.getElementById('formSubmitBtn')
const formBackBtn = document.querySelector('.formbold-back-btn')
formSubmitBtn.addEventListener("click", function(event){
  event.preventDefault()
  console.log("yep");
  validateForm();
  
})
function next(event) {
  if(stepMenuOne.className == 'formbold-step-menu1 active') {
     

      stepMenuOne.classList.remove('active')
      stepMenuTwo.classList.add('active')

      stepOne.classList.remove('active')
      stepTwo.classList.add('active')

      formBackBtn.classList.add('active')
      formBackBtn.addEventListener("click", function (event) {
        event.preventDefault()

        stepMenuOne.classList.add('active')
        stepMenuTwo.classList.remove('active')

        stepOne.classList.add('active')
        stepTwo.classList.remove('active')

        formBackBtn.classList.remove('active')
        document.getElementById('form').value = 'Select Service'
        console.log("im going back");
        if(stepMenuThree.className == 'formbold-step-menu3 active') {
          stepMenuTwo.classList.add('active')
          stepMenuThree.classList.remove('active')
    
          stepTwo.classList.add('active')
          stepThree.classList.remove('active')
    
          // formBackBtn.classList.remove('active')
          formSubmitBtn.textContent = "Next"
        }

      })

    } else if(stepMenuTwo.className == 'formbold-step-menu2 active') {
      const time = document.querySelector('#appointment-time').value.trim();
      const date = document.querySelector('#appointment-date').value.trim();
      const pickUp = document.querySelector('#pick-up').value.trim();
      const dropOff = document.querySelector('#drop-off').value.trim();
      const passengers = document.querySelector('#passengers').value.trim();
      const specialRequests = document.querySelector('#special-requests').value.trim();
      const confirmdate = document.getElementById('confirmdate')
      const confirmtime = document.getElementById('confirmtime');
      const confirmpickup = document.getElementById('confirmpickup');
      const confirmdropoff = document.getElementById('confirmdropoff');
      const confirmpassengers = document.getElementById('confirmpassengers');
      const confirmspecial = document.getElementById('confirmspecial');
        function to12Hour(time) {
          let [h, m] = time.split(':').map(Number);
          return `${((h + 11) % 12) + 1}:${m.toString().padStart(2, '0')} ${h < 12 ? 'AM' : 'PM'}`;
        }
      
      confirmdate.textContent = " " + date
        confirmtime.textContent = " " + to12Hour(time)
      
      confirmpickup.textContent = " " + pickUp
      confirmdropoff.textContent = " " + dropOff
      confirmpassengers.textContent = " " + passengers
      confirmspecial.textContent = " " + specialRequests

      // event.preventDefault()

      stepMenuTwo.classList.remove('active')
      stepMenuThree.classList.add('active')

      stepTwo.classList.remove('active')
      stepThree.classList.add('active')

      // formBackBtn.classList.remove('active')
      formSubmitBtn.textContent = "Submit"
      // document.getElementById('nextbtn').style.display = "none";
      // document.getElementById('submit').style.display = "block";
      // submitForm();
    } else if(stepMenuThree.className == 'formbold-step-menu3 active') {
 stepMenuThree.classList.remove('active')
      // stepMenuFour.classList.add('active')

      stepThree.classList.remove('active')
      stepFour.classList.add('active')
      document.getElementById('formsteps').style.display = "none";
      formSubmitBtn.style.display="none";
      // formBackBtn.classList.add('active')
       sendemail();
    } 

}

function  submitForm(){
        
  
    alert('Appointment form submitted successfully');
    const form = document.querySelector('#appointment-form');
    form.reset();
    document.location.replace('homepage.html')
     }
     const submit = document.getElementById('submit');
if (submit) {
  submit.addEventListener("click",function(event){
     event.preventDefault();
     console.log("jo");
    //  
//  validateForm();

})
}

function sendemail(){
    const firstName = document.querySelector('#first-name').value.trim();
    const lastName = document.querySelector('#last-name').value.trim();
    const useremail = document.querySelector('#email').value.trim();
    const phone = document.querySelector('#phone').value.trim();
    const time = document.querySelector('#appointment-time').value.trim();
    const date = document.querySelector('#appointment-date').value.trim();
    const pickUp = document.querySelector('#pick-up').value.trim();
    const dropOff = document.querySelector('#drop-off').value.trim();
    const passengers = document.querySelector('#passengers').value.trim();
    const specialRequests = document.querySelector('#special-requests').value.trim();
        newPrice = document.getElementById('confirmprice').textContent;

    function to12Hour(time) {
      let [h, m] = time.split(':').map(Number);
      return `${((h + 11) % 12) + 1}:${m.toString().padStart(2, '0')} ${h < 12 ? 'AM' : 'PM'}`;
    }
    // reformats phones nubmers
    function reformatPhoneNumber(phoneNumber) {
      // Remove non-numeric characters
      const cleaned = ('' + phoneNumber).replace(/\D/g, '');
    
      // Check if the cleaned phone number has the right length
      const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
      if (match) {
        // Format the phone number
        const formatted = '(' + match[1] + ') ' + match[2] + '-' + match[3];
        return formatted;
      }
      return null;
    }
  
const readableTime = to12Hour(time);
const formattedPhoneNumber = reformatPhoneNumber(phone);

    // appointmentTimeInput.addEventListener('input', (event) => {
    //     const timeValue = event.target.value;
    //     const [hours, minutes] = timeValue.split(':');
    //     let formattedHours = hours % 12 || 12;
    //     const period = hours < 12 ? 'AM' : 'PM';
    //     const formattedTime = `${formattedHours}:${minutes} ${period}`;
    //     event.target.value = formattedTime;
    //   });
    console.log("hi email is being sent to client")
    console.log(newPrice);
    Email.send({
     
            Host : "smtp.elasticemail.com",
            Username : "gymhomies1234@gmail.com",
            Password : "5BACC0A66B18ECD81D1D1CAF56C951AE2C6F",
            To : `${useremail}`,
            From : `gymhomies1234@gmail.com`,
            Subject : 'Thomson Team Car Service',
            Body : `<!DOCTYPE html>
            <html>
              <head>
                <title>Confirmation of Car Ride Appointment</title>
                <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Anton&family=Great+Vibes&display=swap" rel="stylesheet">
                <style>
                body {
                  margin: 0;
                  padding: 0;
                  font-family: Arial, sans-serif;
                }
                .container {
                  margin: 20px auto;
                  padding: 20px;
                  max-width: 600px;
                  background-color: rgba(255, 255, 255, 0.8);
                  border-radius: 10px;
                  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
                }
                h1, h2 {
                  color: #fff;
                  text-align: center;
                  margin-top: 0;
                }
                h2 {
                  font-size: 1.5em;
                  margin-bottom: 20px;
                }
                table {
                  width: 100%;
                  border-collapse: collapse;
                  margin-bottom: 20px;
                }
                th {
                  font-weight: normal;
                  text-align: left;
                  padding: 10px 0;
                  width: 40%;
                  vertical-align: top;
                }
                td {
                  padding: 10px 0;
                  width: 60%;
                  vertical-align: top;
                }
                .button-container {
                  text-align: center;
                  margin-top: 20px;
                }
                .button {
                  display: inline-block;
                  background-color: #007bff;
                  color: #fff;
                  text-decoration: none;
                  padding: 10px 20px;
                  border-radius: 5px;
                }
                </style>
              </head>
              <body>
                <div class="container">
                  <div class="image-container"> <span style="font-family: 'Great Vibes', cursive; position: absolute; color: black;font-size: 30px; right: 40%;"> Thomson Team Car Service </span>
                    <img src="https://wallpapercave.com/wp/wp1955348.jpg" alt="Limo" class="limo-image" style="max-height: 400px; width: 100%; overflow: hidden;">
                  </div>
                  <p>Dear ${firstName} ${lastName},</p>
                    <br>
                    We are delighted to confirm your upcoming car ride with Thomson Team Car Service, the premier car service in town. Our team of professional chauffeurs is dedicated to providing you with a luxurious and comfortable ride to your destination.
                    <br>
                    At Thomson Team Car Service, we pride ourselves on offering the highest quality of service and exceeding our clients' expectations. We are committed to making your experience with us as smooth and enjoyable as possible.
                    <br>
                    Thank you for choosing Thomson Team Car Service for your transportation needs. We look forward to serving you and providing you with an exceptional experience.</p>
                  <table>
                    <tr>
                      <th>Date</th>
                      <td>${date}</td>
                    </tr>
                    <tr>
                      <th>Time</th>
                      <td>${readableTime}</td>
                    </tr>
                    <tr>
                      <th>Pick-up location</th>
                      <td>${pickUp}</td>
                    </tr>
                    <tr>
                      <th>Drop-off location</th>
                      <td>${dropOff}</td>
                    </tr>
                    <tr>
                      <th>Car type</th>
                      <td>2018 Lincoln MKX</td>
                    </tr>
                    <tr>
                    <th>Passengers</th>
                    <td>${passengers}</td>
                  </tr>
                  <tr>
                    <th>Special requests</th>
                    <td>${specialRequests}</td>
                  </tr>
                  <tr>
                    <th>Price</th>
                    <td>${newPrice}</td>
                  </tr>
                </table>
                <p>If you need to make any changes to your reservation, please contact us as soon as possible so we can make the necessary adjustments.</p>
                // <p>To confirm your appointment, please click the button below:</p>
                // <div class="button-container">
                //   <a href="tel:(612)-999-5382" class="button">(612) 999-5382</a>
                // </div>
                <p>Thank you for choosing Thomson Team Car Service. We look forward to providing you with a top-notch car ride experience.</p>
                <p>Best regards,</p>
                <p>The Thomson Team Car Service Team</p>
              </div>
              
            `
        }).then(
          // message => alert(message),
          confirm('Appointment form submitted successfully'),
          // document.location.replace('index.html')
          
        );
        console.log("email sent to me");
        Email.send({
            Host : "smtp.elasticemail.com",
            Username : "gymhomies1234@gmail.com",
            Password : "5BACC0A66B18ECD81D1D1CAF56C951AE2C6F",
            To : [`yamopiw217@fectode.com`,`abduljabar.nur.5@gmail.com`],
            From : `gymhomies1234@gmail.com`,
            Subject : `Order from ${firstName} ${lastName}`,
            Body : `<!DOCTYPE html>
            <html>
              <head>
                <title>Confirmation of Car Ride Appointment</title>
                <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Anton&family=Great+Vibes&display=swap" rel="stylesheet">
        <style>
        body {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
            background-color: #f5f5f5;
        }
        .container {
          margin: 20px auto;
          padding: 20px;
          max-width: 600px;
          background-color: #ffffff;
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
      }
  
      .image-container {
          position: relative;
          text-align: center;
      }
  
      .image-container .limo-image {
          max-height: 400px;
          width: 100%;
          overflow: hidden;
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
      }
  
      .image-container .company-name {
          font-family: 'Great Vibes', cursive;
          position: absolute;
          color: black;
          font-size: 30px;
          right: 40%;
          bottom: 20px;
      }
  
      table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 20px;
      }
  
      th {
          font-weight: normal;
          text-align: left;
          padding: 10px 0;
          width: 40%;
          vertical-align: top;
          border-bottom: 1px solid #ddd;
      }
  
      td {
          padding: 10px 0;
          width: 60%;
          vertical-align: top;
          border-bottom: 1px solid #ddd;
      }
  </style>
  
              </head>
              <body>
                <div class="container">
                  <p>Costumer Name ${firstName} ${lastName},</p>
                    <table>
                    <tr>
                      <th>Date</th>
                      <td>${date}</td>
                    </tr>
                    <tr>
                      <th>Time</th>
                      <td>${readableTime}</td>
                    </tr>
                    <tr>
                      <th>Pick-up location</th>
                      <td>${pickUp}</td>
                    </tr>
                    <tr>
                      <th>Drop-off location</th>
                      <td>${dropOff}</td>
                    </tr>
                    <tr>
                      <th>Car type</th>
                      <td>2018 Lincoln MKX</td>
                    </tr>
                    <tr>
                    <th>Passengers</th>
                    <td>${passengers}</td>
                  </tr>
                  <tr>
                    <th>Phone Number</th>
                    <td>${formattedPhoneNumber}</td>
                  </tr>
                  <tr>
                    <th>Email</th>
                    <td>${useremail}</td>
                  </tr>
                  <tr>
                    <th>Price</th>
                    <td>${newPrice}</td>
                  </tr>
                  <tr>
                  <th>Special Request</th>
                  <td>${specialRequests}</td>
                </tr>
                </table>
                <p>Total Town Car Service</p>
              </div>
              
            `
        })
       
}

