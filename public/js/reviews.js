const reviewsList = document.getElementById('reviews-list');

function addReview(name, rating, comment) {
    console.log("hi save");
    console.log(name, rating, comment);
  const newReview = document.createElement('section');
  newReview.classList.add('review');

  const stars = '&#9733;'.repeat(rating);
  const score = document.createElement('span');
  score.classList.add('score');
  score.textContent = rating;

  const reviewer = document.createElement('div');
  reviewer.classList.add('reviewer');
  reviewer.textContent = `- ${name}`;

  const reviewContent = document.createElement('div');
  reviewContent.innerHTML = `
    <p>${comment}</p>
    <h2 class="stars">${stars}</h2>
  `;

  newReview.appendChild(reviewContent);
  newReview.appendChild(score);
  newReview.appendChild(reviewer);
  reviewsList.prepend(newReview);

  // Save the review locally
 
}
const submitreview = document.getElementById('submitreview');
  submitreview.addEventListener("click", function newReview () {
    const name = document.getElementById('name').value;
    const rating = document.getElementById('rating').value;
    const comment = document.getElementById('comment').value;
    console.log(name, rating, comment);
    const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
     reviews.push({ name, rating, comment });
  localStorage.setItem('reviews', JSON.stringify(reviews));
  document.location.replace('reviews.html')
  })
function displayReviews() {
  const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
  reviews.forEach((review) => {
    addReview(review.name, review.rating, review.comment);
  });
}

// Display the saved reviews when the page loads
displayReviews();

const commentForm = document.querySelector('form');
commentForm.addEventListener('submit', function(event) {
  event.preventDefault();
//   const name = document.getElementById('name').value;
//   const rating = document.getElementById('rating').value;
//   const comment = document.getElementById('comment').value;
//   console.log(name, rating, comment);
//   addReview(name, rating, comment);

  alert(`Thank you for submitting your review of Thomson Team Car Service! Your feedback is important to us.

  Please note that your review will be added to our site once it has been processed. This typically takes up to 48 hours, but can take longer in some cases.

  We appreciate your patience and understanding, and look forward to sharing your thoughts with our community of customers.

  Thank you again for choosing Thomson Team Car Service for your transportation needs!
  `);

  commentForm.reset();
});


 