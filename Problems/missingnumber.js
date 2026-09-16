// Find The Missing Element in Array 
const arr1 = [15, 4, 6, 9]
const maxval = Math.max(...arr1)
const minVal = Math.min(...arr1)
const res = []
for (let i = minVal; i <= maxval; i++) {
    res.push(i)
}
console.log('res: ', res);

// Find Even and Odd Numbers From Array 
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const even = arr2.filter((num) => num % 2 == 0)
const odd = arr2.filter((num) => num % 2 !== 0)
console.log('even: ', even);
console.log('odd: ', odd);


// Find Sum of Array 

const arr3 = [1, 2, 3, 4, 5]
const result = arr3.reduce((a, b) => a + b, 0)
console.log('result: ', result);

