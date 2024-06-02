document.addEventListener("DOMContentLoaded", function () {
    // Last modified information
    const currentYearElement = document.getElementById("currentYear");
    const currentYear = new Date().getFullYear();
    currentYearElement.textContent = `© ${currentYear}`;
  
    const lastModified = document.getElementById("lastModified");
    const lastModifiedDate = document.lastModified;
    lastModified.textContent = `Last Modified: ${lastModifiedDate}`;
  
   
  });
  
  
  const hamButton = document.querySelector("#menu");
  const navigation = document.querySelector("nav");
  
  hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
  });
  
  
  function evaluateForm() {
    const experience = parseInt(document.getElementById('experience').value);
    const engagement = parseInt(document.getElementById('engagement').value);
    let score = 0;

    // Asignar puntaje basado en la experiencia
    score += experience;

    // Asignar puntaje basado en el compromiso
    score += engagement;

    // Mostrar el resultado
    const result = document.getElementById('result');
    result.textContent = `Your score is: ${score}`;

    // Acciones basadas en el puntaje
    if (score <= 2) {
        result.textContent += " This profile indicates a basic profile. You are starting out and have an initial interest in developing your skills and knowledge in the area. You will have to dedicate time and effort to achieve the results you desire";
    } else if (score <= 4) {
        result.textContent += " This profile reflects an intermediate profile. With a good understanding of the key practices and processes, you will be able to move interesting projects forward. ";
    } else {
        result.textContent += " This profile shows a high, highlighting your ability to lead and apply advanced knowledge in the field. Take advantage of your experience and availability to carry out large-scale projects.";
    }
}