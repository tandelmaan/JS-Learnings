// alert("hiii") alert is not defined , We are using nodejs , Not browser

// Data Types 
// 7 primitives DataTypes : Number, String, Boolean, undefined, null, BigInt, Symbol
let note; // Undefined 
let age = 22 // Number 
let name = "Tandel Maan" // String
let isNull = null // null
let isMale = true // boolean 
let bigNumber = 123n // BigInt 
// let sym1 = Symbol(id) // Symbol for Unique


console.log(typeof isNull) // object

// Reference type (1) : Object

let s = "hello";
s[0] = "P"; // silently does nothing
console.log(s);

let x;           // undefined — declared, not assigned (JS's doing)
let y = null;     // null — explicitly "no value" (your doing)

x == null;   // true  (loose equality treats them as equal)
x === null;  // false (strict equality distinguishes them)

"5" == 5;   // true  — coerces string to number first
"5" === 5;  // false — different types, no coercion

0 == false;      // true
"" == false;     // true
null == undefined; // true
null === undefined; // false

"5" + 3;    // "53"  — + triggers string concatenation if either side is a string
"5" - 3;    // 2     — -, *, / force numeric coercion
"5" * "2";  // 10
true + 1;   // 2     — true coerces to 1
[] + [];    // ""    — arrays coerce to strings first
[] + {};    // "[object Object]"


// Quick summary table
// Type	     Mutable?	Compared by	 typeof
// Number	    No	       Value	"number"
// String	    No	       Value	"string"
// Boolean	    No	       Value	"boolean"
// undefined	No	       Value	"undefined"
// null	        No	       Value	"object" ⚠️
// BigInt	    No	       Value	"bigint"
// Symbol	    No	       Identity	"symbol"
// Object (incl. Array, Function)	Yes	Reference	"object"/"function"


let Val1 = "abc123"
const val2 = Number(Val1)
console.log(val2) //Nan
console.log(typeof val2) // Number

// "33" => 33
// "33abc" => Nan
// true => 1 , false => 0
// "" => false , "maan" => true

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// ********** Stack and Heap :  JavaScript engines (V8, SpiderMonkey, etc.) manage memory using two distinct regions:
// Stack : We get Copy of that Value or Variable
// Heap : We get reference of That Variables 
// Copy by Value vs Copy by Reference 

// 	            Stack	                                |    Heap
// Stores	    Primitives, function calls, references	|    Objects, arrays, functions
// Structure	LIFO (Last In, First Out)	            |    Unstructured, large pool
// Size	        Fixed, small	                        |    Dynamic, large
// Speed	    Very fast	                            |    Slower (needs lookup)
// Allocation	Automatic (static)	                    |    Manual-ish (dynamic, GC-managed)

// Primitives (stack) → copied BY VALUE 
let n1 = 10;
let n2 = x;   // y gets a completely independent COPY of the value
n2 = 20;
console.log(n1); // 10 — unaffected


// Objects (heap) → copied BY REFERENCE

let obj1 = { count: 10 };
let obj2 = obj1;   // obj2 points to the SAME heap location as obj1
obj2.count = 20;
console.log(obj1.count); // 20 — obj1 is affected too!