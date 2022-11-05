//------------------------La gestion panier-------------------------
//--------------- Récuperation des produits dans le local storage-------------------
const productCart = localStorage.getItem("produitsPanier");

//---------------------convertie la string en object
const productCartJSON = JSON.parse(productCart);
//console.log(productCartJSON);

//----------------------------Création des contenaire------------------------------
const productContainer = document.createElement("article");
const emplacementContenair = document.querySelector("#cart__items");
//console.log(emplacementContenair);

for (let i = 0; i < productCartJSON.length; i++) {
  //-----------------CREATION DES CONTENAIRE ET DU CONTENU HTML

  const productContainer = document.createElement("article");
  productContainer.className = "cart__item"; // `data-id="${productCartJSON[i].id_Produit}" data-color="${productCartJSON[i].couleur_Produit}`;
  productContainer.dataset.id = `${productCartJSON[i].id_Produit}`;
  productContainer.dataset.color = `${productCartJSON[i].couleur_Produit}`;
  //console.log(productContainer);

  const productImage = document.createElement("div");
  productImage.className = "cart__item__img";
  const productImageUrl = document.createElement("img");
  productImageUrl.src = productCartJSON[i].imageProduit;
  // console.log(productImage);

  const productContent = document.createElement("div");
  productContent.className = "cart__item__content";
  //console.log(productContent);

  const productDescription = document.createElement("div");
  productDescription.className = "cart__item__content__description";
  //console.log(productDescription);
  const productDescriptionTitle = document.createElement("h2");
  productDescriptionTitle.innerText = `${productCartJSON[i].nomProduit}`;
  const productDescriptionCouleur = document.createElement("p");
  productDescriptionCouleur.innerHTML = `${productCartJSON[i].couleur_Produit}`;
  const productDescriptionPrice = document.createElement("p");
  productDescriptionPrice.innerHTML = `${productCartJSON[i].prixProduit} €`;
  //console.log(productDescriptionTitle);

  const productSetting = document.createElement("div");
  productSetting.className = "cart__item__content__settings";

  //console.log(productSetting);
  const productQuantity = document.createElement("div");
  productQuantity.className = "cart__item__content__settings__quantity";

  const productQuantityText = document.createElement("p");
  productQuantityText.innerText = "Qté :";

  const productQuantityInput = document.createElement("input");
  productQuantityInput.type = "number";
  productQuantityInput.className = "itemQuantity"; // `name="itemQuantity" min="1" max="100" value="${productCartJSON[i].quantite_Produit}"`;
  productQuantityInput.name = "itemQuantity";
  productQuantityInput.min = "1";
  productQuantityInput.max = "100";
  productQuantityInput.value = `${productCartJSON[i].quantite_Produit}`;

  const productSettingDelete = document.createElement("div");
  productSettingDelete.className = "cart__item__content__settings__delete";
  //console.log(productSettingDelete);
  const productSettingDeleteText = document.createElement("p");
  productSettingDeleteText.className = "deleteItem";
  productSettingDeleteText.innerText = "Supprimer";

  //-----------------------Définit les element parents ----------------------

  productImage.appendChild(productImageUrl);

  productDescription.appendChild(productDescriptionTitle);
  productDescription.appendChild(productDescriptionCouleur);
  productDescription.appendChild(productDescriptionPrice);

  productContent.appendChild(productDescription);
  productContent.appendChild(productSetting);

  productQuantity.appendChild(productQuantityText);
  productQuantity.appendChild(productQuantityInput);

  productSetting.appendChild(productQuantity);
  productSetting.appendChild(productSettingDelete);
  //console.log(productSetting);
  productSettingDelete.appendChild(productSettingDeleteText);

  productContainer.appendChild(productImage);
  productContainer.appendChild(productContent);
  // productContainer.appendChild(productSetting);

  emplacementContenair.appendChild(productContainer);
}
///////////////////////////----Change les quantite et influe sur les prix ----------------------

function modifQuantite() {
  let inputs = document.querySelectorAll(".itemQuantity");
  for (let input of Array.from(inputs)) {
    input.addEventListener("change", (event) => {
      let canapeId = event.target.getAttribute("id_Produit");
      let canapeColor = event.target.getAttribute("couleur_Produit");
      const modif = productCartJSON.find(
        (element) =>
          element.id == productCartJSON.id_Produit &&
          element.couleur == productCartJSON.couleur_Produit
      );
      modif.quantite_Produit = input.value;
      //productCartJSON = modif;
      localStorage.setItem("produitsPanier", JSON.stringify(productCartJSON));
      window.location.href = "cart.html";
    });
  }
}

modifQuantite();

////////////////////////////////////////////////////////////////

//------------------Mise en place du total articles-----------------

/*  
<div class="cart__price">
    <p>Total (<span id="totalQuantity"><!-- 2 --></span> articles) : <span id="totalPrice"><!-- 84,00 --></span> €</p>
</div> 
*/

let totalPriceCalcul = [];
for (let p = 0; p < productCartJSON.length; p++) {
  let prixProduitPanier = productCartJSON[p].prixProduit;

  //----------------------Mettre le prix dans la variable totalPrice
  totalPriceCalcul.push(prixProduitPanier);
}

//--------------------------Aditionner le prix du tableau dans la variable total price avec la fonction reduce
const reducer = (accumulator, currentValue) => accumulator + currentValue;

const totalPrice = totalPriceCalcul.reduce(reducer, 0);
//console.log(totalPrice);
//------------------------Le code html ou le prix sera afficher
const affichagePrixHtml = document.querySelector("#totalPrice");
affichagePrixHtml.innerText = `${totalPrice}`;
// console.log(affichagePrixHtml);

///////////////////////////----Change les quantite et influe sur les prix ----------------------
/////////////////////////// PENSER A UTILISER CHANGE EN JS //////////////////////////////////

/*
//for (e = 0; e < productCartJSON.length; e++) {
const selectQuantity = document.querySelector(".itemQuantity");
selectQuantity.addEventListener("change", (event) => {
  const result = document.querySelector("#totalPrice");
  localStorage.setItem("produitsPanier"), quantite_Produit;

  // push une nouvelle quantite dans le localStorage avec Storage.setItem()
  // Lorqu'on lui passe un nom de clé et une valeur, cette méthode ajoute cette clé et cette valeur dans le stockage. Si la clé existe déjà, elle met à jour la valeur.
  // pour recharger la page ensuite => window.location.reload();
});
console.log(selectQuantity);
//}
*/
/////////////////////////////////////////////////////////////////////////////////////////////
//----------------------------Gestion du bouton suprimer l'article------------------------------------

/*
const boutonDelete = document.querySelector(".deleteItem");
boutonDelete.addEventListener("click", function () {
  window.localStorage.removeItem(productCart);
});
*/
//-----------------------------RESSOURCES BLOC INSERTION HTML-------------------------------------
/*
<main class="limitedWidthBlockContainer">
  <div class="cartAndFormContainer" id="cartAndFormContainer">
          <h1>Votre panier</h1>
          <section class="cart">
            <section id="cart__items">

             <!--  <article class="cart__item" data-id="{product-ID}" data-color="{product-color}">

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

              </article> -->
            </section>
            <div class="cart__price">
              <p>Total (<span id="totalQuantity"><!-- 2 --></span> articles) : <span id="totalPrice"><!-- 84,00 --></span> €</p>
            </div>

*/
