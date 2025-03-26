// There are two ways to declare objects 
// 1) Constructor 2)literal
// ** singleton( An object that can only be instantiated one time) :- when objects declared through literal then singleton is not created
// But if declared through a constructor then singleton is always created

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Tamanna",
    "full name": "Tamanna Parween",
    [mySym]: "mykey1", // correct syntax to use a symbol
    age: 21,
    location: "Ranchi",
    email: "tamanna@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);
// console.log(typeof JsUser.mySym);

JsUser.email = "tamanna@yahoo.com"
//Object.freeze(JsUser)
JsUser.email = "tamanna@microsoft.com"
// console.log(JsUser);

// in js functions can be treated like variables . In functions there is no discrimination
JsUser.greeting = function(){
    console.log("Helo JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Helo JS user,${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

