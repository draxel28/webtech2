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

// nested objects, changed value, add value using push() and accessing value thru index

const user = {
  name: "Drexel",
  address: {
    city: "Ternate",
    province: "Cavite",
    zip: 4105,
  },
  hobbies: ["coding", "running", "coffee"],
};

let objects = (user) => {
  let city = user.address.city;
  let secHobby = user.hobbies[1];
  user.hobbies.push("Programming");
  user.address.province = "Manila";

  return { city, secHobby };
};

console.log(objects(user));
console.log(user);

// array of objects- calculate the total price of the cart

const cart = {
  items: [
    { name: "Coffee", price: 120, quantity: 2 },
    { name: "Milk Tea", price: 110, quantity: 1 },
    { name: "Matcha", price: 130, quantity: 3 },
  ],
};

let totalCartPrice = (cart) => {
  let res = cart.items.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
  return res;
};

console.log(totalCartPrice(cart));

// accessing in array of objects
const products = [
  { name: "Laptop", price: 32000, stock: 5 },
  { name: "Mouse", price: 500, stock: 20 },
  { name: "Keyboard", price: 1500, stock: 10 },
];

let productNames = (products) => {
  return products.reduce((acc, curr) => {
    return acc + curr.price;
  }, 0);
};
console.log(productNames(products));

const students = [
  { name: "Ana", grade: 85, passed: true },
  { name: "Ben", grade: 74, passed: false },
  { name: "Cara", grade: 92, passed: true },
  { name: "Dan", grade: 60, passed: false },
];

let passedStudents = (students) => {
  return students
    .filter((name) => name.passed === true)
    .map((value) => value.name + " - " + value.grade)
    .toString();
};

let aboveEightyStudents = (students) => {
  return students
    .filter((value) => value.grade >= 80)
    .map((value) => value.name);
};

let averageGrade = (students) => {
  return (
    students.reduce((acc, curr) => {
      return acc + curr.grade;
    }, 0) / students.length
  );
};

let failedStudent = (students) => {
  return students
    .filter((value) => value.passed)
    .reduce((acc, curr) => {
      return acc + 1;
    }, 0);
};

//MORE PRACTICE

const Cart = [
  { name: "Coffee", price: 120, quantity: 2 },
  { name: "Milk Tea", price: 110, quantity: 1 },
  { name: "Matcha", price: 130, quantity: 3 },
];

let totalCart = (Cart) => {
  return Cart.filter((value) => value.quantity > 1).reduce((total, curr) => {
    return total + curr.price * curr.quantity;
  }, 0);
};

let totalItems = (Cart) => {
  return Cart.reduce((total, curr) => {
    return total + curr.quantity;
  }, 0);
};

const newCart = [...Cart, { name: "Coke", price: 50, quantity: 1 }]; //adding new item without mutating

console.log(newCart);
console.log(totalItems(Cart));

// another practice of adding new object without mutating

const users = [
  {
    name: "Drexel",
    hobbies: ["coding", "running"],
    address: { city: "Ternate", zip: 4105 },
  },
  {
    name: "Marco",
    hobbies: ["basketball", "music"],
    address: { city: "Manila", zip: 1000 },
  },
];

let addedHobbies = (users) => {
  return users.map((user) => {
    return user.name === "Drexel"
      ? { ...user, hobbies: [...user.hobbies, "Cracking"] }
      : user;
  });
}; // add object

let changeAddress = (users) => {
  return users.map((user) => {
    return user.name === "Marco"
      ? {
          ...user,
          address: { city: "cebu", zip: 1000 },
        }
      : user;
  });
}; // change object

let removeHobbies = (users) => {
  return users.map((user) => {
    return user.name === "Drexel"
      ? {
          ...user,
          hobbies: ["coding"],
        }
      : user;
  });
}; // remove object

console.log(removeHobbies(users));
console.log(changeAddress(users));
console.log(addedHobbies(users));

// reastic approach

const orders = [
  { id: 1, customer: "Ana", total: 500, status: "paid" },
  { id: 2, customer: "Ben", total: 1500, status: "pending" },
  { id: 3, customer: "Cara", total: 700, status: "paid" },
  { id: 4, customer: "Dan", total: 2000, status: "pending" },
];

let paidCustomers = (orders) => {
  return orders
    .filter((value) => value.status === "paid")
    .map((user) => user.customer);
};

let totalRev = (orders) => {
  return orders
    .filter((value) => value.status === "paid")
    .reduce((total, curr) => total + curr.total, 0);
};

let bestCustomer = (orders) => {
  return orders
    .filter((value) => value.total >= 1000)
    .map((user) => user.customer);
};

let pendingOrders = (orders) => {
  return orders
    .filter((value) => value.status === "pending")
    .reduce((total, curr) => total + 1, 0);
};

console.log(pendingOrders(orders));
console.log(paidCustomers(orders));
console.log(totalRev(orders));
console.log(bestCustomer(orders));
