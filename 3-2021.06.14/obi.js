"use strict"

// obijektai

let puodukas = {
    turis: 300,
    kiekis: 200,
    spalva: "rudas"
};

console.log(puodukas.gerimas);

puodukas.gerimas = "kava";

console.log(puodukas);

delete puodukas.spalva;

console.log(puodukas);

// let tasPatsPuodukas = puodukas;

// puodukas.kiekis -= 50;

// tasPatsPuodukas.spalva = "zalia"

// console.log(puodukas.kiekis);
// console.log(puodukas.spalva);
// console.log(puodukas.spalva);

// tasPatsPuodukas.kiekis += 100;

// console.log(puodukas.kiekis);


// //console.log(puodukas);


// // palyginimo operatoriai

// if (puodukas === tasPatsPuodukas) {
//     console.log("tas pats puodukas");
// } else {
//     console.log("kitas objekas");
// }