"use strict"

let m = [5, 87, "labas", false, "!", 5, "pasauli", "aha", 3, true]; //specialus objektas - masyvas. Masyvo elementai numeruojami nuo nulio.

// masyvas yra objektas. Tai yra svarbu.

//masyvas turi specialia savybe "length", kuri apsprendzia kiek elementu yra masyve.

console.log(m);

console.log(m[2]);

m[1] = true;

console.log(m);
console.log(m.length);

let km = m;

km[0] = "pakeiciau";
console.log(m[0]);

for (let i = 0; i < m.length; i++) {
    console.log(m[i]);
}

let suma = 0;



for (let i = 0; i < m.length; i++) {
    suma = m[i] + suma;
}
console.log(suma);


//Namu Darbas.
let m = [5, 87, -5, 3, -4];
/*
surusiuoti masyva didejimo tvarka
atspausdiniti
*/
/*
surusiuoti masyva mazejimo tvarka
atspausdiniti
*/
