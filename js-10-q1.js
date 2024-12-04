// Using an example, explain the difference between block,global and function scope in variables.
let globalVar = "Global Variable"; // Global Scope

function scopeExample() {
    let functionVar = "Function Variable"; // Function Scope

    if (true) {
        let blockVar = "Block Variable"; // Block Scope
        console.log(globalVar);      // Accessible (Global)
        console.log(functionVar);     // Accessible (Function)
        console.log(blockVar);        // Accessible (Block)
    }

    console.log(globalVar);          // Accessible (Global)
    console.log(functionVar);         // Accessible (Function)
    // console.log(blockVar);         // ReferenceError: blockVar is not defined
}

scopeExample();

console.log(globalVar);              // Accessible (Global)