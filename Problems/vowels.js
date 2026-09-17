// Check One Element is Vowel or Not 
let str1 = 'E'
str1 = str1.toLowerCase()
console.log('str1: ', str1);
if (str1 == 'a' || str1 == 'e' || str1 == 'i' || str1 == 'o' || str1 == 'u') {
    console.log(`${str1} Word is Vowel`)
} else {
    console.log(`${str1} Word is not Vowel`)
}

// Check How many element in string is a Vowel with count and Element
const str2 = "Raaja saheb"
let count = 0;
let vowel1 = []
let vowels = ['a', 'e', 'i', 'o', 'u']
for (let ele of str2.toLowerCase()){
    if(vowels.includes(ele)){
        vowel1.push(ele)
        count++
    }
}
console.log('count: ', count);
console.log('vowel1: ', vowel1);
