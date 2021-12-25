document.addEventListener("DOMContentLoaded", () => {

  // Partie Mail :

let validation = document.getElementById("but");

let mail = document.getElementById("username");
let mail_m = document.getElementById("mail_manquant");
let pass = document.getElementById("password-field");
let mail_v = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
let pass_v = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;

validation.addEventListener("click", mailMissing);

      function mailMissing (e) {
            if (mail_v.test(mail.value) && pass_v.test(pass.value)) {
                  mail_m.textContent = "";
                  const user = {
                        identifiant: mail.value,
                        password: pass.value      
                  }
                  localStorage.setItem("user", JSON.stringify(user)); 
            }else if (mail_v.test(mail.value) && pass.value == "") {
                  e.preventDefault();
                  mail_m.textContent = "Password manquant !"
                  localStorage.clear(); 
            }else if (mail_v.test(mail.value) && pass_v.test(pass.value) == false) {
                  e.preventDefault();
                  mail_m.textContent = "Your password should contain at least one number and one special character";
                  mail_m.textContent.style.lineheight ="1rem";
                  localStorage.clear(); 
            }else {
                  e.preventDefault();
                  mail_m.textContent = "E-Mail manquant ou invalide !";
                  localStorage.clear();  
            }
      };  
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




/*

validation.addEventListener("click", mailMissing);

      function mailMissing (e) {
              if (mail.validity.valueMissing) {
                    e.preventDefault();
                    mail_m.textContent = "E-Mail manquant";
                    mail_m.style.color ="red";
                    localStorage.clear(); 
                    return false;
              }else if (mail_v.test(mail.value) == false) {
                    e.preventDefault();
                    mail_m.textContent = "Mail Invalide";
                    mail_m.style.color = "orange";
                    localStorage.clear(); 
                    return false;
              }else {
                    mail_m.textContent = "";
                    let pass = document.getElementById("password-field");       
                        const user = {
                          identifiant: mail.value,
                          password: pass.value
                        };
                        localStorage.setItem("user", JSON.stringify(user));     
              };
      };

  
  
});

*/