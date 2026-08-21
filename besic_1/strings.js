// String InterPolation `${}`

const name = " Royal mxxn"
const age = 24
const isMale = true

console.log(`Hii My name is ${name} , and i am ${age} years old and i am ${isMale ? 'Male' : 'No Male'}`)

// Strings Methods : 

const str = "Hello World";

console.log(str.length);          // 11 — property, not method

console.log(str.charAt(0));        // "H" — character at index
console.log(str[0]);          // "H" — bracket access (modern, more common)
console.log(str.charCodeAt(0));    // 72 — Unicode code point of char at index
console.log(String.fromCharCode(72)); // "H" — reverse: code → char

str.indexOf("World");  // 6 — first occurrence index, -1 if not found
str.lastIndexOf("o");  // 7 — last occurrence
str.includes("World"); // true — does it contain substring?
str.startsWith("Hello"); // true
str.endsWith("World");   // true

const str2 = "Royal Mxxn"
console.log(str2) // Royal Mxxn
console.log(str2.trim()) // Royal Mxxn
console.log(str2.slice('0', '6')) // Royal 
console.log(str2.slice(-6)) // l Mxxn
console.log(str2.split(" ")) // ["Royal","mxxn"]
console.log(str2.split("")) // ["R","o","y"...]
console.log(str2.replace('Royal',"Maan")) // Maan Mxxn
console.log(str2.replaceAll('a',"x")) // Royxl Mxxn
console.log(str2.charAt(2).toUpperCase()) // Y