const student = {
  name: "Drexel",
  age: 21,
  course: "BSIT",
  isEnrolled: true,
};

let names = (student) => {
  const { isEnrolled, ...newstudent } = student; // uses for react
  // delete student.isEnrolled; // uses for vanilla js
  // return student
  return newstudent;
};
console.log(names(student));

// accessing the object and turning to a string from Object to array then use forEach() which is an array method then turning it into a string using backticks

const phone = {
  brand: "Samsung",
  model: "S23",
  price: 45000,
  storage: 256,
};

let entry = (phone) => {
  Object.entries(phone).forEach(([key, value]) => {
    console.log(`${key} : ${value}`);
  });
};

entry(phone);

// filter only string and numbers using filter (typeof), also count numbers using reduce() and added object
const product = {
  name: "Laptop",
  price: 32000,
  stock: 15,
  category: "Electronics",
  rating: 4.5,
};

product.add = "Added property";

let filteredItems = (product) => {
  let numberedItems = Object.values(product).filter(
    (value) => typeof value === "number",
  );

  let stringItems = Object.values(product).filter(
    (value) => typeof value === "string",
  );

  let totalNum = numberedItems.reduce((acc, curr) => acc + 1, 0);

  console.log(
    `filtered number are: ${numberedItems} and the total number is ${totalNum} and the string products are ${stringItems}`,
  );
};

filteredItems(product);
