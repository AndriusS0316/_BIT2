"use strict";

let kamuoliukai = [3, 5.4, 2.3, 4.9, 0.1, 0.23];

for (let i = 0; i < kamuoliukai.length - 1; i++) {
    for (let j = i + 1; j < m.length; j++) {
        if (m[i] > m[j]) {
            let tmp = kamuoliukai[i];
            m[i] = m[j];
            m[j] = tmp;
        }
    }
}


let kamuoliukai = [3, 5.4, 2.3, 4.9, 0.1, 0.23];
for (let i = 0; i < kamuoliukai.length; i++) {
console.log(turis(kamuoliukai[i]));
}
function turis(r) {
let t = 4 * 3.14 * r * r * r / 3;
return t;
}