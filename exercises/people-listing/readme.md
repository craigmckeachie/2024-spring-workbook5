### Step-by-Step Tutorial: Creating a People Listing Application

#### Step 1: Set Up Your Project

1. **Create a Project Folder**:
   - Create a new folder for your project. Name it `people-listing-app`.
2. **Create Subfolders**:
   - Inside this folder, create a subfolder named `scripts`.

#### Step 2: Create the HTML File

1. **Create `index.html`**:
   - Inside the `people-listing-app` folder, create a file named `index.html`.
2. **Basic HTML Structure**:
   - Open `index.html` and add the following basic structure:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>People Listing</title>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.classless.min.css"
    />
  </head>
  <body>
    <main>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>IP Address</th>
          </tr>
        </thead>
        <tbody id="peopleTableBody"></tbody>
      </table>
    </main>
    <script src="scripts/people.js"></script>
  </body>
</html>
```

3. **Explanation**:
   - `<!DOCTYPE html>`: Specifies the document type and version (HTML5).
   - `<html lang="en">`: Sets the language of the document to English.
   - `<head>`: Contains meta-information about the document (character encoding, viewport settings, title).
   - `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.classless.min.css">`: Links to a minimalist CSS framework for styling.
   - `<body>`: Contains the visible content of the document.
   - `<main>`: Defines the main content area.
   - `<table>`: Defines a table for displaying people’s information.
   - `<thead>`: Contains the table header.
   - `<tr>`: Defines a row in the table.
   - `<th>`: Defines a header cell in the table.
   - `<tbody id="peopleTableBody"></tbody>`: An empty table body that will be populated with data.
   - `<script src="scripts/people.js"></script>`: Includes the external JavaScript file.

### Step 3: Incremental Step-by-Step Tutorial for JavaScript

#### A: Create the JavaScript File

1. **Create `people.js`**:
   - Inside the `scripts` folder, create a file named `people.js`.

#### B: Define Strict Mode and Data

1. **Add Strict Mode and People Data**:
   - Open `people.js` and add the following code:

```javascript
"use strict";

let people = [
  {
    id: 1,
    firstName: "Ezra",
    lastName: "Aiden",
    email: "e.aiden@basshall.com",
    ipAddress: "18.6.24.104",
  },
  {
    id: 2,
    firstName: "Ian",
    lastName: "Auston",
    email: "ian.auston@goldmansachs.com",
    ipAddress: "17.16.4.105",
  },
  {
    id: 3,
    firstName: "Siddalee",
    lastName: "Grace",
    email: "susa@time.com",
    ipAddress: "106.77.22.16",
  },
  // ... Add more people as needed
];
```

2. **Explanation**:
   - `"use strict";`: This directive enables strict mode, which helps catch common coding errors.
   - `let people = [...]`: Defines an array of objects, each representing a person with properties: `id`, `firstName`, `lastName`, `email`, and `ipAddress`.

#### Step 3: Set Up Onload Event

1. **Add Window Onload Event**:
   - Add the following code to `people.js`:

```javascript
window.onload = function () {
  // Code to run when the page is fully loaded
};
```

2. **Explanation**:
   - `window.onload = function () { ... }`: This function will run after the HTML document has fully loaded.

#### C: Select the Table Body Element

1. **Select Table Body Element**:
   - Inside the `window.onload` function, add the following code:

```javascript
window.onload = function () {
  // HTML element variables
  const peopleTableBody = document.querySelector("#peopleTableBody");
};
```

2. **Explanation**:
   - `const peopleTableBody = document.querySelector("#peopleTableBody");`: Selects the table body element by its ID and stores it in a variable.

#### D: Load People Table

1. **Create Function to Load People Table**:
   - Define a function to load the people table within the `window.onload` function:

```javascript
window.onload = function () {
  // HTML element variables
  const peopleTableBody = document.querySelector("#peopleTableBody");

  // Function to load the people table
  function loadPeopleTable() {
    for (const person of people) {
      buildTableRow(person);
    }
  }

  // Initial loading of the table
  loadPeopleTable();
};
```

2. **Explanation**:
   - `function loadPeopleTable() { ... }`: Defines a function that iterates over the `people` array and calls `buildTableRow` for each person.
   - `loadPeopleTable();`: Calls the `loadPeopleTable` function to populate the table when the page loads.

#### E: Build Table Rows

1. **Create Function to Build Table Rows**:
   - Define the `buildTableRow` function inside the `window.onload` function:

```javascript
window.onload = function () {
  // HTML element variables
  const peopleTableBody = document.querySelector("#peopleTableBody");

  // Function to load the people table
  function loadPeopleTable() {
    for (const person of people) {
      buildTableRow(person);
    }
  }

  // Function to build a table row
  function buildTableRow(person) {
    let row = peopleTableBody.insertRow();

    let cell1 = row.insertCell();
    cell1.innerText = person.firstName;

    let cell2 = row.insertCell();
    cell2.innerText = person.lastName;

    let cell3 = row.insertCell();
    cell3.innerText = person.email;

    let cell4 = row.insertCell();
    cell4.innerText = person.ipAddress;
  }

  // Initial loading of the table
  loadPeopleTable();
};
```

2. **Explanation**:
   - `function buildTableRow(person) { ... }`: Defines a function that creates a new table row and inserts cells for each property of the `person` object.
   - `let row = peopleTableBody.insertRow();`: Inserts a new row in the table body.
   - `let cell1 = row.insertCell();`, `cell1.innerText = person.firstName;`: Inserts a new cell in the row and sets its text content to the person's first name. This pattern is repeated for the last name, email, and IP address.

#### F: Test Your Application

1. **Open `index.html`**:
   - Open the `index.html` file in a web browser.
2. **Verify the Application**:
   - You should see a table with rows displaying the first name, last name, email, and IP address for each person in the `people` array.
