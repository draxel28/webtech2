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
