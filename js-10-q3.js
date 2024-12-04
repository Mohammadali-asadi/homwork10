// According to your js10 session, write a code that shows why we shouldn't use var?
function exampleVar() {
    if (true) {
        var x = 10; 
        console.log("Inside if block: ", x); 
    }
    console.log("Outside if block: ", x); 
}
exampleVar();
function hoistingExample() {
    console.log(y); 
    var y = 5;
    console.log(y); 
}

hoistingExample();
