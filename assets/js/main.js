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

    /* console.log(team[index].name);
    console.log(team[index].role);
    console.log(team[index].image); */
    console.log(" ");
}

/* MILESTONE 2:
stampare le stesse informazioni su DOM sottoforma di stringhe */

for (let index in team) {

    let personSection = document.createElement("div");
    let personInfo = personSection.innerText;

    document.body.appendChild(personSection);

    personInfo = `Persona ${Number(index) + 1}: `;
    console.log(personInfo);
    console.log(personSection.innerText);

    for (let key in team[index]) {

        personSection.innerText += team[index][key] + " ";

    }

    document.body.appendChild(document.createElement("br"));

}