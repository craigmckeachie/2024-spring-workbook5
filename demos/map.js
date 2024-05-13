"use strict";

let kids = [
  { first: "Natalie", last: "Plyers" },
  { first: "Brittany", last: "Ray" },
  { first: "Zachary", last: "Westly" },
];

function flattenKid(kid) {
  return `${kid.last}, ${kid.first} `;
}

// let flattenKid = (kid) => console.log(`${kid.last}, ${kid.first} `);
let flattenedKids = kids.map(flattenKid);
 console.log(flattenedKids);

// let flattenedKids= kids.map((kid) => `${kid.last}, ${kid.first} `);
// console.log(flattenedKids);

