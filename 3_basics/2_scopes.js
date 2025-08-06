// var c = 300 // outside the the block scope is reffered as global scope
let a = 300 // to avoid var problems related to scope ..we should use let

if(true){          //this whole
    let a = 10     // if condition here 
    const b = 20   //is referred as 
    //var c = 30     //block scope
    // console.log("INNER:", a);
    
}
    
//  console.log(a);
// console.log(b);
// console.log(c);

/**nested scope */

function one(){
    const username = "tamanna"

    function two(){
        const website = "youtube"
        // console.log(username);
    }
    //console.log(website); It will give error because the 
                           // 'website' is defined inside the two() and it is called 
                           // outside the scope of function two()                     

    two() // It will give the result 'tamanna' as when two() executed
          // it goes in line 23 to console username and the username 
          // is defined in function one() as one() is executed
          // But if we comment this two() it will return nothing
    
}

one()

if (true) {
    const username = "tamanna"
    if (username === "tamanna") {
        const website = "youtube"
        //console.log(username + website);   //this will give 'tamannayoutube' as a result
    }
    //console.log(website); // this will give error because it is called 
                          // outside the 2nd scope where the 'website is defined'.hence not 
                          //defined in the 1st scope
}

// console.log(username)     // This will also give error as we have console this
                          // username outside the scope . Hence not defined.