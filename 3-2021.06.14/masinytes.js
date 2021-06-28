/*
yra 8 masinos

pavadinimas
greitis: 0
kelias: 0

masinos lenktyniauja (ciklas)

kiekvienos iteracijos metu:
visos masinos gali pakeisti savo greiti 
    random skaicius
    jei random < 0.2 - masina stabdo (t.y. mazeja masinos greitis 1..5 (random))
    jei random < 0.7 - masina gazuoja (t.y. dideja masinos greitis 1..10 (random))
    priesingu atveju masinos greitis nesikeicia
visos masinos pavaziuoja: per tiek, koks yra jos greitis

lenktyves baigiasi, kai bent viena masina nuvaziuoja 1000 km 

Po to reikia surusiuoti 
    jas pagal nuvaziuota kelia, jei dvieju masinu kelias vienodas - pirmesne yra ta, kurios didesnis greitis.

atspausdinti turnyrine lentele.

*) kas 100 km spausdinti lyderi

*/


let atsitiktinis = Math.random(); //funkcijas grazina skaicius tarp [0 ir 1)
console.log(atsitiktinis);

let sveikasAtsitiktinis =  Math.floor (atsitiktinis * 5 + 1);
// [1..5.999999]
console.log(sveikasAtsitiktinis);

sveikasAtsitiktinis = Math.floor(Math.random() * 5 + 1);
console.log(sveikasAtsitiktinis);
// [1...5]



// 8 masinytes

// let a = 0;
// let s = 0;
// let d = 0;
// let f = 0;
// let g = 0;
// let h = 0;
// let j = 0;
// let k = 0;

// let aAtsi = Math.random();
// let sAtsi = Math.random();
// let dAtsi = Math.random();
// let fAtsi = Math.random();
// let gAtsi = Math.random();
// let hAtsi = Math.random();
// let jAtsi = Math.random();
// let kAtsi = Math.random();

// let aMaz = Math.floor(Math.random() * 5 + 1);
// let sMaz = Math.floor(Math.random() * 5 + 1);
// let dMaz = Math.floor(Math.random() * 5 + 1);
// let fMaz = Math.floor(Math.random() * 5 + 1);
// let gMaz = Math.floor(Math.random() * 5 + 1);
// let hMaz = Math.floor(Math.random() * 5 + 1);
// let jMaz = Math.floor(Math.random() * 5 + 1);
// let kMaz = Math.floor(Math.random() * 5 + 1);

// let aDid = Math.floor(Math.random() * 10 + 1);
// let sDid = Math.floor(Math.random() * 10 + 1);
// let dDid = Math.floor(Math.random() * 10 + 1);
// let fDid = Math.floor(Math.random() * 10 + 1);
// let gDid = Math.floor(Math.random() * 10 + 1);
// let hDid = Math.floor(Math.random() * 10 + 1);
// let jDid = Math.floor(Math.random() * 10 + 1);
// let kDid = Math.floor(Math.random() * 10 + 1);


// while (a < 1000 || s < 1000 || d < 1000 || f < 1000 || g < 1000 || h < 1000 || j < 1000 || k < 1000) {
//     if (aAtsi < 0.2) {
//         a = aMaz + a;
//     } else if (0.2 < aAtsi && aAtsi < 0.7) {
//         a = aDid + a;
//     }
//     if (sAtsi < 0.2) {
//         s = sMaz + s;
//     } else if (0.2 < sAtsi && sAtsi < 0.7) {
//         s = sDid + s;
//     }
//     if (dAtsi < 0.2) {
//         d = dMaz + d;
//     } else if (0.2 < dAtsi && dAtsi < 0.7) {
//         d = dDid + d;
//     }
//     if (fAtsi < 0.2) {
//         f = fMaz + f;
//     } else if (0.2 < fAtsi && fAtsi < 0.7) {
//         f = fDid + f;
//     }
//     if (gAtsi < 0.2) {
//         g = gMaz + g;
//     } else if (0.2 < gAtsi && gAtsi < 0.7) {
//         g = gDid + g;
//     }
//     if (hAtsi < 0.2) {
//         h = hMaz + h;
//     } else if (0.2 < hAtsi && hAtsi < 0.7) {
//         h = hDid + h;
//     }
//     if (jAtsi < 0.2) {
//         j = jMaz + j;
//     } else if (0.2 < jAtsi && jAtsi < 0.7) {
//         j = jDid + j;
//     }
//     if (kAtsi < 0.2) {
//         k = kMaz + k;
//     } else if (0.2 < kAtsi && kAtsi < 0.7) {
//         k = kDid + k;
//     }
// }
// if (a >= 1000 || s >= 1000 || d >= 1000 || f >= 1000 || g >= 1000 || h >= 1000 || j >= 1000 || k >= 1000) {
//     console.log(a);
//     console.log(s);
//     console.log(d);
//     console.log(f);
//     console.log(g);
//     console.log(h);
//     console.log(j);
//     console.log(k);
// } 


let a = 0;
let s = 0;
let d = 0;
let f = 0;
let g = 0;
let h = 0;
let j = 0;
let k = 0;

let Atsi = Math.random();
let Maz = Math.floor(Math.random() * 5 + 1);
let Did = Math.floor(Math.random() * 10 + 1);
let pp = 0;

let m8 = [a, s, d, f, g, h, j, k];

while (m8[pp] < 1000) {
    if (Atsi < 0.2) {
        m8[pp] = Maz + m8[pp];
    } else if (0.2 < Atsi && Atsi < 0.7) {
        m8[pp] = Did + m8[pp];
    }
    if (pp === m8.length - 1) {
        pp === -1;
    }
    pp = pp + 1;
}

console.log(m8);



// for (let pp = 0; m8[pp] < 1000; pp++) {
//     if (Atsi < 0.2) {
//         m8[pp] = Maz + m8[pp];
//     } else if (0.2 < Atsi && Atsi < 0.7) {
//         m8[pp] = Did + m8[pp];
//     }
//     if (pp === m8.length - 1) {
//         pp === -1;
//     }
// }

// console.log(m8);



// Aleksandro sprendimas

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
    let lenktyniaujam = true;
    let checkPoint = 100;
    do {
    // keiciam greiti
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
    }
    // vaziuojam
    for (let i = 0; i < masinos.length; i++) {
    masinos[i].kelias += masinos[i].greitis;
    }
    // nustatom, kuris dabar pirmauja
    let lyderis = 0;
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
    // tikrinam ar kas kirto finiso linija
    for (let i = 0; i < masinos.length; i++) {
    if (masinos[i].kelias >= 1000) {
    lenktyniaujam = false;
    }
    }
    } while (lenktyniaujam);
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

    