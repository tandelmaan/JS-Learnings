// Find Duplicate Number Of Arrays 

const arr1 = [1, 2, 3, 4, 5, 6, 2, 3, 4, 2, 2, 2]
const duplicate = arr1.filter((ele, index, arr) => arr.indexOf(ele) !== index)
console.log([... new Set(duplicate)]) // [2,3,4]


// Les Space Complexity 
let set = new Set()
let set2 = new Set()
for (let i = 0; i < arr1.length; i++) {
    if (set.has(arr1[i])) {
        set2.add(arr1[i])
    }
    set.add(arr1[i])
}


console.log([...set2])