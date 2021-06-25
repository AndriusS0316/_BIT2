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