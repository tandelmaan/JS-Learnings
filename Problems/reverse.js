// To Covert an Array We have Direct Metod reverse()

const arr1 = ['a', 'b', 'c', 'd', 'e']
const res = arr1.reverse()
console.log('res: ', res);


// convert String to reverse and check pelindrom

const str1 = "rahul"
const result = str1.split("").reverse().join("").toLowerCase()
if (result == str1.toLowerCase()) {
    console.log(`${str1} is Pelindrom`)
} else {
    console.log(`${str1} !== ${result} , is not Pelindrom`)
}

// Swap Two variable With third Variable 

let a = 10
let b = 20
let temp = a
a = b
b = temp
console.log(`Now a is ${a} and b is ${b}`)



// Swap Two variable Without third Variable

let c = 10;
let d = 20;

[c, d] = [d, c];

console.log(`Now c is ${c} and d is ${d}`);