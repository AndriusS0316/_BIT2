"use strict"; 

function test() {
    console.log("1");
    console.log("2");
    console.log("3");
}

setTimeout(test, 5);

console.log("4");
console.log("5");
console.log("6");

