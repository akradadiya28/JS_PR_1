let pri = 300, pri1 = 900, pri2 = 1200;
let dis = 10, dis1 = 12, dis2 = 8;

let disAmount = pri / dis;
let disAmount1 = pri1 / dis1;
let disAmount2 = pri2 / dis2;

let adp = pri - disAmount;
let adp1 = pri1 - disAmount1;
let adp2 = pri2 - disAmount2;

let total = adp + adp1 + adp2;

document.getElementById("price").innerHTML = pri;
document.getElementById("price1").innerHTML = pri1;
document.getElementById("price2").innerHTML = pri2;

document.getElementById("disc").innerHTML = dis;
document.getElementById("disc1").innerHTML = dis1;
document.getElementById("disc2").innerHTML = dis2;

document.getElementById("apd").innerHTML = adp;
document.getElementById("apd1").innerHTML = adp1;
document.getElementById("apd2").innerHTML = adp2;

document.getElementById("total").innerHTML = total;
