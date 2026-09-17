// Find the Factorial Numer 
let fact = 1
let num = 5
for (let i = 1; i <= num; i++) {
    fact = fact * i
}
console.log(fact)


// find the Factor of number

const factofnum = 12
for (let i = 1; i <= factofnum; i++) {
    if (factofnum % i == 0) {
        console.log(i)
    }
}