
// Compare Two Array is Equal or Not

// With JSON Stringify 
const arr3 = [1, 2, 4]
const arr4 = [4, 2, 1]
const isEquel = JSON.stringify([...arr3].sort()) === JSON.stringify([...arr4].sort())
console.log('isEquel: ', isEquel);

// With Every Methods
const arr5 = [4, 5, 6, 7, 8, 8]
const arr6 = [8, 7, 6, 5, 4, 8]
arr5.every((item) => {
    if (arr6.indexOf(item) > -1) {
        console.log('Array is Equel')
    } else {
        console.log('Array is Not Equel')
    }
})


// Find Intersection from Two Arrays 

const arr1 = [1, 2, 3, 1, 3, 2, 2, 4, 2, 4, 5, 667, 2]
const arr2 = [3, 34, 3, 2, 4, 6, 3, 2, 2]
const result = arr1.filter((item) => {
    return arr2.includes(item)
})
console.log('result: ', [...new Set(result)]);


// Find Union of Two arrays 

const unionarr1 = [1, 2, 3, 1, 3, 2, 2, 4, 2, 4, 5, 667, 2]
const unionarr2 = [3, 34, 3, 2, 4, 6, 3, 2, 2]

const resultofunion = [...unionarr1, ...unionarr2]
console.log([...new Set(resultofunion)])