let team = [{
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg',
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg',
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg',
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg',
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg',
    },
];

const teamSection = document.getElementById("teamSection");

/* MILESTONE 1:
stampare su console le informazioni di nome, ruolo e la stringa della foto */

/* console.log(team[1]);
console.log(team[1].name); */

for (let index in team) {

    console.log(`Persona ${Number(index) + 1}`);

    for (let key in team[index]) {

        console.log(team[index][key]);

    }

    console.log(" ");
}

/* MILESTONE 2:
stampare le stesse informazioni su DOM sottoforma di stringhe */

for (let index in team) {

    addCard(index);

}

// Registrare una nuova persona nel lista del team e crearne la card al click di Add

const newMemberName = document.getElementById("formNameInput");
const newMemberRole = document.getElementById("formRoleInput");
const newMemberImage = document.getElementById("formImageInput");
const addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", addMember);

/**
 * La funzione legge i valori inseriti nei campi del form, li usa per creare un nuovo membro
 * all'interno del team, logga in console il nuovo team e crea la card del nuovo membro
 * tramite l'apposita funzione addCard. Mostra un alert nel caso venga inserito un membro
 * duplicato (stesso nome E stesso ruolo di un membro già presente)
 */
function addMember() {

    const newMember = {

        name: newMemberName.value,
        role: newMemberRole.value,
        image: newMemberImage.value,

    }

    const checkForDuplicates = team.some(member => member.name === newMember.name && member.role === newMember.role);
    console.log(`Il nuovo membro è già dentro il team? ${checkForDuplicates}`);

    if (checkForDuplicates) {

        alert("Il membro fa già parte del team!");
        return;
    }

    team.push(newMember);
    console.log(team);

    const newMemberIndex = team.indexOf(newMember);
    addCard(newMemberIndex);

}

/**
 * La funzione genera la card per il membro del team con indice "member_index" all'interno della
 * relativa lista, utlizzando le funzioni di Bootstrap.
 * @param {string} member_index L'indice del membro del team a cui la card fa riferimento
 */
function addCard(member_index) {

    const memberSection = document.createElement("div");
    memberSection.classList.add("col");
    teamSection.appendChild(memberSection);

    const memberCard = document.createElement("div");
    memberCard.classList.add("card");
    memberCard.id = `${team[member_index].name}` + "_" + `${team[member_index].role}`;
    memberSection.appendChild(memberCard);

    const cardImg = document.createElement("img");
    cardImg.classList.add("card-img-top");
    memberCard.appendChild(cardImg);

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body", "text-center");
    memberCard.appendChild(cardBody);

    const cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title");
    cardBody.appendChild(cardTitle);

    const cardText = document.createElement("p");
    cardText.classList.add("card-text");
    cardBody.appendChild(cardText);

    for (let key in team[member_index]) {

        switch (key) {
            case "name":
                cardTitle.innerText = team[member_index][key];
                break;

            case "role":
                cardText.innerText = team[member_index][key];
                break;

            case "image":
                cardImg.src = `./assets/img/${team[member_index][key]}`;
                break;

            default:
                break;
        }

    }

}

// Leggere il nome o il ruolo inserito nella barra di ricerca e scorrere fino alla card corrispondente

const searchInput = document.getElementById("memberSearch");
const finder = document.getElementById("search-addon");

finder.addEventListener("click", findMember);

/**
 * La funzione cerca corrispondenze tra i nomi o i ruoli dei membri del team 
 * con il valore inserito nella barra di ricerca: se ne trova, scorre la visuale
 * finchè la card del membro cercato non è visibile.
 */
function findMember() {

    const inputValue = searchInput.value;

    const checkName = team.some(member => member.name === inputValue);
    const checkRole = team.some(member => member.role === inputValue);

    console.log(`checkName ${inputValue}: ${checkName}`);
    console.log(`checkRole ${inputValue}: ${checkRole}`);
    console.log(`checkName || checkRole ${inputValue}: ${checkName || checkRole}`);


    if (checkName || checkRole) {

        for (const index in team) {

            if (team[index].name === inputValue || team[index].role === inputValue) {

                const targetName = team[index].name;
                const targetRole = team[index].role;

                const targetMemberId = `${targetName}` + "_" + `${targetRole}`;
                console.log(`${inputValue} ID: ${targetMemberId}`);

                const targetMemberCard = document.getElementById(targetMemberId);
                targetMemberCard.scrollIntoView();

            }

        }

    } else {

        alert("Membro non trovato!");

    }

}