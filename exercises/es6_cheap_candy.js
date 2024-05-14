"use strict";

let products = [
  { product: "Gummy Worms", price: 5.79 },
  { product: "Plain M&Ms", price: 2.89 },
  { product: "Peanut M&Ms", price: 2.89 },
  { product: "Swedish Fish", price: 3.79 },
];

// Which candies costs less than $4.00?
const cheapCandies = products.filter((p) => p.price < 4);
console.log(cheapCandies);

// Which candies has "M&M" its name?
const mmCandies = products.filter((p) => p.product.indexOf("M&Ms") != -1);
console.log(mmCandies);

// Do we carry "Swedish Fish"?
const swedishFish = products.find((p) => p.product == "Swedish Fish");
let answer = "Ask again later.";
if (swedishFish) {
  console.log("Yes, we carry the delicious fishes.");
} else {
    console.log("No, we do not have Swedish Fish.");
}
