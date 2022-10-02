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

/*
// Creation des element des produits

const imageElement = document.createElement("img"); // Image de l'element
imageElement.src = "http://127.0.0.1:5500/back/images/kanap01.jpeg";

const nomElement = document.createElement("h3"); // titre de l'element
nomElement.innerText = "Kanap Sinopé";

const descriptionElement = document.createElement("p"); // description de l'element
descriptionElement.innerText =
  "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

// Récuperartion des element du DOM

const mesElements = document.querySelector(".items");

// Insertion des element dans la balise items

mesElements.appendChild(imageElement);
mesElements.appendChild(nomElement);
mesElements.appendChild(descriptionElement);
*/
