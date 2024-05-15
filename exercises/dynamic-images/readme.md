## HTML

### [`dynamic-images\index.html`](index.html)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Dynamic Images</title>
  </head>
  <body>
    <main>
      <select name="" id="imageFileDropdown">
        <option value="">Select...</option>
      </select>

      <button id="addImageButton">Add Image</button>
      <button id="clearImagesButton">Clear Images</button>

      <div id="imageContainerDiv"></div>
    </main>
    <script src="scripts/index.js"></script>
  </body>
</html>
```

1. `<!DOCTYPE html>`: This declaration specifies the document type and version of HTML being used, which is HTML5 in this case.

2. `<html lang="en">`: The `<html>` tag defines the root of an HTML document. The `lang="en"` attribute specifies that the document is written in English.

3. `<head>`: This section contains meta-information about the HTML document, such as character encoding, viewport settings, and the document's title.

4. `<meta charset="UTF-8" />`: This meta tag specifies the character encoding of the document as UTF-8, which supports a wide range of characters from different languages.

5. `<meta name="viewport" content="width=device-width, initial-scale=1.0" />`: This meta tag sets the viewport properties for responsive web design. It ensures that the width of the viewport is set to the width of the device, and the initial zoom level is set to 1.0.

6. `<title>Dynamic Images</title>`: This sets the title of the HTML document, which appears in the browser's title bar or tab.

7. `<body>`: The `<body>` tag contains the visible content of the HTML document.

8. `<main>`: This tag defines the main content area of the document.

9. `<select name="" id="imageFileDropdown">`: This creates a dropdown (select) element with the id "imageFileDropdown". It allows users to select options from a list.

10. `<option value="">Select...</option>`: This is an option within the dropdown with no value, providing a prompt for users to select an option.

11. `<button id="addImageButton">Add Image</button>`: This creates a button element with the id "addImageButton", which users can click to add an image.

12. `<button id="clearImagesButton">Clear Images</button>`: This creates another button element with the id "clearImagesButton", allowing users to clear all images.

13. `<div id="imageContainerDiv"></div>`: This empty `<div>` element with the id "imageContainerDiv" will serve as a container for dynamically added images.

14. `<script src="scripts/index.js"></script>`: This line imports an external JavaScript file named "index.js" from a "scripts" folder. This JavaScript file likely contains the functionality to add and clear images dynamically based on user actions. We'll delve into this JavaScript file next.

## JavaScript

### [`dynamic-images\scripts\index.js`](./scripts/index.js)

```javascript
"use strict";
```

- `"use strict";`: This is a directive that enables strict mode, which helps catch common coding mistakes and makes JavaScript more secure.

```javascript
let imageFiles = [
  {
    id: "1",
    path: "https://placehold.co/300x300?text=Placeholder+1",
    description: "placeholder 1",
  },
  // More objects representing image files...
];
```

- `let imageFiles = [...]`: This declares a variable named `imageFiles` using the `let` keyword and assigns it an array of objects. Each object represents an image file and contains properties such as `id`, `path`, and `description`.

```javascript
window.onload = function () {
  // HTML element variables
  const imageFileDropdown = document.querySelector("#imageFileDropdown");
  const addImageButton = document.querySelector("#addImageButton");
  const clearImagesButton = document.querySelector("#clearImagesButton");
  const imageContainerDiv = document.querySelector("#imageContainerDiv");

  // Function to load the image file dropdown
  function loadImageFileDropdown() {
    for (const imageFile of imageFiles) {
      let option = document.createElement("option");
      option.value = imageFile.id;
      option.innerText = imageFile.description;
      imageFileDropdown.appendChild(option);
    }
  }

  // Function to add an image
  function addImage() {
    const id = imageFileDropdown.value;
    const imageFile = imageFiles.find((imageFile) => imageFile.id == id);

    let image = document.createElement("img");
    image.src = imageFile.path;
    image.alt = imageFile.description;
    imageContainerDiv.appendChild(image);
  }

  // Function to clear images
  function clearImages() {
    imageContainerDiv.innerHTML = "";
  }

  // Event handling
  addImageButton.onclick = addImage;
  clearImagesButton.onclick = clearImages;

  // Initial loading
  loadImageFileDropdown();
};
```

- `window.onload = function () { ... }`: This code sets up an anonymous function to run when the HTML page is fully loaded. This ensures that all DOM elements are available for manipulation before JavaScript code executes.

- HTML element variables: These lines use `document.querySelector()` to select specific HTML elements by their IDs and store them in variables. These variables will be used to reference these elements later in the code.

- `loadImageFileDropdown()` function: This function dynamically populates the dropdown (`<select>`) element with options based on the `imageFiles` array. It creates an `<option>` element for each image file object in the array and appends it to the dropdown.

- `addImage()` function: This function is called when the "Add Image" button is clicked. It retrieves the selected image file from the dropdown, creates an `<img>` element with the corresponding `src` (image path) and `alt` (image description), and appends it to the `imageContainerDiv`.

- `clearImages()` function: This function is called when the "Clear Images" button is clicked. It removes all child elements (images) from the `imageContainerDiv` by setting its `innerHTML` to an empty string.

- Event handling: These lines assign event handlers to the "Add Image" and "Clear Images" buttons, specifying which functions should be called when these buttons are clicked.

- Initial loading: Finally, `loadImageFileDropdown()` is called once when the page initially loads to populate the dropdown with image options.
