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



function one(){
    const username = "tamanna"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    //console.log(website);

    two()
    
}

one()