console.log(typeof null); // object
console.log(typeof undefined); // undefined
console.log(typeof NaN); // Number
console.log(typeof []); // Object
console.log(typeof {}); //object

console.log(1 + "2"); // 12
console.log("5" - 2); // 3
console.log("5" + 2 + 3); // 523 // x
console.log(3 + 2 + "7"); // 57
console.log(true + true); // 2
console.log([] + []); // empty  // x
console.log([] + {}); // [object Object] // x

function getDay(num) {
    switch (num) {
        case 1:
            return "MonDay"
            break
        case 2:
            return "Tuesday"
            break
        case 3:
            return "Wednesday"
            break
        default:
            return "Invalid"
            break
    }
}
console.log(getDay(9))

console.log(0 || "hello"); // hello
console.log(0 ?? "hello"); // 0 // x
console.log(null ?? "default"); // default // x
console.log("" || "fallback"); // fallback

for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i)
    }
}

// Given const nums = [5, 12, 8, 130, 44, 3];

// Get all numbers greater than 10
// Double each number
// Find the sum of all numbers
// Find the first number greater than 40

const nums = [5, 12, 8, 130, 44, 3];
console.log(nums.filter(item => item > 10).map(item => item * 2).reduce((a, b) => a + b))
// const morethan10 = []
// nums.forEach(element => {
//     if (element > 10) {
//         morethan10.push(element)
//     }
// })
// const double = morethan10.map((item) => {
//     return item * 2
// })
// const sumam = double.reduce((a, b) => a + b)
// const greaterthen40 = double.find((item) => item > 40)
// console.log(morethan10)
// console.log(double)
// console.log(sumam)
// console.log(greaterthen40)

