// *********************** Operations ***********************

let value = 3;
let negValue = -value;
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello";
let str2 = " Maan Tandel";

let str3 = str1 + str2;
// console.log(str3);

let num1, num2, num3;

num1 = num2 = num3 = 2 + 2;

console.table([num1, num2, num3]);
let gameCounter = 100;
for (let i = 1; i <= 10; i++) {
  ++gameCounter;
}
// console.log(gameCounter);

let a = 10,
  b = 3;

console.log(a + b); // 13 — addition
console.log(a - b); // 7  — subtraction
console.log(a * b); // 30 — multiplication
console.log(a / b); // 3.333... — division
console.log(a % b); // 1  — modulus (remainder)
console.log(a ** b); // 1000 — exponentiation (10^3)

// Short-circuiting — very commonly used in Angular templates/code
let user = {
  name: "",
};
const name = user.name || "Guest"; // fallback if falsy
console.log(name); // Guest
// user && user.login(); // only call if user exists

// Ternary Operator
let isExcelDownloading = false;
const status = isExcelDownloading ? "Downloading..." : "Ready";
console.log(status); // Ready

// Optional Chaining (?.)
// const city = user?.address?.city;

// Spread — expand an array/object
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2); // [ 1, 2, 3, 4, 5 ]

// Rest — collect remaining args into an array
function sum(...nums) {
  const val = nums.reduce((a, b) => a + b, 0);
  console.log(val);
}
sum(1, 2, 3); // 6

widget = {
  name: "Maan",
  age: 12,
};
const { data, gridConfig } = widget.name; // object destructuring
const [first, second] = [10, 20];
console.table([data, gridConfig]); // undefined
console.table([first, second]); // 10,20
console.log(second) // space 

const gridConfig1 = ''
const  excelName = gridConfig1 ?? 'defalt'; // only specify null and Undefined
const  excelName1 = gridConfig1 || 'defalt'; // only specify null and Undefined
console.log(excelName) // space 
console.log(excelName1) // defalt 


let count = 5;
let total = count++ + ++count;
console.log(total) // 12