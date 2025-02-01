const score = 400
//console.log(score);

const balance = new Number(100)
//console.log(balance);

//console.log(balance.toString());
//console.log(balance.toString().length);
//console.log(balance.toFixed(5));// use tofixed especially to build an e-commerce website

const otherNumber = 3432.34342

//console.log(otherNumber.toPrecision(2));
// see mdn docs for reference

const hundreds = 1000000
//console.log(hundreds.toLocaleString());
//console.log(hundreds.toLocaleString('en-IN'));
   

/**************************MATHS***************************/
/*
console.log(Math);
console.log(Math.abs(-3));
console.log(Math.round(4.8));
console.log(Math.ceil(3.4));
console.log(Math.floor(2.6));
console.log(Math.min(4, 3, 5, 6));
console.log(Math.max(3, 4, 6, 7,));*/


console.log(Math.random());
console.log((Math.random()*10 + 1));
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min) +1) + min);
