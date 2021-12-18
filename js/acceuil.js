const local = JSON.parse(localStorage.getItem("user"));

let res = document.getElementById("result");

res.textContent = `Bonjour ${local.identifiant}, your password est ${local.password}`;
