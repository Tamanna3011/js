// if
// const isUserLoggedIn = true
// const temperature = 41

// if (temperature === 40 ) {
//     console.log("less than 50");
    
// } else {
//     console.log("temperature is greater than 50");
// }

// console.log("Execute");
// <, >, <=, >=, !=, ===, !==

// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`user power: ${power}`);
// }

// console.log(`user power: ${power}`); // it will give error as power is not defined outside the scope

const balance = 1000

// if (balance > 500) console.log("test"); // It is a one line scope called implicit scope

// if (balance > 500) console.log("test"), console.log("test2"); //we can also use  this but it is very unreadable code, so not use it

// if (balance < 500) {
//     console.log("less than");
    
// } else if (balance < 750){
//     console.log("less than 750");
    
// } else if (balance < 900){
//     console.log("less than 900");
    
// } else {
//     console.log("less than 1200");
    
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==2) {  // this is 'and ' statement where both condition should be true i.e, user must be logged in and have debitcard
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) { // this is 'or ' statement where user either can log in from google or email
    console.log("user logged in");
    
}
