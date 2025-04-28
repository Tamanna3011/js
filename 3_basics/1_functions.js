function sayMyName() {
    console.log("T");
    console.log("A");
    console.log("M");
    console.log("A");
    console.log("N");
    console.log("N");
    console.log("A");
    
}

// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
    
// }

function addTwoNumbers(number1, number2){
    
    // let result = number1 + number2
    // return result
    
    return number1 + number2
}

// addTwoNumbers(3, 4)
// addTwoNumbers(3, "4")
// addTwoNumbers(3, "a")
// addTwoNumbers(3, null)

const result = addTwoNumbers(3, 5)

// console.log("result:", result);


function loginUserMessage(username = "john"){
    if(!username){ // or we can we can write  if(username === undefined)
      console.log("Please enter a usernsme");
      return
    }
    return`${username} just logged in`
}

 //console.log(loginUserMessage("tamanna"));
// console.log(loginUserMessage(""));
// console.log(loginUserMessage());


function calculateCartPrice(val1, val2,...num1){ //here the three dots works as a rest operator
    return num1
}
// console.log(calculateCartPrice(200, 400, 500, 300));// here val1=200, val2= 400 

const user = {
    username: "tamanna",
    prices: 399
}

function handleObject(anyobject){
    console.log(`usename is ${anyobject.username} and the price is ${anyobject.price}`);
    
}

// handleObject(user)
handleObject({
    username: "john",
    price: 199
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 100, 600]));
