//------------------------La gestion panier-------------------------

// Récuperation des produits dans le local storage
const productCart = localStorage.getItem("produitsPanier");

// convertie la string en object
const productCartJSON = JSON.parse(productCart);
console.log(productCartJSON);

// Création des contenaire

for (let i = 0; i < productCartJSON.length; i++) {
  // id du produit
  // const productName = productCartJSON[i].id_Produit;
  // productName.innerText = productCartJSON[i].id_Produit;

  //-----------------CREATION DES CONTENAIRE ET DU CONTENU HTML

  const productContainer = document.createElement("article");
  productContainer.className = "cart__item";
  console.log(productContainer);

  const productImage = document.createElement("div");
  productImage.className = "cart__item__img";
  // console.log(productImage);

  const productContent = document.createElement("div");
  productContent.className = "cart__item__content";
  //console.log(productContent);

  const productDescription = document.createElement("div");
  productDescription.className = "cart__item__content__description";
  //console.log(productDescription);

  const productSetting = document.createElement("div");
  productSetting.className = "cart__item__content__settings";
  //console.log(productSetting);
  const productQuantity = document.createElement("div");
  productQuantity.className = "cart__item__content__settings__quantity";
  //console.log(productQuantity);

  const productSettingDelete = document.createElement("div");
  productSettingDelete.className = "cart__item__content__settings__delete";
  //console.log(productSettingDelete);

  productContent.appendChild(productDescription);
  productContent.appendChild(productSetting);

  productSetting.appendChild(productQuantity);
  productSetting.appendChild(productSettingDelete);
  //console.log(productSetting);

  productContainer.appendChild(productImage);
  productContainer.appendChild(productContent);
  // productContainer.appendChild(productSetting);

  const sectionCart = document.getElementById(cart__items);
  console.log(sectionCart);
}

// La récuperation des données séléctionnées par l'utilisateur et envoie du panier

// Récuperer les élément dans le local storage

// RESSOURCES BLOC INSERTION HTML
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
