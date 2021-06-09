"use strict";

var sk1; // cia deklaravau kintamaji sk1 Galinčios būti kintamojo reikšmės a-z A-Z 0-9 _ $
var sk2;
var sk3 = 4;
sk3 = 2;

var saskaitosSuma;
var totalInvoiceSum; 

/*

var kintamojo deklaravimas
= reiksmes priskyrimas
+ suma
- atimtis
* daugyba
/ dalyba

*/

sk1 = 5;
sk2 = 7;
var rez;

rez = sk1 + sk2 / sk3 * sk1;


console.log(rez);

var x1 = 4;
var x2 = 9;
var y1 = 12;
var y2 = 13;
var y3 = 15;
var z = 30;

var rez

rez = (x1 * z) / (y3 + y2 + x2 - y3) * (y1 * x2 * x2) 
//    (4 * 30) / (15 + 13 + 9 - 15)  *  (12 * 9 * 9)
//      120    /         22          *       972
//         5301.81
console.log(rez)

var zz = 54;
var ni = 76;
var rt = 98;
var qw = 11;
var e99 = 44; 

var rez

rez = zz + ni - rt * qw / e99
//      130         24.5
//            105.5
console.log(rez)




var r5 = 55;
var r4 = 65;
var niks = 77;

var rez

rez = r5 + r4 - niks
//    55 + 65 - 77 
//        43
console.log(rez)



var tekstas = "cia yra tekstas"; //kabutese yra "stringas" bet gali buti ir viengubose kabutese
var kitas = '"specialus" tekstas su kitom kabutem';
var vienas = "tekstas \\ \"'te  k\tstas'\" \\\\ tek\r\nstas \u4EFB"
console.log(tekstas);
console.log(kitas);
console.log(vienas);


var tekstas = "Labas";
tekstas = tekstas + " pasauli";

var s1 = "15";
var s2 = "5";

console.log(tekstas);
console.log(s1 + s2);

var a1 = 15;
var a2 = 5; 

console.log(a1 + a2)

console.log("" + a1 + a2 + s1 + s2);

console.log(s1 + s2 + a1 + a2);

// boolean true/false

// var b = true
// var b2 = false


var sk1 = 55;

if (sk1 > 10) {
    console.log("didelis");
    sk1 = sk1 * 10;
    console.log(sk1);
} else {
    console.log("mazas");
    sk1 = 10 / sk1;
    console.log(sk1);
    console.log("dar viena komanda");
}
console.log("pabaiga");