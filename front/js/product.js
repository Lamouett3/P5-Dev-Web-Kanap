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
console.log(id);

//Récuperation d'un objet par sa key id

// Méthode : avec fetch et en mettant la valeur de l'id a la fin de l'url
const product = fetch(`http://localhost:3000/api/products/${id}`);
console.log(product);

// Affiche les données de l'id sous forme de tableau
product.then((response) => {
  console.log(response);
  // retourne les données au format JSON
  const kanapData = response.json();
  // puise dans le fichier json et retourne le tableau
  kanapData.then((data) => {
    console.log(data);

    // Création du contenaire
    const productImage = document.createElement("img");
    productImage.src = data.imageUrl;
    // productImage = document.querySelector(".item__img");
    console.log(productImage);
  });
});

/* RESSOURCES
// penser a refaire un fetch (urlsearchparam)en fonction de l'id
// creation du local strorage
localStorage.setItem("prenom", "driss");
const developer = localStorage.getItem("prenom");
console.log(developer);
localStorage.removeItem("prenom");
*/
