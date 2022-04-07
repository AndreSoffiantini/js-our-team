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

    // let personInfo = memberSection.innerHTML; non funziona, non è reattiva!
    let memberSection = document.createElement("div");
    memberSection.classList.add("col");
    teamSection.appendChild(memberSection);

    let memberCard = document.createElement("div");
    memberCard.classList.add("card");
    memberSection.appendChild(memberCard);

    let cardImg = document.createElement("img");
    cardImg.classList.add("card-img-top");
    memberCard.appendChild(cardImg);

    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body", "text-center");
    memberCard.appendChild(cardBody);

    let cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title");
    cardBody.appendChild(cardTitle);

    let cardText = document.createElement("p");
    cardText.classList.add("card-text");
    cardBody.appendChild(cardText);

    for (let key in team[index]) {

        switch (key) {
            case "name":
                cardTitle.innerText = team[index][key];
                break;

            case "role":
                cardText.innerText = team[index][key];
                break;

            case "image":
                cardImg.src = `./assets/img/${team[index][key]}`;
                break;

            default:
                break;
        }

    }

}

// Registrare una nuova persona nel lista del team e crearne la card al click di Add