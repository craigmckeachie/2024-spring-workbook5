"use strict";
//data
// variable imageFiles gets declared and assigned an array []
// which contains objects representing an image file
let imageFiles = [
  {
    id: "1",
    path: "https://placehold.co/300x300?text=Placeholder+1",
    description: "placeholder 1",
  },
  {
    id: "2",
    path: "https://placehold.co/300x300?text=Placeholder+2",
    description: "placeholder 2",
  },
  {
    id: "3",
    path: "https://placehold.co/300x300?text=Placeholder+3",
    description: "placeholder 3",
  },
  {
    id: "4",
    path: "https://placehold.co/300x300?text=Placeholder+4",
    description: "placeholder 4",
  },
  {
    id: "5",
    path: "https://placehold.co/300x300?text=Placeholder+5",
    description: "placeholder 5",
  },
  {
    id: "6",
    path: "https://placehold.co/300x300?text=Placeholder+6",
    description: "placeholder 6",
  },
  {
    id: "7",
    path: "https://placehold.co/300x300?text=Placeholder+7",
    description: "placeholder 7",
  },
  {
    id: "8",
    path: "https://placehold.co/300x300?text=Placeholder+8",
    description: "placeholder 8",
  },
  {
    id: "9",
    path: "https://placehold.co/300x300?text=Placeholder+9",
    description: "placeholder 9",
  },
  {
    id: "10",
    path: "https://placehold.co/300x300?text=Placeholder+10",
    description: "placeholder 10",
  },
];

window.onload = function () {
  //get all html elements into variables
  const imageFileDropdown = document.querySelector("#imageFileDropdown");
  const addImageButton = document.querySelector("#addImageButton");
  const clearImagesButton = document.querySelector("#clearImagesButton");
  const imageContainerDiv = document.querySelector("#imageContainerDiv");

  //define  your functions

  function loadImageFileDropdown() {
    for (const imageFile of imageFiles) {
      let option = document.createElement("option");
      option.value = imageFile.id;
      option.innerText = imageFile.description;
      imageFileDropdown.appendChild(option);
    }
  }

  function addImage() {
    const id = imageFileDropdown.value;
    const imageFile = imageFiles.find((imageFile) => imageFile.id == id);

    let image = document.createElement("img");
    image.src = imageFile.path;
    image.alt = imageFile.description;
    imageContainerDiv.appendChild(image);
  }

  function clearImages() {
    imageContainerDiv.innerHTML = "";
  }

  //associate your functions with html element events
  addImageButton.onclick = addImage;
  clearImagesButton.onclick = clearImages;
  loadImageFileDropdown();
};
