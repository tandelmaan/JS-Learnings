// Find the Second Largest Values 

const arr1 = [1, 2, 3, 4, 5, 7, 9, 9, 8, 9]

const firstMax = Math.max(...arr1)
const secondLarge = Math.max(...arr1.filter((val) => val !== firstMax))
console.log('secondLarge: ', secondLarge); // 8



// Find And Filter Method Diffrence 

const arr2 = [
    { name: "Raj", age: 12 },
    { name: "Raj", age: 21 },
    { name: "Limbu", age: 18 },
    { name: "Yash", age: 19 },
    { name: "Soham", age: 17 },
]
const findmethod = arr2.find((item) => {
    return item.age > 18
})
const filtermethod = arr2.filter((item) => {
    return item.age > 18
})
console.log('findmethod: ', findmethod);
console.log('filtermethod: ', filtermethod);