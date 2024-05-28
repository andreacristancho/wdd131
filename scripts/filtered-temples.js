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





  const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },

    {
        templeName: "Bogotá Colombia",
        location: "Bogotá DC, Colombia",
        dedicated: "1999, April, 26",
        area: 53500,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/bogota-colombia-temple/bogota-colombia-temple-7733-main.jpg?width=400&height=250"
      },

      {
        templeName: "Cali Colombia",
        location: "Cali, Colombia",
        dedicated: "2024, May, 1",
        area: 9500,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/cali-colombia-temple/cali-colombia-temple-22101-main.jpg"
      },

      {
        templeName: "Barranquilla Colombia",
        location: "Barranquilla, Colombia",
        dedicated: "2018, Dec, 9",
        area: 25349,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/barranquilla-colombia-temple/barranquilla-colombia-temple-1846-main.jpg"
      },
    
  ];

  const templesElement = document.querySelector("#temples");
  const homeSection = document.querySelector("#homeTitle");

//let templeList = [];


  //Recorrer la matriz y crear tarjetas del templo con: nombre, ubicac,
  //fecha dedicac, área, imagen y carga diferida (lazyloading)

  const displayTemples = (temples) => {

    templesElement.innerHTML ="";

    temples.forEach((temple) => {
        const article = document.createElement("article");
        
        const h3 = document.createElement("h3");
        h3.textContent =temple.templeName;

        const pLocation = document.createElement("p");
        pLocation.innerHTML = `<span class="label">Location: </span> ${temple.location}`;

        const pDedicated = document.createElement("p");
        pDedicated.innerHTML = `<span class="label"> Dedicated: </span> ${temple.dedicated}`;

        const pArea = document.createElement("p");
        pArea.innerHTML = `<span class="label"> Area: </span> ${temple.area} square feet`;

        const picTemple = document.createElement("img");
        picTemple.src = temple.imageUrl;
        picTemple.setAttribute("alt", `${temple.templeName} Temple`)
        picTemple.setAttribute("loading", "lazy") //Código para lazy loading desde JS
        
        article.appendChild(h3);
        article.appendChild(pLocation);
        article.appendChild(pDedicated);
        article.appendChild(pArea);
        article.appendChild(picTemple);

        templesElement.appendChild(article);

    });
   }

displayTemples(temples);


const homeLink = document.querySelector("#Home");
const oldLink = document.querySelector("#Old");
const newLink = document.querySelector("#New");
const largeLink = document.querySelector("#Large");
const smallLink = document.querySelector("#Small");


homeLink.addEventListener("click", (e) => {
  e.preventDefault();
  displayTemples(temples);
  homeTitle.innerText = "Home Temples";
});

oldLink.addEventListener("click", (e) => {
  e.preventDefault();
  const filteredTemples = temples.filter((temple) => {
    const [year] = temple.dedicated.split(", ");
    return parseInt(year) < 1900;
  });
  displayTemples(filteredTemples);
  homeTitle.innerText = "Old Temples";
});

newLink.addEventListener("click", (e) => {
  e.preventDefault();
  const filteredTemples = temples.filter((temple) => {
    const [year] = temple.dedicated.split(", ");
    return parseInt(year) > 2000;
  });
  displayTemples(filteredTemples);
  homeTitle.innerText = "New Temples";
});

largeLink.addEventListener("click", (e) => {
  e.preventDefault();
  const filteredTemples = temples.filter((temple) => temple.area > 90000);
  displayTemples(filteredTemples);
  homeTitle.innerText = "Large Temples";
});

smallLink.addEventListener("click", (e) => {
  e.preventDefault();
  const filteredTemples = temples.filter((temple) => temple.area < 10000);
  displayTemples(filteredTemples);
  homeTitle.innerText = "Small Temples";
});

displayTemples(temples);











