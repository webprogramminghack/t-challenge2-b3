'use strict';

// Make decorator function with name withGreeting
// Inside the decorator, you need to
// 1. Convert JSON string to JavaScript object
// 2. Add a welcome message (using console.log)
// 3. Bind `this` to the user object and call the original function

// Don't delete the code below
function printUserInfo() {
  console.log(`Name: ${this.name}, Age: ${this.age}`);
}

// If you want to try the challenge in terminal, uncomment the code below
// const decoratedPrintUserInfo = withGreeting(printUserInfo);

// const userJSON = `{
//   "name": "Alice",
//   "age": 25
// }`;

// decoratedPrintUserInfo(userJSON);

// Don't delete the code below
module.exports = {
  withGreeting,
  printUserInfo,
};
