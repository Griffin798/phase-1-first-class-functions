function receivesAFunction(callback) {
    callback();
}

function myCallback(){
    console.log("Callback function called!");
}

receivesAsFunction(myCallback);


function returnsANamedFunction(){
    function namedFunction(){
        console.log("This is a named function!");
    }
return namedFunction;
}
const myNamedFunction = returnsANamedFunction();
myNamedFunction();

function returnsAnAnonymousFunction(){
    return function() {
        console.log("before all?");
    };
}
const myAnonymousFunction= returnsAnAnonymousFunction();
myAnonymousFunction();

