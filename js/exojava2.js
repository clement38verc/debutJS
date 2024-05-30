const titre = document.querySelector("h1")


titre.style.backgroundColor = "pink";
titre.style.color = "white";
titre.style.textDecoration = "underline";
titre.style.fontSize = "50px";


const exo2 = document.getElementById("paragraphe");
const exo22 = document.querySelector("#paragraphe");


const recup = document.querySelectorAll("ul li")
const recup2 = recup[2];
recup2.textContent = "new car"
console.log(recup2);

recup2.style.fontWeight = "bold"

const img = document.querySelector("img");
console.log(img.alt);


const newList = document.querySelector('ul')
const newItem = document.createElement("li") // cree li
newItem.textContent = "hello" // 
newList.appendChild(newItem)


const listElement = document.querySelector('ul');
listElement.insertAdjacentHTML('beforeend', '<li>aurevoir</li>');

const listElement2 = document.querySelector('ul');
const newListItemHTML = `<li>bienvenue</li>`;
listElement2.innerHTML += newListItemHTML

const supp = document.querySelector("ul li:first-child");
supp.remove();

document.querySelector('ul li:nth-child(2)').remove()
/* 
function removeItem(textContentToRemove, coucou) {
    const listItems = document.querySelectorAll(".list li");

    listItems.forEach(element => {
        if (element.textContent === textContentToRemove || element.textContent === coucou) {
            element.parentNode.removeChild(element);
        }
    });
}

removeItem("jeudi", "salut" ) */