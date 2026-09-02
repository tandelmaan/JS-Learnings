// Functions 

// Simple Functions 

function printMyName(){
    console.log("mxxn Tandel")
}
printMyName()

const a = function printOnetherName(){
    return "Yug Patel"
}
console.log(a())

// Function With Parameter 

function greet(num1, num2) {
    console.log(`Total is ${num1 * num2}`)
}
greet(11, 11)

// Arrow Functions 

const sum = (a, b) => {
    return a * b
}
console.log(sum(10, 10))

// Default Parameters 

function paydo(right = true){
    if(right){
        return "Paydo Salo"
    }else {
        return "Saro Poyro chhe"
    }
}
console.log(paydo(false))


// Rest Parameters (...)

function sumoffive(...numbers){
    let total = 0;
    for (let i of numbers){
        total = i + total
    }   
    return total
}
console.log('Total',sumoffive(1,2,3,4))

// Callback Functions : Functions passed as arguments to another function.

function name1(func2) {
    return `Tandel ${func2}`
}
function name2() {
    return "mxxn"
}
console.log(name1(name2()))

// setTimeout 
setTimeout(() => {
    console.log("Load after")
},2000)
setTimeout(function() {
    console.log("Hello");
}, 1000);

const obj1 = {
    name:"mxxn",
    func1 : function(){
        return `Name is : ${this.name}`
    }
}
console.log(obj1.func1())

const obj12 = {
    name:"mxxn",
    func1 : ()=>{
        return `Name is : ${this.name}`
    }
}
console.log(obj12.func1()) // arrow Function don't Have this Keyword 