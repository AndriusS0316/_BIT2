"use strict";

let p = new Promise((resolve, reject) => {
    console.log("start promise function");
    if (Math.random() < 0.5) {
        console.log("resolving promise");
        resolve("resolve value");
    } else {
        console.log("rejecting promise");
        reject("reject value");
    }
    console.log("finish promise function");
});

// promiso buna trys busenos: pending kai sukurem; resolved; rejected. 

p.then(
    value => {
        console.log("promise was resolved with value " + value);
    },
    reason => {
        console.log("promise was rejected with value " + reason);
    }
);



