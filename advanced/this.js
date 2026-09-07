// This KeyWord

// this refers to the execution context — basically "who is calling this function right now." 
// Unlike most languages where this is fixed to the object it's defined in, JavaScript's this is determined by how a function is called, 
// not where it's defined (except for arrow functions).
const user = {
  name: "Royal",
  greet() {
    console.log(this.name);
  }
};
user.greet(); // "Royal" — this = user (the object left of the dot)mode: window/global object. In strict mode: undefined

// 21. DOM Manipulation (Document Object Model)

// What is DOM?
// When a browser loads HTML, it converts it into a tree-like structure called the DOM (Document Object Model).

// <body>
// <h1>Hello</h1>
// <button>Click Me</button>
// </body>

// DOM Structure:

// Document
//  └── body
//       ├── h1
//       └── button


// 24. JSON (parse & stringify)

// JSON = JavaScript Object Notation

// Used for data exchange between:

// Frontend ↔ Backend
// APIs
// Databases

const user1 = {
  name: "Maan",
  age: 25
};

const jsonData = JSON.stringify(user1);

console.log(typeof jsonData);

const jsonData1 =
  '{"name":"Maan","age":25}';

const user2 = JSON.parse(jsonData1);

console.log(user2);