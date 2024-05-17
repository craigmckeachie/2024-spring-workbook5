"use strict";

let person = {
  id: 1,
  firstName: "Ezra",
  lastName: "Aiden",
  email: "e.aiden@basshall.com",
  ipAddress: "18.6.24.104",
};

for (const propertyName in person) {
  console.log(propertyName);
  console.log(person[propertyName]);
}
