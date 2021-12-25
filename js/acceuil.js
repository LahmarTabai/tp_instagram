document.addEventListener("DOMContentLoaded", () => {

const local = JSON.parse(localStorage.getItem("user"));

let res = document.getElementById("result");
let res1 = document.getElementById("dort");

res.textContent += `${local.identifiant}`;
res1.textContent += `${local.identifiant}`;

});


// res.textContent = `Bonjour ${local.identifiant} and your password est ${local.password}`;
