// Find Maximum & Minimum Number Value By Reduce Functions 

const arr1 = [1, 2, 3, 4, 5, 67, 7, 8]
const res = arr1.reduce((a, b) => {
    return a > b ? a : b
})
console.log(res) // 67

// Find Maximum & Minimum Number Value By Math Function Method
const maxVal = Math.max(...arr1)
const minVal = Math.min(...arr1)
console.log(maxVal, minVal) // 67 1


// With For loop
let max = 0
for (let i = 0; i < arr1.length; i++) {
    if (max < arr1[i]) {
        max = arr1[i]
    }
}
console.log(max)

