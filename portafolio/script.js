document.getElementById('clickButton').addEventListener('click', function() {
    const mainInfo = document.getElementById('main-info');
    const mainContainer = document.getElementById('main-container');
  
    mainInfo.style.transform = 'translateY(-100%)';
    mainInfo.style.opacity = '0';
  
    setTimeout(() => {
      mainContainer.style.transform = 'translateY(0)';
      mainContainer.style.opacity = '1';
    }, 500); // Ajusta este valor al tiempo de la transición en CSS (0.5s = 500ms)
  });
  
  