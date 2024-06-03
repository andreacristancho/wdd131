
document.addEventListener("DOMContentLoaded", function() {
    const counterElement = document.getElementById("counter");
    let submissionCount = localStorage.getItem("submissionCount") || 0; // Obtener el conteo actual del localStorage
  
    // Mostrar el conteo actual en el elemento
    counterElement.textContent = `Form submissions: ${submissionCount}`;
  
    const form = document.querySelector(".wf1");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault(); // Evitar que el formulario se envíe automáticamente
  
      // Incrementar el conteo de envíos
      submissionCount++;
      
      // Guardar el nuevo conteo en el localStorage
      localStorage.setItem("submissionCount", submissionCount);
  
      // Actualizar el texto del contador
      counterElement.textContent = `Form submissions: ${submissionCount}`;
  
   
    });
  });