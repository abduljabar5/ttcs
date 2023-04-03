const navbar = document.querySelector('.navbar');
const textcolor = document.getElementById('textcolor');
const nav = document.getElementById('nav');
const active = document.querySelector('.active');
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    navbar.classList.add('scrolled');
    textcolor.style.color = 'white'
activate();
  } else {
    navbar.classList.remove('scrolled');
    textcolor.className = 'nav-link text-dark'
  }
});



function activate (){
    if (active){
        active.classList ='nav-link active bgc'
    }
}
