"use strict"


//1. namu darbas:

let st1 = [
    [1, 2, 3, 5, 3, -4, 2],
    [4, 5, 6, 10, 11, 12],
    [7, 8, 9, 2, 6, -3, 67],
    [7, 8, 9, -12, 3, -18]
];
/*
atspausdinti kiekvienos eilutes elementu vidurki
atspausdinti visu elementu vidurki
*/

// visu elementu vidurkis:

let suma = 0;
let x = 0;
let vidurkis = 0;
let visas = 0;

for (let i = 0; i < st1.length; i++) {
    for (let j = 0; j < st1[i].length; j++) {
    
    x = st1[i][j];
    suma = x + suma;
    }
}
console.log(suma);

let h = 0;

for (let g = 0; g < st1.length; g++) {
    h = st1[g].length;
    visas = h + visas;
}

console.log(visas);

vidurkis = suma / visas;

console.log(vidurkis);


//atspausdinti kiekvienos eilutes elementu vidurki

let y = 0;
let u = 0;
let eilutesSuma = 0;
let f = 0;
let eilutesVidurkis = 0;

for (let y = 0; y < st1.length; y++) {
    for (let u = 0; u < st1[y].length; u++) {
        f = st1[y][u]
        eilutesSuma = f + eilutesSuma;

    }
    console.log(eilutesSuma);
    eilutesVidurkis = eilutesSuma / st1[y].length;
    console.log(eilutesVidurkis);
    eilutesSuma = 0;
}



//2. Namu Darbas.
let m1 = [5, 87, -5, 3, -4];
/*
surusiuoti masyva didejimo tvarka
atspausdinti
*/

let lowestToHighest = m1.sort((a, b) => a - b);
console.log(lowestToHighest);

