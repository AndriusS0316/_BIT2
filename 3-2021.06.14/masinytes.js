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


