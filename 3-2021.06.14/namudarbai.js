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
for (let y = 0; y < st.length; y++) {
    let eilutesSuma = 0;
    for (let x = 0; x < st[y].length; x++) {
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
            // if (y55 = 0) {
            //     rez[r44][y55] = rez[r44][y55 + rez[r44].length - 1]
            // } else {
            //     rez[r44][y55] = rez[r44][y55 - rez[r44].length - 2]
            // }
        }
    }

}
console.log(rez);


// for (let r44 = 1; r44 < rez.length; r44++) {
//     for (let y55 = 0; y55 < rez[r44].length; y55++) {
//         if (y55 === 0) {
//             let jj = rez[r44][y55];
//         } else {
//             rez[r44][y55 + 1] = rez[r44][y55];
//         }
//         if (y55 === rez[r44].length - 1) {
//             rez[r44][y55] = jj;
//         }

//     }
//     console.log(rez);
// }


// if (r44 > 0 && r44 < rez.length) {
//     rez[r44][y55 + 1] = rez[r44][y55];
//     if (y55 === rez[r44].length - 1) {
//         rez[r44][y55] = rez[r44][y55 - rez[r44].length - 1]
//     }
// }


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

// Aleksandro atsakymas

for (let y = 0; y < rez.length; y++) {
    for (let x = 0; x < rez[y].length; x++) {
        rez[y][x] = m4[(x + y) % m4.length];
    }
}

console.log(rez);

for (let y = 0; y < rez.length; y++) {
    for (let x = 0; x < rez[y].length; x++) {
        rez[y][(x + y) % m4.length] = m4[x];
    }
}

console.log(rez);


// faktorialas 
// kai funkcija kviecia pati save tuomet vadinama rekursija

function faktorialas(sk) {
    if (sk === 0) {
        return 1;
    }
    let f = sk * faktorialas(sk - 1);
    return f;
}

console.log(faktorialas(4));

// Fibonacio skaiciu seka: Sekantis skaicius yra pries tai ejusiu dvieju skaiciu suma

// pvz 112358

// fib (sk1, sk2, max)
/*
Fibonacci skaiciu sekos spausdinimas iki nurodytos maksimalios reiksmes
Rekursine funkcija
1, 1, 20
1
1
2
3
5
8
13
*/
function fib(sk1, sk2, max) {
    // ND
}
fib(1, 1, 1000);

/*
parasyti funkcija labas(vardas, pavarde)
jei paduotas ir vardas ir pavarde - spausdina: labas vardas pavarde
jei paduotas tik vardas - spausdina: labas vardas
jei nieko nepaduota - spausdina: labas nezinomas zmogau
*/

// Fibonacio skaiciu seka



function fibonacci(n) {
    if (n === 1) {
        return [0, 1];
    } else {
        var s = fibonacci(n - 1);
        s.push(s[s.length - 1] + s[s.length - 2]);
        return s;
    }
};

console.log(fibonacci(16));

// Aleksandro sprendimas 

console.log("pradzia");
function fibb(sk5, sk7, max) {
    console.log(sk5);
    let next = sk5 + sk7;
    if (next < max) {
        fibb(sk7, next, max);
    } else {
        console.log(sk7);
    }
}
fibb(0, 1, 1000);
console.log("pabaiga");

// Aruno sprendimas 

function fib(sk1, sk2, max) {
    let sk3 = sk1 + sk2;
    if (sk3 <= max) {
        console.log(sk3);
        fib(sk2, sk3, max);
    }
}
console.log(1, "\n", 1);
fib(1, 1, 20);




/*
parasyti funkcija labas(vardas, pavarde)
jei paduotas ir vardas ir pavarde - spausdina: labas vardas pavarde
jei paduotas tik vardas - spausdina: labas vardas
jei nieko nepaduota - spausdina: labas nezinomas zmogau
*/

// function labas(vardas, pavarde) {
//     console.log("labas, " + vardas + " " + pavarde);
//     if (vardas = undefined) {
//         console.log("Labas, " + "nezinomas zmogau");
//     }
// }

// labas("Jonas", "Jonaitis");
// labas("Petras", "Petraitis");
// labas("Antanas");
// labas();
// labas("Jonas", "Petraitis", 10, "!", false);

function labas(vardas, pavarde) {
    if (vardas !== undefined && pavarde !== undefined) {
        console.log("labas, " + vardas + " " + pavarde + ",");
    } else {
        if (vardas !== undefined) {
            console.log("labas, " + vardas + ",");
        } else {
            // if (labas !== 0) {
                console.log("labas, nezinomas zmogau,");
            // }
        }
    }
}
labas("Jonas", "Jonaitis");
labas("Antanas");
labas();


let m10 = [
    [
        [1, 2, 3, 4, 5, 6],
        [74, 23, 5, 7, 4],
        [67, 4, 7, 3, 7, 9, 3]
    ],
    [
        [6, 34, 67, 8, 4, 8],
        [7, 4, 5],
        [3, 6, 8, 0, 3, 89],
        [3, 6, 2, 5, 7, 6, 3, 1]
    ],
    [
        [1, 1, 1, 1, 4],
        [2, 2, 2, 12],
        [23],
        [7, 4, 7, 5, 32, 8, 3]
    ]
];
/*
atspausdinti visu nelyginiu skaiciu suma ir vidurki
*/


