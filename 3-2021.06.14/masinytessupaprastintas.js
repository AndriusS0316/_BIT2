"use strict";

const masinos = [
    {
        pavadinimas: "pirma",
        kelias: 0,
        greitis: 0
    },
    {
        pavadinimas: "antra",
        kelias: 0,
        greitis: 0
    },
    {
        pavadinimas: "trecia",
        kelias: 0,
        greitis: 0
    },
    {
        pavadinimas: "kevirta",
        kelias: 0,
        greitis: 0
    },
    {
        pavadinimas: "penkta",
        kelias: 0,
        greitis: 0
    },
    {
        pavadinimas: "sesta",
        kelias: 0,
        greitis: 0
    },
    {
        pavadinimas: "septinta",
        kelias: 0,
        greitis: 0
    },
    {
        pavadinimas: "astunta",
        kelias: 0,
        greitis: 0
    }
];
let checkPoint = 100;
let lyderis;
do {
    // keiciam greiti ir vaziuojam
    for (let i = 0; i < masinos.length; i++) {
        let keiciamGreiti = Math.random();
        if (keiciamGreiti < 0.2) {
            masinos[i].greitis -= Math.floor(Math.random() * 5 + 1);
            if (masinos[i].greitis < 0) {
                masinos[i].greitis = 0;
            }
        } else if (keiciamGreiti < 0.7) {
            masinos[i].greitis += Math.floor(Math.random() * 10 + 1);
        }
        masinos[i].kelias += masinos[i].greitis;
    }
    // nustatom, kuris dabar pirmauja
    lyderis = 0;
    for (let i = 1; i < masinos.length; i++) {
        if (
            (masinos[i].kelias > masinos[lyderis].kelias) ||
            (masinos[i].kelias === masinos[lyderis].kelias &&
                masinos[i].greitis > masinos[lyderis].greitis)
        ) {
            lyderis = i;
        }
    }
    // jei kirto check point'a - pranesam
    if (masinos[lyderis].kelias > checkPoint) {
        console.log("Po " + checkPoint + " km. pirmauja:");
        console.log(masinos[lyderis]);
        checkPoint += 100;
    }
} while (masinos[lyderis].kelias < 1000);
// rusiuojam
for (let i = 0; i < masinos.length - 1; i++) {
    for (let j = i + 1; j < masinos.length; j++) {
        if (
            (masinos[i].kelias < masinos[j].kelias) ||
            (masinos[i].kelias === masinos[j].kelias &&
                masinos[i].greitis < masinos[j].greitis)
        ) {
            let tmp = masinos[i];
            masinos[i] = masinos[j];
            masinos[j] = tmp;
        }
    }
}
console.log(masinos);

