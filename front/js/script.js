// Récuperation des fichier du DOM

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

// Creation des element des produits

const produitsIndex = produits;

const imageElement = document.createElement("img"); // Image de l'element
imageElement.src = produitsIndex.imageURL;

const nomElement = document.createElement("h3"); // titre de l'element
nomElement.innerText = produitsIndex.name;

const descriptionElement = document.createElement("p"); // description de l'element
descriptionElement.innerText = produitsIndex.description;

// Récuperartion des element du DOM

const sectionItem = document.querySelector(".items");

// Insertion des element dans la balise items

sectionItem.appendChild(imageElement);
sectionItem.appendChild(nomElement);
sectionItem.appendChild(descriptionElement);
