// Récuperation de la chaîne de requete dans l'url
const queryString_url_id = window.location.search;
//console.log(queryString_url_id);

/*   
 // methode  pour rextraire l'id avec slice
const get_id = queryString_url_id.slice(1);
console.log(get_id);         */

// methode  pour re-extraire l'id (URLSearchParams)
const get_id = new URLSearchParams(queryString_url_id);
//console.log(get_id);
const id = get_id.get("id");
// console.log(id);

//Récuperation d'un objet par sa key id

// Méthode : avec fetch et en mettant la valeur de l'id a la fin de l'url
const product = fetch(`http://localhost:3000/api/products/${id}`);
//console.log(product);

// Affiche les données de l'id sous forme de tableau
product.then((response) => {
  //  console.log(response);
  // retourne les données au format JSON
  const kanapData = response.json();

  // puise dans le fichier json et retourne le tableau
  kanapData.then((data) => {
    //    console.log(data);

    // Création du contenaire image

    const productImage = document.createElement("img");
    productImage.src = data.imageUrl;
    const containerImage = document.querySelector(".item__img");
    containerImage.appendChild(productImage);
    //    console.log(productImage);

    // Création du contenaire titre
    const productName = document.createElement("h1");
    productName.innerText = data.name;
    const containerName = document.querySelector("#title");
    containerName.appendChild(productName);
    // Création du contenaire prix
    const productPrice = document.createElement("p");
    productPrice.innerText = data.price;
    const containerPrice = document.getElementById("price");
    containerPrice.appendChild(productPrice);

    // Création du contenaire description

    const productDescription = document.createElement("p");
    productDescription.innerText = data.description;
    const containerDescription = document.getElementById("description");
    containerDescription.appendChild(productDescription);
    //    console.log(productDescription);

    //------------------La gestion du panier--------
    // la récuperation des données selectionné par l'utilisateur et  envoie le panier
    //selection du bouton ajouter l'article au panier
    const envoyerPanier = document.getElementById("addToCart");
    //--addEventListener - Ecouter le bouton et envoyer le panier
    envoyerPanier.addEventListener("click", (event) => {
      event.preventDefault();
      // mettre le choix de l'utilisateur dans une variable
      const choixProduit = envoyerPanier.value;
      console.log(choixProduit);

      //-------- Récuperation des valeur du formulaire
      let optionProduit = {
        quantite_Produit: 1, // penser a rentrer une fonction pour inclure les quantité du menu déroulant
        id_Produit: data._id,
        couleur_Produit: data.colors,
      };
      console.log(optionProduit);
      //--------------------Stocker la recuperation des valeurs du formulaire dans le local storage
      let produitLocalStrorage = JSON.parse(localStorage.getItem("produit"));
      // s'il y a deja des produits enregistrer dans le local storage
      if (produitLocalStrorage) {
        produitLocalStrorage.push(optionProduit);
        localStorage.setItem("produit", JSON.stringify(produitLocalStrorage));
      }
      //s'il n'y a pas de produit enregistré dans le local storage
      else {
        produitLocalStrorage = [];
        produitLocalStrorage.push(optionProduit);
        // envoyer dans le local storage
        localStorage.setItem("produit", JSON.stringify(produitLocalStrorage));
      }
    });
    /*
    // Création du menu déroulant
    let colorsSelector;
    Object.entries(data.colors).forEach((colors) => {
      console.log(colors);
      colorsSelector = document.createElement("option");
      colorsSelector.innerText = data.colors;
      const colorBloc = document.getElementById("colors");
      colorBloc.appendChild(colorsSelector);
      // RESTE A CORRIGER LE L'AFFICHAGE DE COLORS DANS LE MENU DEROULANT
    });
    */
  });
});

/*

    //------------------La gestion du panier--------
    // la récuperation des données selectionné par l'utilisateur et  envoie le panier
    //selection du bouton ajouter l'article au panier
    const envoyerPanier = document.getElementById("addToCart");
    //--addEventListener - Ecouter le bouton et envoyer le panier
    envoyerPanier.addEventListener("click", (event) => {
      event.preventDefault();
      // mettre le choix de l'utilisateur dans une variable
      const choixProduit = envoyerPanier.value;
      console.log(choixProduit);
      
       //-------- Récuperation des valeur du formulaire
    let optionProduit = {
      quantite_Produit: 1,
      id_Produit: data._id,
      couleur_Produit: data.colors,
    };

    //--------------------Stocker la recuperation des valeurs du formulaire dans le local storage
    let produitLocalStrorage = JSON.parse(localStorage.getItem("produit"));
    produitLocalStrorage = [];
    produitLocalStrorage.push(optionProduit);
    console.log(produitLocalStrorage);
    });




Pensez à crée une key : quantité; produits ; et couleurs

//-------------------- CREATION DU LOCALSTORAGE------------------

//-------- Récuperation des valeur du formulaire
let optionProduit = {
    quantite_Produit: 1,
    id_Produit: data._id,
    couleur_Produit: data.colors,
};


//--------------------Stocker la recuperation des valeurs du formulaire dans le local storage 
let produitLocalStrorage = JSON.parse(localStorage.getItem("produit"));
produitLocalStrorage = [];
produitLocalStrorage.push(optionProduit);



// Declaration de la variable 'produitLocalStorage" dans laquelle on met les key et les values qui sont dans le local storage
let produitLocalStorage = JSON.parse(localStorage.getItem("id"));

//JSON.parse pour convertir les donnée au format JSON qui sont dans le local storage en object javascript






*/
/* RESSOURCES
// penser a refaire un fetch (urlsearchparam)en fonction de l'id
// creation du local strorage
localStorage.setItem("prenom", "driss");
const developer = localStorage.getItem("prenom");
console.log(developer);
localStorage.removeItem("prenom");
*/
