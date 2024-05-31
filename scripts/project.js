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
  
  