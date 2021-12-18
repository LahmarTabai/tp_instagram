document.addEventListener("DOMContentLoaded", () => {

  let name = document.getElementById("username");
  let pass = document.getElementById("password-field");
  let bouton = document.getElementById("but"); 

 
    bouton.onclick = () => {
      const user = {
        identifiant: name.value,
        password: pass.value
      }
      localStorage.setItem("user", JSON.stringify(user));
    }
});

/****************************/
// LocalStorage / Données persistantes :

// * localStorage.setItem("clé", "valeur");   ==> Enregistre une valeur dans le storage

// * localStorage.getItem("clé");   ==> Récupère la valeur de la clé

// * localStorage.clear();   ==> Efface le storage

/*************/

// Outils qu'on aura besoin :

// * JSON.stringify(objet);  ==> pour transformer l'objet en un string de type JSON

// * JSON.parse(string);  ==> pour transformer le String en un objet
