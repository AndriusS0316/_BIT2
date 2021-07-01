"use strict"; 

console.log("pradzia");

function test1() {
    console.log("1");
}    
function test2() {
    console.log("2");
}
function test3() {
    console.log("3");
}
    
setTimeout(test2, 2);
setTimeout(test1, 23);
setTimeout(test3, 1);

console.log("pabaiga");

