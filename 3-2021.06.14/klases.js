"use strict"; 

class Puodukas {

    constructor(spalva, maxTuris) {
        this.spalva = spalva;
        this.kiekis = 0;
        this.maxTuris = maxTuris;
    }
}

function Puodukas1 (spalva, maxTuris) {
    this.spalva = spalva;
    this.kiekis = 0;
    this.maxTuris = maxTuris;
}

let p = new Puodukas("Baltas", 150);
let p1 = new Puodukas("Baltas", 150);

console.log(p);
console.log(p1);