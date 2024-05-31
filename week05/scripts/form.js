
  
  const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },

    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];


  document.addEventListener("DOMContentLoaded", function () {
    // Last modified information
    const currentYearElement = document.getElementById("currentYear");
    const currentYear = new Date().getFullYear();
    currentYearElement.textContent = `© ${currentYear}`;
  
    const lastModified = document.getElementById("lastModified");
    const lastModifiedDate = document.lastModified;
    lastModified.textContent = `Last Modified: ${lastModifiedDate}`;
  
   

    const productNameSelect = document.getElementById('productName');

    products.forEach(product => {
      const option = document.createElement('option');
      option.value = product.id;
      option.textContent = product.name;
      productNameSelect.appendChild(option);
    })


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

  
 


  