"use strict"; 

console.log("pradzia");

const perskaiciau = (err, data) => { 
    console.log("" + data);
} // "=>" vadinamoji fat arrow funkcija

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

for (let i = 0; i < 1000000; i++) {
    for (let j = 0; j < 10000; j++) {
    }
}

console.log("pabaiga");

/*
Susikurti 5 failus:
1.txt
2.txt
3.txt
4.txt
5.txt

perskaityti failus tokia tvarka: 4, 3, 1 ; rezultatus sudeti i viena stringa 

*/