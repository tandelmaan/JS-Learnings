// Let , Var and Const Variables 

// Var : Function-scoped (not block-scoped) — it "leaks" out of if, for, while blocks. We can be redeclared and reassigned freely. prefer Not to Use 
// Example : 

function checkVar() {
    if (true) {
        var x = 10;
    }
    console.log(x) // 10
}
checkVar()

// Let : Block-scoped — confined to the nearest { }. Can be reassigned, but not redeclared in the same scope.

function checkLet() {
    if (true) {
        let y = 90;
    }
    // console.log(y) //y is not defined
}
checkLet()


// Const : Block-scoped, like let. Must be initialized at declaration and cannot be reassigned. Does NOT mean immutable — it only locks the binding (the variable name), not the value.

const checkArr1 = [1, 2, 3, 4, 5]
// checkArr1 = [2, 3, 5] // Assignment to constant variable.
checkArr1.push(6, 7, 8)
console.log(checkArr1)

const one = 1
const two = 2 
console.table([one,two]) // Use console.table([]) for multiple consoles 
