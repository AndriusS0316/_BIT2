"use strict"; 

let masina1 = {
    pavadinimas: "pirma",
    kelias: 0,
    greitis: 0,
    gazas: function (kiek) {
        this.greitis += kiek;
    },
    stabdis: function (kiek) {
        this.greitis -= kiek;
        if (this.greitis < 0) {
            this.greitis = 0;
        }
    }
};
let masina2 = {
    pavadinimas: "antra",
    kelias: 0,
    greitis: 0,
    gazas: function (kiek) {
        this.greitis += kiek;
    },
    stabdis: function (kiek) {
        this.greitis -= kiek;
        if (this.greitis < 0) {
            this.greitis = 0;
        }
    }
};
console.log(masina1);
console.log(masina2);
masina1.gazas(15);
masina2.gazas(3);
console.log(masina1);
console.log(masina2);