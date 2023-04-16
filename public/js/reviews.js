const reviewsList = document.getElementById('reviews-list');

function addReview(name, rating, comment) {
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
  const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
  reviews.push({ name, rating, comment });
  localStorage.setItem('reviews', JSON.stringify(reviews));
}

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
  const name = document.getElementById('name').value;
  const rating = document.getElementById('rating').value;
  const comment = document.getElementById('comment').value;
  addReview(name, rating, comment);
  commentForm.reset();
});

const submitreview = document.getElementById('submitreview');
submitreview.addEventListener("click", function () {
  if (commentForm.checkValidity()) {
    const name = document.getElementById('name').value;
    const rating = document.getElementById('rating').value;
    const comment = document.getElementById('comment').value;
    addReview(name, rating, comment);
window.location.reload();
    commentForm.reset();
  } else {
    commentForm.reportValidity();
  }
});
