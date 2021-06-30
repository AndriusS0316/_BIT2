"use strict"; 

class Puodukas {

    constructor(spalva, maxTuris) {
        this.spalva = spalva;
        this.kiekis = 0;
        this.maxTuris = maxTuris;
    }

    ipilk(kiek) {
        if (kiek <= 0) {
            console.log("Ar zinai, ka darai?");
            return;
        }
        this.kiekis += kiek;
        if (this.kiekis > this.maxTuris) {
            console.log("Ant kelniu issipyle " + (this.kiekis - this.maxTuris));
            this.kiekis = this.maxTuris;
        } else {
            console.log("Sekmingai ipylem " + kiek + ". Liko laisvos vietos: " + (this.maxTuris - this.kiekis));
        }
    }

    isgerk(kiek) {
        if (kiek < 0) {
            console.log("Nespjaudyk i puoduka");
            return;
        }
        if (kiek === 0) {
            console.log("Tai gersim, ar akis vartysim?");
            return;
        }
        this.kiekis -= kiek;
        if (this.kiekis < 0) {
            console.log("Isgerem tik " + (this.kiekis + kiek));
            this.kiekis = 0;
        } else {
            console.log("Sekmingai isgerem " + kiek + ". Liko gerimo: " + this.kiekis);
        }
    }
}

class Termosas extends Puodukas {

    constructor(spalva, maxTuris) {
        super(spalva, maxTuris); //sita ir eilute zemiau yra vienodos
        //Puodukas.call(this, spalva, maxTuris);
        this.temp = 20;
    }

    pasildyk(kiek) {
        this.temp += kiek;
    }

    atvesink(kiek) {
        this.temp -= kiek;
    }
}

function Puodukas1 (spalva, maxTuris) {
    this.spalva = spalva;
    this.kiekis = 0;
    this.maxTuris = maxTuris;
}

let p = new Puodukas("Baltas", 150);
let p1 = new Puodukas("Baltas", 150);

t.ipilk(555);
console.log(t);

console.log(p);
p.ipilk(-100);
console.log(p1);

