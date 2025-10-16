//objects

const data = {
  name: "Saurabh",
  age: 12,
  address: "UttarPradesh",
  Education: "Graduate CSE",
};
Object.freeze(data);

//object name will not change because it freeze
data.name = "singh";
console.log(data.name);

//The 'this' keyword is a powerful and fundamental concept used to access properties and methods of an object, allowing for more flexible and reusable code.

console.log(this.data);
