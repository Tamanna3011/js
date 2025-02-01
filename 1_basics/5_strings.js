const name = "tamanna"
const repoCount = 2

// console.log(name + repoCount  + " values");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// this type of syntax using backtick is known as string interpolation

 const gameName = new String('tamanna-tp-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
 // here the last character is not counting like from 0 to 4 
 //total no if character is 5 but last character is not counted 
 //that is 0, 1, 2, 3 -> t, a, m, a
console.log(newString);

const anotherString = gameName.slice(-11, 5)
console.log(anotherString);

const newStringOne = "   tamanna    "
console.log(newStringOne);
console.log(newStringOne.trim());
// trim() is used to remove white spaces 


const url = "https://tamanna.com/tamanna%20parween"

console.log(url.replace('%20', '-'));

console.log(url.includes('google'));

console.log(gameName.split());
