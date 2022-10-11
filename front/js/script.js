// Récuperer les données dans l'API HTTP
const product = fetch("http://localhost:3000/api/products");
// Affiche le tableau
product.then((response) => {
  // console.log(response);
  // retourne les données au format JSON
  const kanapData = response.json();
  // affiche les données sous forme de array
  // console.log(kanapData);
  kanapData.then((data) => {
    // console.log(data);
    // Création de la boucle
    // let i = 0;
    for (let i = 0; i < data.length; i++) {
      // Création des contenaires
      const productImage = document.createElement("img");
      productImage.src = data[i].imageUrl;
      const productName = document.createElement("h3");
      productName.innerText = data[i].name;
      const productDescription = document.createElement("p");
      productDescription.innerText = data[i].description;

      const productLink = document.createElement("a");
      productLink.href = `./product.html?id=${data[i]._id}`;

      // Rattache les contenaire entre eux
      const productContainer = document.createElement("article");
      productContainer.appendChild(productImage);
      productContainer.appendChild(productName);
      productContainer.appendChild(productDescription);
      productLink.appendChild(productContainer);
      const sectionItem = document.querySelector(".items");
      sectionItem.appendChild(productLink);
    }
  });
});

/*  LOCAL STORAGE
// Transformation des pièces en JSON 
const kanapIndex = JSON.stringify(kanapData);
// Stockage des informations dans le localStorage
window.localStorage.setItem("kanapData", kanapIndex);
*/

/*  FONCTION
// Création de la boucle 
for (let i = 0; i < data[data.length]; i++){
    // creation des contenaire
const productImage = document.createElement("img");
// productImage.src = data[i];
const productName = document.createElement("h3");
// productName.innerText = data[i].name;
const productDescription = document.createElement("p");
// productDescritpion.innerText = data[i].description;
const productContainer = document.createElement("article");

const sectionItem = document.querySelector(".items");
sectionItem.appendChild(productImage);
sectionItem.appendChild(productName);
sectionItem.appendChild(productDescription);
sectionItem.appendChild(productContainer);

}
*/
/*
// Création des contenaire
const productImage = document.createElement("img");
// productImage.src = reponse[0];
const productName = document.createElement("h3");
// productName.innerText = response2[0].name;
const productDescription = document.createElement("p");

const productContainer = document.createElement("article");

const sectionItem = document.querySelector(".items");
sectionItem.appendChild(productImage);
sectionItem.appendChild(productName);
sectionItem.appendChild(productDescription);
sectionItem.appendChild(productContainer);
*/

/*/////////////////////////////////////////////////////////////////V1
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

// Création des element conteneur

const imageElement = document.createElement("img"); // Image de l'element
// imageElement.src = produitsIndex.imageURL;

const nameElement = document.createElement("h3"); // titre de l'element
// nameElement.innerText = produitsIndex.name;

const descriptionElement = document.createElement("p"); // description de l'element
// descriptionElement.innerText = produitsIndex.description;

const displayProductImage = document.querySelector(".productImage");
const displayProductName = document.querySelector(".productName");
const displayProductDescription = document.querySelector(".productDescription");

/* Creation de la boucle 

for (let i = 0; i < canape[canape.length]; i++) {

 // Récupération de l'élément du DOM qui accueillera les fiches
    const sectionItem = document.querySelector(".items");

 // Création d’une balise dédiée à une pièce automobile
    const blocProduct = document.createElement("article");

// On crée l’élément img.
    const imageElement = document.createElement("img"); 
    // imageElement.src = produitsIndex.imageURL;
 // On crée l’élément titres.
    const nameElement = document.createElement("h3")
    // nameElement.innerText = produitsIndex.name;
    // On crée l’élément description.
    const descriptionElement = document.createElement("p");
    // descriptionElement.innerText = produitsIndex.description;

 // On rattache l’image à pieceElement (la balise article)
// Rattache au balise concerner
    
    sectionItem.appendChild(displayProductImage);
    sectionItem.appendChild(displayProductName);
    sectionItem.appendChild(displayProductDescription);

}
*/

/*

// Création des element conteneur
const blocElement = document.createElement("article"); // article de l'element
blocElement = document.querySelector(".items");
blocElement.appendChild(displayProductImage);
blocElement.appendChild(displayProductName);
blocElement.appendChild(displayProductDescription);
*/

/////////////////////////////////////////////////////////////////////////////////////////
/*                                         RESSOURCES
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
