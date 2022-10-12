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
    console.log(data);
  });
});

/*--------------------RESSOURCES-----------------------------------------


  // Transformation des pieces en JSON
  const panier = JSON.stringify(kanapData);
  // Stockage des informations dans le localStorage
  window.localStorage.setItem("kanapData", panier);
  
// Creation du tableau PANIER
const panier = ["id", "QuantitéProduit", "CouleurProduit"];

// création de la fonction "on click" du panier
const boutonPanier = document.querySelector("#addToCart");
boutonPanier.addEventListener("click", function () {
  // Fonction qui ajoute une entrée dans le tableau panier
});



 <article class="cart__item" data-id="{product-ID}" data-color="{product-color}">
<div class="cart__item__img">
  <img src="../images/product01.jpg" alt="Photographie d'un canapé">
</div>
<div class="cart__item__content">
  <div class="cart__item__content__description">
    <h2>Nom du produit</h2>
    <p>Vert</p>
    <p>42,00 €</p>
  </div>
  <div class="cart__item__content__settings">
    <div class="cart__item__content__settings__quantity">
      <p>Qté : </p>
      <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="42">
    </div>
    <div class="cart__item__content__settings__delete">
      <p class="deleteItem">Supprimer</p>
    </div>
  </div>
</div>
</article> 
*/
