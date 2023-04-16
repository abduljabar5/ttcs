const navbar1 = document.querySelector('.navbar');
const textcolor1 = document.getElementById('textcolor');
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    navbar1.classList.add('scrolled');
    if (textcolor1) {
          textcolor1.style.color = 'white'

    }
  } else {
    navbar1.classList.remove('scrolled');
  }
});

const active1 = document.querySelector('.active');

function activate (){
    if (active1){
        active1.classList ='nav-link active bgc'
    }
}
activate();