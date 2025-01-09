//alert("JS est activé !");

//Q1: Sélection et modification de la couleur du premier paragraphe

let paragraphe1 = document.querySelector("p");
//ou
//let paragraphe1 = document.getElementsByTagName("p")[0];

console.log(paragraphe1);

paragraphe1.style.color = "red";

//Q2 : Modifications du texte du deuxieme paragraphe

let paragraphe2 = document.getElementsByTagName("p")[1];

console.log(paragraphe2);

paragraphe2.textContent = "hello world";

// Q3 : ajout d'une classe au troisième paragraphe

document.querySelectorAll("p")[2].classList.add("test");

//Q4 : créer un nouvel élément div
// let newDiv = document.createElement("div");
// console.log(newDiv);

// Q5 : ajout de contenu et style
// newDiv.textContent = "Je suis un nouveau div !";
// newDiv.style.backgroundColor = "yellow";
// newDiv.style.padding = "10px";

//Q6 : Insertion avant le premier paragraphe
// document.body.insertBefore(newDiv, paragraphe1);
// paragraphe1.parentNode.insertBefore(newDiv, paragraphe1);

// Q7 : creer une fonction qui :
// créer un nouvel élément div
// ajout de contenu et style
// Insertion avant le premier paragraphe

function creatAndInsertDiv() {
  // créer un nouvel élément div
  let newDiv = document.createElement("div");
  // ajout de contenu et style
  newDiv.textContent = "Je suis un nouveau div !";
  newDiv.style.backgroundColor = "yellow";
  newDiv.style.padding = "10px";
  // Insertion avant le premier paragraphe
  paragraphe1.parentNode.insertBefore(newDiv, paragraphe1);
}
creatAndInsertDiv();

// Q8 : créer une interface permettant d'ajouter et supprimer des éléments d'une liste

//Premiere methode de creation
/*
let addBtn = document.querySelector("button");
let list = document.querySelector("#itemList");

function create() {
  let inputContent = document.querySelector("#itemInput").value;
  // partie creation de liste
  let newLi = document.createElement("li");
  newLi.textContent = inputContent;
  list.appendChild(newLi);
}

addBtn.addEventListener("click", (event) => {
  create();
});
*/

// Autre methode complete creation et suppression :

function create() {
  let input = document.querySelector("#itemInput");
  let liste = document.querySelector("#itemList");
  // verifier si l'input n'est pas vide (supprimer les espaces en trop)

  if (input.value.trim() != "") {
    // on crée le nouvel element li
    let li = document.createElement("li");
    // on va créer un span pour le texte
    let span = document.createElement("span");
    // on trim la valeur input avant de l'affecter
    span.textContent = input.value.trim();
    // on va créer le bouton de suppression
    let deleteBtn = document.createElement("button");
    // on ajoute un emoji avec Windows + ;
    deleteBtn.textContent = "❌";
    deleteBtn.style.marginLeft = "10px";
    // ajouter une fonction de suppression
    deleteBtn.onclick = function () {
      // on utilise parentNode pour acceder au parent "li" et le supprimer
      this.parentNode.remove();
    };
    // assembler les éléments
    li.appendChild(span);
    li.appendChild(deleteBtn);
    // ajouter le li à la liste
    liste.appendChild(li);
    // vider l'input :
    input.value = "";
    // remettre le focus sur l'input
    input.focus();
  }
}
// Ajouter de l'evenement pour la touche Entrée
document.querySelector("#itemInput").addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    create();
  }
});
