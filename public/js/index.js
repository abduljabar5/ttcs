// const submitbtn = document.getElementById('submitcomment');
// console.log("ji");
//  submitbtn.addEventListener("click",function(event){
// const useremail = document.getElementById('title').value;

//     const message = document.getElementById('comment').value;

//     event.preventDefault();
//     console.log("ko");
//     console.log(useremail, message);

//     Email.send({
//     Host : "smtp.elasticemail.com",
//     Username : "gymhomies1234@gmail.com",
//     Password : "5BACC0A66B18ECD81D1D1CAF56C951AE2C6F",
//     To : 'tayudope@mailgolem.com',
//     From : "gymhomies1234@gmail.com",
//     Subject : "This is the subject",
//     Body : `<!DOCTYPE html>
//     <html>
//       <head>
//         <title>Confirmation of Car Ride Appointment</title>
//         <link rel="preconnect" href="https://fonts.googleapis.com">
// <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
// <link href="https://fonts.googleapis.com/css2?family=Anton&family=Great+Vibes&display=swap" rel="stylesheet">
//         <style>
//         body {
//           margin: 0;
//           padding: 0;
//           font-family: Arial, sans-serif;
//         }
//         .container {
//           margin: 20px auto;
//           padding: 20px;
//           max-width: 600px;
//           background-color: rgba(255, 255, 255, 0.8);
//           border-radius: 10px;
//           box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
//         }
//         h1, h2 {
//           color: #fff;
//           text-align: center;
//           margin-top: 0;
//         }
//         h2 {
//           font-size: 1.5em;
//           margin-bottom: 20px;
//         }
//         table {
//           width: 100%;
//           border-collapse: collapse;
//           margin-bottom: 20px;
//         }
//         th {
//           font-weight: normal;
//           text-align: left;
//           padding: 10px 0;
//           width: 40%;
//           vertical-align: top;
//         }
//         td {
//           padding: 10px 0;
//           width: 60%;
//           vertical-align: top;
//         }
//         .button-container {
//           text-align: center;
//           margin-top: 20px;
//         }
//         .button {
//           display: inline-block;
//           background-color: #007bff;
//           color: #fff;
//           text-decoration: none;
//           padding: 10px 20px;
//           border-radius: 5px;
//         }
//         </style>
//       </head>
//       <body>
//         <div class="container">
//           <div class="image-container"> <span style="font-family: 'Great Vibes', cursive; position: absolute; color: rgb(255, 255, 255);font-size: 30px; right: 40%;"> Thomson Team Car Service </span>
//             <img src="https://wallpapercave.com/wp/wp1955348.jpg" alt="Limo" class="limo-image" style="max-height: 400px; width: 100%; overflow: hidden;">
//           </div>
//           <h1>Confirmation of Car Ride Appointment</h1>
//           <p>Dear [Client Name],</p>
//           <p>Dear [Client Name],
//             <br>
//             We are delighted to confirm your upcoming car ride with Thomson Team Car Service, the premier car service in town. Our team of professional chauffeurs is dedicated to providing you with a luxurious and comfortable ride to your destination.
//             <br>
//             At Thomson Team Car Service, we pride ourselves on offering the highest quality of service and exceeding our clients' expectations. We are committed to making your experience with us as smooth and enjoyable as possible.
//             <br>
//             Thank you for choosing Thomson Team Car Service for your transportation needs. We look forward to serving you and providing you with an exceptional experience.</p>
//           <table>
//             <tr>
//               <th>Date</th>
//               <td>[Date of Appointment]</td>
//             </tr>
//             <tr>
//               <th>Time</th>
//               <td>[Time of Appointment]</td>
//             </tr>
//             <tr>
//               <th>Pick-up location</th>
//               <td>[Pick-up Address]</td>
//             </tr>
//             <tr>
//               <th>Drop-off location</th>
//               <td>[Drop-off Address]</td>
//             </tr>
//             <tr>
//               <th>Car type</th>
//               <td>[Type of Car]</td>
//             </tr>
//             <tr>
//             <th>Passengers</th>
//             <td>[Number of Passengers]</td>
//           </tr>
//           <tr>
//             <th>Special requests</th>
//             <td>[Special Requests]</td>
//           </tr>
//           <tr>
//             <th>Price</th>
//             <td>[Price of Car Ride]</td>
//           </tr>
//         </table>
//         <p>If you need to make any changes to your reservation, please contact us as soon as possible so we can make the necessary adjustments.</p>
//         // <p>To confirm your appointment, please click the button below:</p>
//         // <div class="button-container">
//         //   <a href="[Link to Confirm Appointment]" class="button">Confirm Appointment</a>
//         // </div>
//         <p>Thank you for choosing Thomson Team Car Service. We look forward to providing you with a top-notch car ride experience.</p>
//         <p>Best regards,</p>
//         <p>The Thomson Team Car Service Team</p>
//       </div>
      
//     `
// }).then(
//   message => alert(message)
// );
//  })


 function validateForm() {
  
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
  console.log(firstName);
    if (!firstName) {
        errorMessages.push('First name is required');
        const firstName = document.querySelector('#first-name');
        firstName.classList = "form-control is-invalid";
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
    }

    if (!phone) {
        errorMessages.push('Phone number is required');
        const phone = document.querySelector('#phone');
        phone.classList = "form-control is-invalid"
    } else if (!isValidPhone(phone)) {
        errorMessages.push('Phone number is invalid');
        const phone = document.querySelector('#phone');
        phone.classList = "form-control is-invalid"
    }

    if (!time) {
        errorMessages.push('Date and time of appointment is required');
        const time = document.querySelector('#appointment-time')
        time.classList = "form-control is-invalid"
    }
    if (!date) {
        errorMessages.push('Date and time of appointment is required');
        const date = document.querySelector('#appointment-date')
        date.classList = "form-control is-invalid"
    }

    if (!pickUp) {
        errorMessages.push('Pick up location is required');
        const pickUp = document.querySelector('#pick-up')
        pickUp.classList = "form-control is-invalid"
    }

    if (!dropOff) {
        errorMessages.push('Drop off location is required');
        const dropOff = document.querySelector('#drop-off')
        dropOff.classList = "form-control is-invalid"
    }

    if (!passengers) {
        errorMessages.push('Number of passengers is required');
        const passengers = document.querySelector('#passengers')
        passengers.classList = "form-control is-invalid"
    } else if (!isValidPassengers(passengers)) {
        errorMessages.push('Number of passengers should be between 1 and 10');
        const passengers = document.querySelector('#passengers')
        passengers.classList = "form-control is-invalid"
    }

    if (errorMessages.length > 0) {
        // showErrors(errorMessages);
    } 
    else {
        submitForm();
        // console.log(errorMessages);
    }
}

function isValidEmail(email) {
    // This regular expression checks if an email is valid
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
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
function  submitForm(){
        
   sendemail();
    alert('Appointment form submitted successfully');
    const form = document.querySelector('#appointment-form');
    form.reset();
    document.location.replace('homepage.html')
     }
   
submit.addEventListener("click",function(event){
     event.preventDefault();
     console.log("jo");
    //  submitForm();
 validateForm();

})
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
    // appointmentTimeInput.addEventListener('input', (event) => {
    //     const timeValue = event.target.value;
    //     const [hours, minutes] = timeValue.split(':');
    //     let formattedHours = hours % 12 || 12;
    //     const period = hours < 12 ? 'AM' : 'PM';
    //     const formattedTime = `${formattedHours}:${minutes} ${period}`;
    //     event.target.value = formattedTime;
    //   });
  
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
                      <td>${time}</td>
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
                    <td>$60</td>
                  </tr>
                </table>
                <p>If you need to make any changes to your reservation, please contact us as soon as possible so we can make the necessary adjustments.</p>
                // <p>To confirm your appointment, please click the button below:</p>
                // <div class="button-container">
                //   <a href="[Link to Confirm Appointment]" class="button">Confirm Appointment</a>
                // </div>
                <p>Thank you for choosing Thomson Team Car Service. We look forward to providing you with a top-notch car ride experience.</p>
                <p>Best regards,</p>
                <p>The Thomson Team Car Service Team</p>
              </div>
              
            `
        }).then(
          message => alert(message)
        );
        Email.send({
            Host : "smtp.elasticemail.com",
            Username : "gymhomies1234@gmail.com",
            Password : "5BACC0A66B18ECD81D1D1CAF56C951AE2C6F",
            To : `abduljabar.nur.5@gmail.com`,
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
                      <td>${time}</td>
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
                    <td>${phone}</td>
                  </tr>
                  <tr>
                    <th>Email</th>
                    <td>${useremail}</td>
                  </tr>
                  <tr>
                    <th>Price</th>
                    <td>$60</td>
                  </tr>
                </table>
                <p>If you need to make any changes to your reservation, please contact us as soon as possible so we can make the necessary adjustments.</p>
                // <p>To confirm your appointment, please click the button below:</p>
                // <div class="button-container">
                //   <a href="[Link to Confirm Appointment]" class="button">Confirm Appointment</a>
                // </div>
                <p>Thank you for choosing Thomson Team Car Service. We look forward to providing you with a top-notch car ride experience.</p>
                <p>Best regards,</p>
                <p>The Thomson Team Car Service Team</p>
              </div>
              
            `
        })
}
