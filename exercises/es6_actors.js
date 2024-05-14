"use strict";

let academyMembers = [
  {
    memID: 101,
    name: "Bob Brown",
    films: ["Bob I", "Bob II", "Bob III", "Bob IV"],
  },
  {
    memID: 142,
    name: "Sallie Smith",
    films: ["A Good Day", "A Better Day"],
  },
  {
    memID: 187,
    name: "Fred Flanders",
    films: ["Who is Fred?", "Where is Fred?", "What is Fred?", "Why Fred?"],
  },
  {
    memID: 203,
    name: "Bobbie Boots",
    films: ["Walking Boots", "Hiking Boots", "Cowboy Boots"],
  },
];

// Who is the Academy Member whose ID is 187?
const member187 = academyMembers.find((m) => m.memID == "187");
console.log(member187.name);

// Who has been in at least 3 films?
const membersInAtLeast3Films = academyMembers.filter(
  (m) => m.films.length >= 3
);
console.log(membersInAtLeast3Films);

// Who has a name that starts with "Bob"?
const membersNamedBob = academyMembers.filter((m) => m.name.startsWith("Bob"));
console.log(membersNamedBob);

// HARDER: Which Academy Members have been in a film
// that starts with "A"
const membersInStartsWithAFilms = academyMembers.filter((m) =>
  m.films.find((f) => f.startsWith("A"))
);
console.log(membersInStartsWithAFilms);
