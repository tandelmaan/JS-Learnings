const users = [
    { name: "mxxn", age: 22, address: "Balaji" },
    { name: "Asmat", age: 21, address: "ponsara" }
]
console.log(users.find(user => user.age > 21))

// Array sorting 

const DangerArray = [5, 4, 8, 5, 7, 2, 8, 6, 2, 8, 5]
console.log([...new Set(DangerArray)].sort((a, b) => a - b))

const arr = [10, 20, 30];
arr.forEach(value => {
    value = value * 10
    console.log(value);
});
console.log(arr)

// Sum of array 

// const sumArray = [1,2,3,4,5]
// count = 0;
// sumArray.forEach((num)=>{
//     count += num
// })
// console.log(count)

const product = [
    {
        name: "Laptop",
        pcs: 2,
        value: 1000
    },
    {
        name: "Laptop",
        pcs: 2,
        value: 7000
    },
    {
        name: "Laptop",
        pcs: 2,
        value: 5000
    }
]
const totalprice = product.map((item) => {
    return {
        name: item.name,
        total: item.pcs * item.value
    }
})
const val = totalprice.map((item2) => {
    return item2.total
})
console.log(val.reduce((a, b) => {
    return a + b
}, 5000))


const arr3 = [1, 2, 3]
console.log(arr3.reduce((a, b) => a + b, 4))
console.log(arr3.sort((a, b) => b - a))