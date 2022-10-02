/*
// Récuperation des fichier du DOM
import { getAllProducts } from "../../back/controllers/product";

// Récuperation des fichier du DOM
await fetch("http://localhost:5500/back/models/");
*/

// Creation des element des produits

const imageElement = document.createElement("img"); // Image de l'element
imageElement.src = "http://127.0.0.1:5500/back/images/kanap01.jpeg";
imageElement = document.querySelector("item__img");

const nomElement = document.createElement("h3"); // titre de l'element
nomElement.innerText = "Kanap Sinopé";
nomElement = document.querySelector("item__content__titlePrice");

const descriptionElement = document.createElement("p"); // description de l'element
descriptionElement.innerText =
  "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
descriptionElement = document.querySelector(
  "item__content__description__title"
);

// Récuperartion des element du DOM

const mesElements = document.querySelector(".items");

// Insertion des element dans la balise items

mesElements.appendChild(imageElement);
mesElements.appendChild(nomElement);
mesElements.appendChild(descriptionElement);
