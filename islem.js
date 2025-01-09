//alert("js est activé ! ");
//Q1: Sélection et modification de la couleur du premier paragraphe

let parag1 = document.querySelector("p");
console.log(parag1);
parag1.style.color = "green";

//Q2 : Modifications du texte du deuxieme paragraphe
let parag2 = document.querySelectorAll("p")[1];
//ou
//let parag2 = document.getElementByTagName("p")[1]; //getElementByTagName()is not a function
console.log(parag2);

parag2.textContent = "Bonjour JS";

// Q3 : ajout d'une classe au troisième paragraphe
document.querySelectorAll("p")[2].classList.add("test");

//Q4 : créer un nouvel élément div et ajouter du contenu et du style

const divA = document.createElement("div");

divA.textContent = "Je suis la nouvelle div";

divA.style.backgroundColor = "yellow";

divA.style.padding = "10px";

console.log(divA);


//Q5:  Insertion de cette div avant le premier paragraphe

parag1.insertAdjacentElement("beforebegin", divA);
// document.body.insertBefore(divA , parag1);
// ou 
parag1.parentNode.insertBefore(divA , parag1);
