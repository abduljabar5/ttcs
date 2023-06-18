const reviewsList = document.getElementById('reviews-list');

function displayReview(name, subject, rating, comment, dateTimeString) {
  const newReview = document.createElement('section');
  newReview.classList.add('review');

  const stars = '&#9733;'.repeat(rating) + '&#9734;'.repeat(5 - rating);
  const score = document.createElement('span');
  score.classList.add('score');
  score.textContent = rating;

  const reviewer = document.createElement('div');
  reviewer.classList.add('new-reviewer');
  reviewer.textContent = `Reviewed by  ${name} on ${dateTimeString}`;

  const reviewSubject = document.createElement('h2');
  reviewSubject.textContent = subject;

  const starsContainer = document.createElement('div');
  starsContainer.innerHTML = `
    <div class="rating">
      <div class="stars">${stars}</div>
      <span class="score">${rating}.0</span>
    </div>
  `;
  
  const reviewContent = document.createElement('div');
  reviewContent.innerHTML = `
    <p>${comment}</p>
  `;
  
  newReview.appendChild(reviewSubject);
  newReview.appendChild(reviewContent);
  newReview.appendChild(starsContainer);
  newReview.appendChild(reviewer);
  reviewsList.prepend(newReview);
}
function addReview(name, subject, rating, comment) {
  const now = new Date();
  const dateTimeString = now.toLocaleString();

  displayReview(name, subject, rating, comment, dateTimeString);

  // Save the review locally
  const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
  reviews.push({ name, subject, rating, comment, dateTimeString });
  localStorage.setItem('reviews', JSON.stringify(reviews));
}
function displayReviews() {
  const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
  reviews.forEach((review) => {
    displayReview(review.name, review.subject, review.rating, review.comment, review.dateTimeString);
  });
}

// Display the saved reviews when the page loads
displayReviews();

const commentForm = document.querySelector('form');
commentForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const subject = document.getElementById('subject').value;
  const rating = document.getElementById('rating').value;
  const comment = document.getElementById('comment').value;
  addReview(name, subject, rating, comment);
  commentForm.reset();
});

const submitreview = document.getElementById('submitreview');
submitreview.addEventListener("click", function () {
  if (commentForm.checkValidity()) {
    const name = document.getElementById('name').value;
    const subject = document.getElementById('subject').value;
    const rating = document.getElementById('rating').value;
    const comment = document.getElementById('comment').value;
    addReview(name, subject, rating, comment);
    window.location.reload();
    commentForm.reset();
  } else {
    commentForm.reportValidity();
  }
});
