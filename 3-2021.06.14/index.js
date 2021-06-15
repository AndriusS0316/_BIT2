var suma = 0;
var i = 1;

while (i <= 100) {
    if (i % 3 === 0) {
        suma = suma + i;
    }
    i = i +1;
}
console.log(suma);



var i = 2;

while (i <= 100) {
    var arPirminis = true;
    var atgal = i - 1;
    while (atgal >= 2 && arPirminis) {
        if (i % atgal === 0) {
            arPirminis = false;
        }
        atgal = atgal - 1;
    }
    if (arPirminis) {
        console.log(i);
    }
    i = i + 1;
}



var i = 15;

do {
    console.log(i);
    i += 4;

} while (i <= 10);


while (i <= 10) {
    console.log(i);
    i += 1;
    i = i + 1;
}

/*

i +=
i -=
i *=
i /=
i %=

*/


var nuo = 1;
var iki = 3;




// jusu ND
/*
1
2
3
2
4
6
3
6
9
*/

 console.log("pradzia");

var nuo = 1;
var iki = 3;

while (nuo <= iki) {
    var x = 1
    while (x <= iki) {
        console.log(nuo * x);
        x += 1;
    }
    nuo += 1;
}
console.log("pabaiga");




var nuo = 5;
var iki = 17;
var a = nuo;

do { 

    var b = nuo;

    do {
        console.log(a, b, a*b);
        b+=1;
    } while (b<=iki);
      a+= 1;
} while (a<= iki);

console.log("Finito");




var sk = 3;

sk++;
sk += 1;
sk = sk + 1;
++sk;

var e = 3;

var kitas = 5 + ++e;

console.log(e);
console.log(kitas);




var sk = 3;
var kitas = 5 + ++sk;
// padidinam sk 1-u -> sk: 4
// paimam sk reiksme (4)
// 5 + 4
// 9
// i kitas padedam 9
// var kitas = 5 + sk++;
// paimam sk reiksme (3) ir atsimenam
// padidinam sk 1-u -> sk: 4
// 5 + 3
// 8
// i kitas padedam 8
console.log(sk);
console.log(kitas);

console.log("n");

var i = 1;
while (i < 3) {
    console.log(i++);
}


for (var i = 1; i < 4; i++) {
    console.log(i);
}

// N. D.

var nuo = 1;
var iki = 5;

// daugybos lentele su ciklais "for"

// su ciklus "for" atspausdinti skaicius nuo 100 iki 1 kas 3
// 100 97 94 91...

console.log("pirmas namu darbas");

for (var i = 1; i < 6; i++) {
    for (var j = 1; j < 6; j++) {
        console.log(i * j);
    }
}

console.log("antras namu darbas");

for (var x = 100; x > 0; x = x - 3) {
    console.log(x);
}

console.log("pabaiga");

console.log(1234567890);