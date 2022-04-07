const team = [{
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

    let personSection = document.createElement("div");
    // let personInfo = personSection.innerHTML; non funziona, non è reattiva!

    document.body.appendChild(personSection);

    personSection.innerHTML = `Persona ${Number(index) + 1}: `;

    for (let key in team[index]) {

        if (key != "image") {
            let fullText = team[index][key] + " - ";
            personSection.innerHTML += fullText;
        } else {
            // BONUS 1: trasformare la stringa foto in una immagine effettiva
            let personImg = document.createElement("div");
            personImg.classList.add("person-img");
            personImg.style.backgroundImage = `url(./assets/img/${team[index][key]})`;
            personSection.appendChild(personImg);
        }

    }

    document.body.appendChild(document.createElement("br"));

}