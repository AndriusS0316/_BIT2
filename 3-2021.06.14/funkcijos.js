"use strict";

let kamuoliukai = [3, 5.4, 2.3, 4.9, 0.1, 0.23];

for (let i = 0; i < kamuoliukai.length - 1; i++) {
    for (let j = i + 1; j < kamuoliukai.length; j++) {
        if (kamuoliukai[i] > kamuoliukai[j]) {
            let tmp = kamuoliukai[i];
            kamuoliukai[i] = kamuoliukai[j];
            kamuoliukai[j] = tmp;
        }
    }
}


let kamuoliukai1 = [3, 5.4, 2.3, 4.9, 0.1, 0.23];
for (let i = 0; i < kamuoliukai.length; i++) {
    console.log(turis(kamuoliukai[i]));
}
function turis(r) {
    let t = 4 * 3.14 * r * r * r / 3;
    return t;
}




function didesnisSk(puokste) {
    let max = puokste[0];
    for (let x = 1; x < puokste.length; x++) {
        if (puokste[x] > max) {
            max = puokste[x];
        }
    }
    return max;
}

let m1 = [1, 2, 3, 4, 5];

console.log(didesnisSk(m1));

let bubu = [65, 78, -2, 4, 7];

console.log(didesnisSk(bubu));

let meme = [165, 8, 2, -4, 17];

console.log(didesnisSk(meme));

let oj = [65, 45, 11];

console.log(didesnisSk(oj));

let ah = [0.1, 0.2, -1.2];

console.log(didesnisSk(ah));

let qq = [1, 1, 1, 1, 1];

console.log(didesnisSk(qq));

function vardas(bnm) {
let suma = 0;
for (let x = 0; x < bnm.length; x++) {
    suma = bnm[x] + suma;
}
let vidurkis1 = suma / bnm.length;
return vidurkis1;
}

console.log(vardas(oj));
console.log(vardas(ah));
console.log(vardas(meme));
console.log(vardas(bubu));
console.log(vardas(m1));
console.log(vardas(qq));