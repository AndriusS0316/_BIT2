var suma = 0;

var x = 100; // max skaicius iki kurio norime surasti prime

for (var i = 2; i <= x; i++) { // for loop - var i = 2 bus ivykdytas viena karta pries vykdant viso bloko operacija; i <= x - nustato kondicija vykdant bloko op; i++ - bus padaroma kiekviena karta po bloko operacijos (i++ - inkrementuoja po viena +1)

    var isPrime = true;

    for (var j = 2; j < i; j++) { // 

        if (i % j === 0 && i !== j) {

            isPrime = false;

        }

    }

    if (isPrime === true) {

        console.log(i); 
        suma = suma + i; 
        console.log(suma); 
    }

}