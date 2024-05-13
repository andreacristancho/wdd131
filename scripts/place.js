document.addEventListener("DOMContentLoaded", function () {
    // Last modified information
    const lastModified = document.getElementById("lastModified");
    const lastModifiedDate = document.lastModified;
    lastModified.textContent = `Last Modified: ${lastModifiedDate}`;
  });
  

  function calculateWindChill(temperature, windSpeed, unitPreference) {
    return unitPreference === '°C' ? Math.round(13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16)) : Math.round(35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16));
  }
  

  document.addEventListener("DOMContentLoaded", function () {
    // Obtener el elemento HTML donde se mostrará el factor de enfriamiento del viento
    var windChillElement = document.querySelector('#calculateWindChill');
  
    // Llamar a la función calculateWindChill con la temperatura de 27 °C y la velocidad del viento de 13 km/h
    var windChill = calculateWindChill(27, 13, '°C');
  
    // Mostrar el factor de enfriamiento del viento calculado en el elemento <td>
    windChillElement.textContent = windChill + "°C";
  });
