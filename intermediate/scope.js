let userName = "Mxxn"
function greet(){
    console.log(userName)
}
greet()
console.log(userName)


// Lexical Scope 

let name = "Global";

function outer() {
  let name = "Outer";

  function inner() {
    console.log(name);
  }

  inner();
}

outer(); // Outer Global


// Closures (Advanced Scope Concept)
// A closure happens when a function remembers variables from its outer scope even after the outer function finishes.