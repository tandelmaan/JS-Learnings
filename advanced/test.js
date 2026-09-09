// Q1. ⭐⭐
// What will be the output of the following code? Explain why.

const obj = {
    name: 'Alice',
    getName: function () {
        return this.name;
    }
};

const getName = obj.getName;
console.log(getName()); // undefined
console.log(obj.getName()); // Alice


// Q2. ⭐⭐⭐
// Fix the following code so that this refers to the person object in all methods.
const person = {
    name: 'John',
    age: 30,
    greet: function () {
        setTimeout(function () {
            console.log(`Hello, I'm ${this.name}`);
        }, 1000);
    },
    getDetails: function () {
        const getAge = function () {
            return this.age;
        };
        return getAge();
    }
};

// Your code here to fix it