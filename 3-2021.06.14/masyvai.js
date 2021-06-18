"use strict"

let m = [5, 87, "labas", false, "!", 5, "pasauli", "aha", 3, true]; //specialus objektas - masyvas. Masyvo elementai numeruojami nuo nulio.

// // masyvas yra objektas. Tai yra svarbu.

// //masyvas turi specialia savybe "length", kuri apsprendzia kiek elementu yra masyve.

// console.log(m);

// console.log(m[2]);

// m[1] = true;

// console.log(m);
// console.log(m.length);

// let km = m;

// km[0] = "pakeiciau";
// console.log(m[0]);

// for (let i = 0; i < m.length; i++) {
//     console.log(m[i]);
// }

// let suma = 0;



// for (let i = 0; i < m.length; i++) {
//     suma = m[i] + suma;
// }
// console.log(suma);


// //Namu Darbas.
// let m1 = [5, 87, -5, 3, -4];
// /*
// surusiuoti masyva didejimo tvarka
// atspausdinti
// */
// /*
// surusiuoti masyva mazejimo tvarka
// atspausdinti
// */

let m2 = [5, 87, -5, 3, -4, 107];

let max = m[0];
for (let i = 1; i < m.length; i++) {
    if (m[i] > max) {
        max = m[i];
    }
}
console.log(max);



let a = 5;
let b = 10;

a = b;
console.log(a);

console.log(b);


let st = [
    [1, 2, 3],
    [4, 5, 6, 10, 11, 12],
    [7, 8, 9]
];

for (let i = 0; i < st.length; i++) {
    for (let j = 0; i < st[i].length; j++) {
        console.log(st[i][j]);
    }
}

//namu darbas:

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