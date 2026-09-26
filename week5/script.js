// This is a simple JavaScript file that logs a message to the console.
// console.log("Hello, World!");

// const name = "John Doe"; //String variable
// let age = 30; //Number variable
// let isStudent = true; //Boolean variable

// age = 31; //Updating the age variable
// age = "thirty-one"; //Changing the type of age variable to string
// name = "Jane Doe"; //Updating the name variable
// console.log(name, age, isStudent);

// Block Scope Example
// let globalStatus = "Active";

// if (true) {
//   let blockStatus = "Inactive"; // Block-scoped variable
//   const blockMessage = "This is a block-scoped message."; // Block-scoped constant
//   var notBlockScoped = "This variable is not block-scoped."; // Function-scoped variable

//   console.log("Inside the block:");
//   console.log("blockStatus:", blockStatus);
//   console.log("blockMessage:", blockMessage);
//   console.log("notBlockScoped:", notBlockScoped);
// }
// console.log("Outside the block:");
// console.log("globalStatus:", globalStatus);

// let myVariable = "Hello, World!";
// let myvariable = "Hello, Universe!"; // This will cause an error because 'myVariable' is already declared with 'let'
// const myConstant = "This is a constant value.";
// const myconstant =
//   "This will also cause an error because 'myConstant' is already declared with 'const'.";

// let myVariable = "Hello, World!";
// const myConstant = "This is a constant value.";
// const myconstant =
//   "This will also cause an error because 'myConstant' is already declared with 'const'.";

// Primitive Data Types
// let myString = "Hello, World!"; // String
// let myNumber = 42; // Number
// let myBoolean = false; // Boolean
// let myUndefined; // Undefined
// let myNull = null; // Null

// Object Data Types
let myProfile = {
  name: "Emmanuel",
  age: 25,
  isStudent: true,
  hobbies: ["reading", "coding", "gaming"],
  address: {
    street: "123 Main St",
    city: "Anytown",
    country: "USA",
  },
};

// console.log(
//   "My Profile:",
//   myProfile.name,
//   myProfile.age,
//   myProfile.isStudent,
//   myProfile.hobbies,
//   myProfile.address,
// );

console.log("My Profile:", myProfile);
