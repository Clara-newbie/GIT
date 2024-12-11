// Esercizio 5
const students = [
  { nome: "Alice", voto: 95 },
  { nome: "Bob", voto: 88 },
  { nome: "Carol", voto: 76 },
  { nome: "David", voto: 92 },
  { nome: "Eve", voto: 84 },
];

const nomiStudenti = students.forEach((studente) => console.log(studente.nome));
const votoAlto = students.find((studente) => studente.voto > 90);
console.log(votoAlto);

const sommaVoti = students.reduce((acc, studente) => (acc += studente.voto), 0);
const mediaVoti = sommaVoti / students.length;
console.log(mediaVoti);

const nomiMaiuscolo = students.map((studente) => studente.nome.toUpperCase());
console.log(nomiMaiuscolo);

const votiAlti = students.filter((studente) => studente.voto > 85);
console.log(votiAlti);
