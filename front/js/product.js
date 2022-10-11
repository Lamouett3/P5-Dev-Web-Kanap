// Récuperation de la chaîne de requete dans l'url
const queryString_url_id = window.location.search;
//console.log(queryString_url_id);

/*    // methode 1 pour rextraire l'id avec slice
const get_id = queryString_url_id.slice(1);
console.log(get_id);         */

// methode 2 pour rextraire l'id (URLSearchParams)
const get_id = new URLSearchParams(queryString_url_id);
//console.log(get_id);
const id = get_id.get("id");
console.log(id);

/* RESSOURCES
// penser a refaire un fetch (urlsearchparam)en fonction de l'id
// creation du local strorage
localStorage.setItem("prenom", "driss");
const developer = localStorage.getItem("prenom");
console.log(developer);
localStorage.removeItem("prenom");
*/
