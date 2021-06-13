


// suskaiciuoti visu skaiciu nuo 1 iki 100, kurie dalinasi is 3 suma
// atspausdinti visus pirminius skaicius intervale nuo 2 iki 100

// var suma = 0;
// var sk = 1;

// while (sk <= 4) {
//     suma = suma + sk;
//     sk = sk + 1;
// }
// console.log(suma);


// var sk = 1;

// while (sk <= 100) {
//     if (sk % 5 === 0 || sk % 2 === 0) {
//         console.log(sk);
//     }
//     sk = sk + 1;
// }


// var nuo = 2;
// var iki = 4;

// var i = 1;
// while (i <= iki) {
//     var j = 1;
//     while (j <= iki) {
//         console.log(i * j);
//         j = j + 1;
//     }
//     i = i + 1
// }

// var suma = 0;
// var y = 23;

// while (y <= 5472) {
//     suma = suma + y;
//     y = y + 1;
// }
// console.log(suma);





// var suma = 0;
// var x = 1;
    
// while (x <= 100) {
//     if (x % 3 === 0) {
//         console.log(x);
//         suma = suma + x;
//     }
//     x = x + 1;
// }

// console.log(suma);


var suma = 0;
var z = 2;

while (z <= 100) {
    if (z % z === 0 && z % 4 !== 0 && z % 6 !==0 && z % 8 !== 0 && z % 10 !== 0 && z % 2 !== 0 && z % 3 !== 0 && z % 5 !== 0 && z % 49 !== 0 && z % 77 !== 0 && z % 91 !== 0) {
        console.log(z);
        suma = suma + z;
        // suma = suma + z;
    }
    z = z + 1;
}
// console.log(suma);

