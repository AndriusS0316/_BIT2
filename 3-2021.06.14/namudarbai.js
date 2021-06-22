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

/*
surusiuoti masyva mazejimo tvarka
atspausdinti
*/

let highestToLowest = m1.sort((a, b) => b - a);
console.log(highestToLowest);


// Aleksandro sprendimas vidurkiai

let st = [
[1, 2, 3, 5, 3, -4, 2],
[4, 5, 6, 10, 11, 12],
[7, 8, 9, 2, 6, -3, 67],
[7, 8, 9, -12, 3, -18]
];
let suma1 = 0;
let skKiekis = 0;
for(let y = 0; y < st.length; y++) {
let eilutesSuma = 0;
for(let x = 0; x < st[y].length; x++) {
eilutesSuma += st[y][x];
suma1 += st[y][x];
}
skKiekis += st[y].length;
console.log(eilutesSuma / st[y].length);
}
console.log(suma1 / skKiekis);

//rusiavimas Aleksandro kitame faile



// turim gauti

// 12345
// 23451
// 34512
// 45123
// 51234

// ir

// 12345
// 51234
// 45123
// 34512
// 23451

let m4 = [1, 2, 3, 4, 5];

let rez = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
]

//console.log(rez);

let o77 = 1;
for (let r44 = 0; r44 < rez.length; r44++) {
    o77 = 1;
    for (let y55 = 0; y55 < rez[r44].length; y55++) {
        if (y55 < rez[r44].length) {
            rez[r44][y55] = rez[r44][y55] + o77;
            console.log(o77);
            o77++;
        }
    }
}
for (let r44 = 1; r44 < rez.length; r44++)
console.log(rez);




// for (let r44 = 0; r44 < rez.length; r44++) {
//     for (let y55 = 0; y55 < rez[r44].length; y55++) {
//         for (let o77 = 1; o77 <= rez[r44].length; o77++) {
//             rez[r44][y55] = o77;
//             console.log(rez[r44][y55]);
//         }
//     }
// }
// console.log(rez);


// for (let ee = 0; ee < rez.length; ee++) {
//     for (let ww = 0; ww < rez[ee].length; ww++) {
//         rez[ee][ww]++
//         if (rez[ee][ww] === rez[ee][ww])
//         rez[ee][ww]++
//     }
// }

// console.log(rez);

