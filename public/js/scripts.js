const navMenu = document.querySelector('.navbar');
const textcolor = document.getElementById('textcolor');
const nav = document.getElementById('nav');
const active = document.querySelector('.active');
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    navMenu.classList.add('scrolled');
    textcolor.style.color = 'white'
activate();
  } else {
    navMenu.classList.remove('scrolled');
    textcolor.className = 'nav-link text-dark'
  }
});



function activate (){
    if (active){
        active.classList ='nav-link active bgc'
    }
}
