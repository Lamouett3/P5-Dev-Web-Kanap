/*

PREMIERE METHODE 
const produits = function (produitsRecuperer) {
  console.log(produitsRecuperer);
};

fetch("http://localhost:3000/api/products")
  .then(function (data) {
    return data.json();
  })
  .then(function (produitsRecuperer) {
    produits(produitsRecuperer);
  });
*/
/*

DEUXIEME METHODE
const produits = fetch("http://localhost:3000/api/products").then(function (
  produits
) {
  return produits.json();
});
*/

// Récuperation des fichier du DOM
const produits = fetch("http://localhost:3000/api/products");

produits.then((response) => {
  console.log(response);

  const canapeData = response.json();

  console.log(canapeData);

  canapeData.then((canape) => {
    console.log(canape[0]);

    const productImage = canape[0].imageUrl;
    const productName = canape[0].name;
    const productDescription = canape[0].description;

    displayProductImage.innerHTML = productImage;
    displayProductName.innerHTML = productName;
    displayProductDescription.innerHTML = productDescription;
  });
});

const imageElement = document.createElement("img"); // Image de l'element
// imageElement.src = produitsIndex.imageURL;

const nameElement = document.createElement("h3"); // titre de l'element
// nameElement.innerText = produitsIndex.name;

const descriptionElement = document.createElement("p"); // description de l'element
// descriptionElement.innerText = produitsIndex.description;

const displayProductImage = document.querySelector(".productImage");
const displayProductName = document.querySelector(".productName");
const displayProductDescription = document.querySelector(
  ".productDerscription"
);
/*
// Creation des element des produits
const sectionItem = document.querySelector("items");

const imageElement = document.createElement("img"); // Image de l'element
// imageElement.src = produitsIndex.imageURL;

const nameElement = document.createElement("h3"); // titre de l'element
// nameElement.innerText = produitsIndex.name;

const descriptionElement = document.createElement("p"); // description de l'element
// descriptionElement.innerText = produitsIndex.description;

// Insertion des element dans la balise items

sectionItem.appendChild(imageElement);
sectionItem.appendChild(nameElement);
sectionItem.appendChild(descriptionElement);


// Récuperartion des element du DOM

const sectionItem = document.querySelector(".items");

// Insertion des element dans la balise items

imageElement.appendChild(productImage);
nameElement.appendChild(productName);
description.appendChild(productDescription);
*/
