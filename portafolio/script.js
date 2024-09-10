document.addEventListener('DOMContentLoaded', function() {
  const clickButton = document.getElementById('clickButton');
  const mainInfo = document.getElementById('main-info');
  const mainContainer = document.getElementById('main-container');

  clickButton.addEventListener('click', function() {
      mainInfo.style.transform = 'translateY(-100%)';
      mainInfo.style.opacity = '0';

      setTimeout(() => {
          mainContainer.style.transform = 'translateY(0)';
          mainContainer.style.opacity = '1';

          // Redirige a una página específica después de la animación
          window.location.href = 'sobre_mi.html'; // Cambia esto por la URL a la que quieres redirigir
      }, 500); // Ajusta este valor al tiempo de la transición en CSS (0.5s = 500ms)
  });
});
