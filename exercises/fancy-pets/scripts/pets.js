"use strict";

let pets = [
  {
    name: "Rubby",
    type: "Dog",
    breed: "Corgi",
    bestTrick: "Tug of war",
    image: "images/rubby.com",
  },
  {
    name: "Howdy",
    type: "Dog",
    breed: "Mixed Breed",
    bestTrick: "Go find it!",
    image: "images/howdy.com",
  },
  {
    name: "KitKit",
    type: "Cat",
    breed: "American Shorthair",
    bestTrick: "Commanding his owner to feed him",
    image: "images/kitkit.com",
  },
  {
    name: "Lil' Miss",
    type: "Cat",
    breed: "Tabby",
    bestTrick: "Looking aloof",
    image: "images/lilmiss.com",
  },
  {
    name: "Happy",
    type: "Dog",
    breed: "Golden Retriever",
    bestTrick: "Refusing to retrieve!",
    image: "images/happy.com",
  },
  {
    name: "Piper",
    type: "Dog",
    breed: "Beagle",
    bestTrick: "Find it!  Dropped food edition!",
    image: "images/piper.com",
  },
  {
    name: "Spooky",
    type: "Cat",
    breed: "Mixed",
    bestTrick: "Gymnastics!",
    image: "images/spooky.com",
  },
];

window.onload = function () {
  // HTML element variables
  const petsDiv = document.querySelector("#petsDiv");

  //functions
  function loadPets() {
    for (const pet of pets) {
      buildCard(pet);
    }
  }

  function buildCard(pet) {
    let cardDiv = document.createElement("div");
    cardDiv.classList.add("card");

    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    cardBody.innerText = pet.name;
    cardDiv.appendChild(cardBody);

    petsDiv.appendChild(cardDiv);
  }

  //event handling

  //initial loading
  loadPets();
};
