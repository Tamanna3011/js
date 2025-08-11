/** ***** little about "this"   ******** */
const user = {
    username: "tamanna",
    price: 999,

    welcomeMessage: function ( ) {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

//  console.log(this);

// function chai() {
//     let username = "tamanna" // username is declared but never read
//     console.log(this.username);
    
// }

// chai() // this will give undefined

// const chai = function (){
//     let username = "tamanna"
//     console.log(this.username);
    
// }

// chai() // this will also give undefined

// const chai =  () => {  // this is arrow function
//     let username = "tamanna"
//     console.log(this.username);
// }

// chai() //this will give undefined


// const chai =  () => {  // this is arrow function
//     let username = "tamanna"
//     console.log(this);
// }

// chai()  // this will give  {}

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2   // this is an implicit return because it is one line statement 
                  //or                           // and we don't use {} as we suppose we don't  have to use return keyword as it is one line statement 
// const addTwo = (num1, num2) => (num1 + num2) 

// const addTwo = (num1, num2) => {username:"tamanna"}  // this will give undefined as we can't return object without ()

const addTwo = (num1, num2) => ({username:"tamanna"})

console.log(addTwo(3,5))
