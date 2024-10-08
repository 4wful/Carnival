// Obtener el botón
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

// Mostrar/ocultar el botón dependiendo del scroll
window.onscroll = function() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
};

// Cuando el usuario haga clic en el botón, vuelve al tope
scrollToTopBtn.addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});