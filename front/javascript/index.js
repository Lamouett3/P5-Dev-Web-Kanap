// Récuperation des fichier du DOM
const reponse = await fetch("Product.js");
const products = await reponse.json();

// Creation des element des produits
const kanap1 = products[0];
const imageElement = document.createElement("img");
imageElement.src = kanap01.jpeg;

const nomElement = document.createElement("h3");
nomElement.innerText = "Kanap Sinopé";

const prixElement = document.createElement("p");
prixElement.innerText = 1849;

const categorieElement = document.createElement("p");
descriptionElement.innerText =
  "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

// Récuperartion des element du DOM
const sectionProducts = document.querySelector(".items");
sectionProducts.appendChild(imageElement);
sectionProducts.appendChild(nomElement);
sectionProducts.appendChild(prixElement);
sectionProducts.appendChild(descriptionElement);
/*

<!--           <a href="./product.html?id=42">
            <article>
              <img src=".../product01.jpg" alt="Lorem ipsum dolor sit amet, Kanap name1">
              <h3 class="productName">Kanap name1</h3>
              <p class="productDescription">Dis enim malesuada risus sapien gravida nulla nisl arcu. Dis enim malesuada risus sapien gravida nulla nisl arcu.</p>
            </article>
          </a> -->

*/
