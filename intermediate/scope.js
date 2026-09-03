let userName = "Mxxn"
function greet() {
  console.log(userName)
}
greet()
console.log(userName)


// Lexical Scope 

// let name = "Global";

function outer() {
  let name = "Outer";

  function inner() {
    console.log(name);
  }

  inner();
}

outer(); // Outer Global


// Closures (Advanced Scope Concept)
// A closure happens when a function remembers variables from its outer scope even after the outer function finishes.

// Arrow Functions , Default & Rest Parameters, Spread Operator , Destructuring (arrays & objects) 

// Basic Syntax
// Traditional Function

function greet(name) {
  return `${name} Mxxn`
}
console.log(greet('Tandel'))

// Arrow Function 

const greet1 = (name) => {
  return `${name} Mxxn`
}
console.log(greet1('Tandel'))


// Returning Objects 
// const getUser = () => { name: "Mxxn" }; // Wrong
const getUser = () => ({ name: "Mxxn" }); // Right

const array1 = [1, 2, 3, 4, 5]
const res1 = array1.map((num) => num * 2)
console.log(res1) // New Array with Double Value

const nums = [1, 2, 3, 4, 5];
const even = nums.filter((val) => val % 2 == 0)
const total = nums.reduce((a, b) => a + b, 85)
console.log('even: ', even); //  [ 2, 4 ]
console.log('total: ', total); // 100
console.log('nums: ', nums); // [ 1, 2, 3, 4, 5 ]


const obj1 = {
  name: "Mxxn Tandel",
  func1: function () {
    return `${this.name} Are You There`
  }
}
const obj2 = {
  name: "Mxxn Tandel",
  func1: () => {
    return `${this.name} Are you hear`
  }
}
console.log(obj1.func1())
console.log(obj2.func1())


const totalforuser = (...num) => {
  const res = num.reduce((a, b) => a + b, 0)
  return res
}
console.log(totalforuser(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))

function order(customer, ...items) {
  console.log(customer);
  console.log(items);
}

order("Mxxn", "Laptop", "Mouse");

// Swap Values 
let a = 10;
let b = 20;

[a, b] = [b, a];

console.log(a, b);


const response = {
  id: 1,
  name: "Mxxn",
  email: "Mxxn@gmail.com"
};

const {
  name,
  email
} = response;

console.log(name, email);

// Q1: Difference between Rest and Spread?

// Rest (...)

// Collects values into an array/object.
// Used in function parameters and destructuring.

// Spread (...)

// Expands arrays/objects.
// Used while copying, merging, passing arguments.