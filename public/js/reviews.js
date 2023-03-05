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
    <h2>${stars}</h2>
    <p>${comment}</p>
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


    const lis = document.querySelectorAll("li");
const lbs = document.querySelectorAll(".lb");
const ul = document.querySelector("ul");
const lineDash = document.querySelector(".line-dash");


var dashOrigin = -35; //pixels
var selectedLi = -785; //pixels
var speed = 500; //move this many pixels in one second.
var distance = 0;
var time = 0;

// initial animation and class for HOME
TweenLite.to(lbs[3], 0.6, {
					y: -43,
					ease: Bounce.easeOut,
					delay: 1
				});

lis[3].classList.add("active");

//push all the bottom lines down.
function pushDownLb() {
	for(let k = 0; k < lbs.length; ++k)
		TweenLite.to(lbs[k], 0.5, {
					y: 0,
					ease:  Power3.easeOut
				});
}

ul.addEventListener(
	"mouseleave",
	function(e) {
		// to avoid a bug in chrome that sometimes triggers mouseleave on click
		// and the relatedTarget comes up null
		if (e.relatedTarget) {
			distance = Math.abs(dashOrigin - selectedLi);
			time = distance / speed;
			dashOrigin = selectedLi;
			if (time) {
				// overlaping tweens would give a zero time
				TweenLite.to(lineDash, time, {
					strokeDashoffset: selectedLi,
					ease: Bounce.easeOut
				});
			} //if
		} //if
	},
	false
);

for (let i = 0; i < 4; ++i) {
	lis[i].addEventListener("mouseover", function() {
		distance = Math.abs(-250 * i - 35 - dashOrigin);
		time = distance / speed;
		dashOrigin = -250 * i - 35;
		if (time) {
			TweenLite.to(lineDash, time, {
				strokeDashoffset: -250 * i - 35,
				ease: Bounce.easeOut
			});
		} //if
	});

	lis[i].addEventListener("click", function() {
		selectedLi = -250 * i - 35;
		pushDownLb();
		let current = document.getElementsByClassName("active");
		current[0].classList.remove("active");
		lis[i].classList.add("active");
		TweenLite.to(lbs[i], 0.5, {
					y: -43,
					ease: Bounce.easeOut
				});
	});
}