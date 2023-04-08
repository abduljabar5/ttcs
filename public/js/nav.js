

const navbar = document.querySelector('.navbar');
const textcolor = document.getElementById('textcolor');
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    navbar.classList.add('scrolled');
    if (textcolor) {
          textcolor.style.color = 'white'

    }
  } else {
    navbar.classList.remove('scrolled');
  }
});

const nav = document.getElementById('nav');
const active = document.querySelector('.active');

function activate (){
    if (active){
        active.classList ='nav-link active bgc'
    }
}
activate();