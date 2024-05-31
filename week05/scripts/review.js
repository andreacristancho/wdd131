

  document.addEventListener("DOMContentLoaded", function () {

    // Contador para la página Review.html
    let reviewCount = localStorage.getItem('reviewCount');

    // Si el contador no existe, inicializarlo a 0
    if (!reviewCount) {
      reviewCount = 0;
    }

    // Incrementar el contador
    reviewCount = parseInt(reviewCount) + 1;

    // Guardar el nuevo valor en localStorage
    localStorage.setItem('reviewCount', reviewCount);

    // Mostrar el contador al usuario
    const counterElement = document.getElementById('reviewCounter');
    if (counterElement) {
      counterElement.textContent = `You have submitted ${reviewCount} reviews.`;
    }
  });

  
 