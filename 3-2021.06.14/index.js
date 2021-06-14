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
var iki = 4;

while (nuo <= iki) {
    var x = 1
    while (x <= iki) {
        console.log(nuo * x);
        x += 1;
    }
    nuo += 1;
}
console.log("pabaiga");

