"use strict";

// Linos sprendimas 
// Linos sprendimas 
// Linos sprendimas

let distancijosIlgisMax = 1000;

//let autoUkis = [0, 1, 2, 3, 4, 5, 6, 7] 

let automobiliai = ["pirmas", 2, 3, 4, 5, 6, 7, 8]

let autoSavybes = {
    pavadinimas: 0,
    greitis: 0,
    kelias: 0
};

let atsitiktinis = Math.random();

//(0...1)

let mazeja = Math.floor(Math.random() * 5 + 1)
let dideja = Math.floor(Math.random() * 10 + 1)

console.log("pradzia");

for (let i = 0; i < automobiliai.length; i++) {
    if (autoSavybes.kelias < distancijosIlgisMax) {
        automobiliai[i] = autoSavybes;
    } else if (atsitiktinis < 0.2) {
        automobiliai[i].greitis = automobiliai[i].greitis + mazeja;
        automobiliai[i].kelias = automobiliai[i].kelias + automobiliai[i].greitis;
    } else if (0.2 > atsitiktinis && atsitiktinis > 0.7) { 
        automobiliai[i].greitis = automobiliai[i].greitis + dideja; 
        automobiliai[i].kelias = automobiliai[i].kelias + automobiliai[i].greitis; 
    } else if (atsitiktinis > 0.7) { 
        automobiliai[i].greitis = automobiliai[i].greitis; 
        automobiliai[i].kelias = automobiliai[i].kelias + automobiliai[i].greitis;
    }
}
console.log(automobiliai);
console.log(atsitiktinis);