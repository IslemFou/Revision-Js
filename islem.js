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


// Q7 : creer une fonction qui :
// créer un nouvel élément div
// ajout de contenu et style
// Insertion avant le premier paragraphe

function createElement()
{
    let element = document.createElement("div");
    element.style.color = "pink";
    element.style.backgroundColor = "yellow";
    element.style.padding = "10px";
    parag1.parentNode.insertBefore(element, parag1);
}

createElement();

// Q8 : créer une interface permettant d'ajouter et supprimer des éléments d'une liste

function AjoutLi()
{
    let input = document.querySelector("#itemInput");
    let ul = document.querySelector("#itemList");
    //on craie la condition if avec la fonction trim() afin de réduire tout espace inutiles qui peut y exister entre les extrémités du texte saisie dans l'input.
    if (input.value.trim() !== "")
    {
        let li = document.createElement("li");
        let span = document.createElement("span");
        span.textContent = input.value.trim();

        //création de l'icone de suppression
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "✖️";
        //la fonction de Suppression
        deleteBtn.onclick = function ()
        {
            this.parentNode.remove(); //this veut dire l'element deleteBtn
        }
        //Assemblage avec appendChild
        li.appendChild(span);
        li.appendChild(deleteBtn);
        //assemblage de li à ul
        ul.appendChild(li);
        //reset input , vider l'input après saisie
        input.value = "";  
        //remettre le focus sur le champ de l'input
        input.focus();
    }
}

//avec la touche du clavier Entree
document.querySelector("#itemInput").addEventListener("keypress", (e) =>
{
    if (e.key == "Enter")
    {
        AjoutLi();
    }
});