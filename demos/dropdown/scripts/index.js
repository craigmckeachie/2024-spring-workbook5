"use strict";

const lipstickFormulations = [
  {
    id: 1,
    type: "Matte",
    finish: "Flat",
    description:
      "A long-lasting lipstick with a shine-free finish that provides full coverage and intense color.",
  },
  {
    id: 2,
    type: "Satin",
    finish: "Semi-Matte",
    description:
      "A creamy lipstick with a soft, velvety finish that offers medium to full coverage.",
  },
  {
    id: 3,
    type: "Gloss",
    finish: "Shiny",
    description:
      "A high-shine lipstick that provides a glossy finish and a sheer to medium coverage.",
  },
  {
    id: 4,
    type: "Cream",
    finish: "Creamy",
    description:
      "A moisturizing lipstick with a creamy texture that offers medium to full coverage and a satin finish.",
  },
  {
    id: 5,
    type: "Sheer",
    finish: "Light",
    description:
      "A lightweight lipstick that provides a sheer wash of color with a subtle shine.",
  },
  {
    id: 6,
    type: "Liquid",
    finish: "Matte/Gloss",
    description:
      "A liquid lipstick that dries to a matte or glossy finish, providing intense color and long wear.",
  },
  {
    id: 7,
    type: "Metallic",
    finish: "Shimmery",
    description:
      "A bold lipstick with a metallic finish that offers full coverage and a high-impact shine.",
  },
  {
    id: 8,
    type: "Stain",
    finish: "Natural",
    description:
      "A long-wearing lip stain that provides a natural, matte finish with a hint of color.",
  },
  {
    id: 9,
    type: "Balm",
    finish: "Hydrating",
    description:
      "A tinted lip balm that moisturizes lips while providing a sheer wash of color.",
  },
  {
    id: 10,
    type: "Plumping",
    finish: "Glossy",
    description:
      "A lip plumper that provides a glossy finish while making lips appear fuller.",
  },
];

// HTML element variables
const formulationsDropdown = document.getElementById("formulationsDropdown");

//functions
function loadFormulationsDropdown() {
  for (const formulation of lipstickFormulations) {
    
    let option = document.createElement("option");
    option.value = formulation.id;
    option.innerText = formulation.type + " " + formulation.finish;

    formulationsDropdown.appendChild(option);
  }
}

//event handling

//initial loading
loadFormulationsDropdown();
