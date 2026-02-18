const users = [
  { name: "Drexel", age: 21, email: "drex@gmail.com" },
  { name: "Anna", age: 17, email: "anna@gmail.com" },
  { name: "Mark", age: 25, email: "mark@gmail.com" },
];

//Counting How Many Adults

let numberAdults = (users) => {
  let adultAge = users
    .filter((user) => user.age > 18)
    .map((user) => user.age)
    .reduce((acc, curr) => acc + 1, 0);

  return adultAge;
};

console.log(numberAdults(users)); //Output: 2

//Getting youngest user

let youngestAge = (users) => {
  let age = users.reduce(
    (acc, curr) => (curr.age <= acc ? curr.age : acc),
    users[0].age
  );

  return age;
};

console.log(youngestAge(users)); //Output: 17

//Getting names of the products------------------------

const products = [
  { id: 1, name: "Phone", price: 500 },
  { id: 2, name: "Laptop", price: 1200 },
  { id: 3, name: "Keyboard", price: 100 },
];

let allNames = (products) => {
  let result = products
    .filter((prod) => prod.name)
    .map((prod) => prod.name)
    .toString();

  return result;
};

console.log(allNames(products)); //Output: "Phone, Laptop, Keyboard"

//Getting names of products with price >= 300------------------------

let highPrices = (products) => {
  let product = products
    .filter((prod) => prod.price >= 300)
    .map((prod) => prod.name)
    .toString();

  return product;
};

console.log(highPrices(products)); //Output: "Phone, Laptop"

//Getting total price of all products------------------------

let totalPrice = (products) => {
  let res = products
    .map((prod) => prod.price)
    .reduce((price, curr) => curr + price, 0);

  return res;
};
console.log(totalPrice(products)); //Output: 1800

//Getting name of the product with the smallest price----------------

let smallestPrices = (products) => {
  let product = products.reduce(
    (prod, curr) => (prod.price < curr.price ? prod : curr),
    products[0].price
  );

  return product.name;
};

console.log(smallestPrices(products)); //Output: "Keyboard"

//Getting names of the 3 cheapest products----------------

let cheapestToExpensive = (products) => {
  let result = products
    .slice()
    .sort((a, b) => a.price - b.price)
    .slice(0, 3)
    .map((prod) => prod.name + " : " + prod.price)
    .toString();

  return result;
};
console.log(cheapestToExpensive(products)); //Output: "Keyboard : 100, Phone : 500, Laptop : 1200"
