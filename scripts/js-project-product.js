


document.addEventListener("DOMContentLoaded", function () {

  const products = [
    {
      activity: "Trainers",
      objective: "We provide interactive platforms to efficiently and effectively train your employees.",
      ubication: "Only Bogota",
      imageUrl:
        "https://media.istockphoto.com/id/1481697794/es/foto/manos-de-hombres-que-estudian-usando-una-computadora-port%C3%A1til-y-una-tableta.jpg?s=612x612&w=0&k=20&c=O8zVbsaxcX-1lA1z0IrCVQbxJVgl9mxkSPHu1oFeAPg="
    },
    {
      activity: "Investors",
      objective: " We provide detailed and visually appealing reports to help you make informed financial decisions. ",
      ubication: "National Service",
      imageUrl:
        "https://static.vecteezy.com/system/resources/thumbnails/008/808/066/small/saving-investment-trade-save-and-make-a-profit-with-interest-growing-money-plant-on-coins-finance-and-investment-concept-trading-trader-investor-invest-metaverse-free-photo.jpg"
    },
    {
      activity: "Suppliers",
      objective: " We facilitate access to relevant data to enhance collaboration and efficiency in your supply chain. ",
      ubication: "National Service",
      imageUrl:
        "https://media.istockphoto.com/id/1459660658/es/foto/mujer-joven-usando-la-tableta-digital-en-un-almac%C3%A9n.jpg?s=612x612&w=0&k=20&c=4qqe65dyuu8InTBP8Pt1i_EAqHpnxYq-8YAPYuD3fzk="
    },
  ];

  const productsElement = document.querySelector("#products");
  const homeSection = document.querySelector("#homeTitle");

  const displayProducts = (products) => {
    productsElement.innerHTML = "";

    products.forEach((product) => {
      const article = document.createElement("article");

      const h3 = document.createElement("h3");
      h3.textContent = product.activity;

      const pObjective = document.createElement("p");
      pObjective.innerHTML = `${product.objective}`;

      const pUbication = document.createElement("p");
      pUbication.innerHTML = ` ${product.ubication}`;

      const picProduct = document.createElement("img");
      picProduct.src = product.imageUrl;
      picProduct.setAttribute("alt", `${product.activity} Product`)
      picProduct.setAttribute("loading", "lazy") //Código para lazy loading desde JS

      article.appendChild(h3);
      article.appendChild(pObjective);
      article.appendChild(pUbication);
      article.appendChild(picProduct);

      productsElement.appendChild(article);
    });
  }

  displayProducts(products);

  const homeLink = document.querySelector("#Home");
  const nationalLink = document.querySelector("#nationalService");

  homeLink.addEventListener("click", (e) => {
    e.preventDefault();
    displayProducts(products);
    homeSection.innerText = "Home Products";
  });



});