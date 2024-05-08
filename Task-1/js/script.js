let p = 1000;
let r = 6;
let t = 2;

let intrest = (p * r * t) / 100;

// console.log("intrest is ", intrest);
document.getElementById("amount").innerHTML = p;
document.getElementById("rateOfintrest").innerHTML = r;
document.getElementById("time").innerHTML = t;
document.getElementById("calculator").innerHTML = intrest;