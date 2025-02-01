// primitive datatypes

// 7 types : String, Number, Boolean, Null, undefined
// Bigint, Symbol

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEMail;

const id = Symbol('123')
const anotherId = Symbol('123')

 console.log(id === anotherId);

// const bigNUmber = 6557436873876876883n


// Reference (non-primitive)
// Object, Array, Function Date,// RegExp, Set, Map, WeakSet, WeakMap

/**********Array************/
const heros = ["shaktiman","naagraj", "doga"];
let myObj = {
    name: "Tamanna",
    age: 21,
}

const myFunction = function(){
    console.log("hello world");  
}

console.log(typeof heros);




/**********************************************/
// Stack (Primitive), Heap (Non-Primitive)


let myYouTubename = "tamanna"

let anothername = myYouTubename
anothername = "parween"


console.log(myYouTubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl",
}

let userTwo = userOne

userTwo.email = "tamanna@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

