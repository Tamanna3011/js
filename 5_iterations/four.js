
const myObject = {
    js : 'javascript',
    cpp : 'c++',
    rb : "ruby",
    swift : "swift by apple"
}

// for (const key in myObject) {
// //   console.log(myObject[key]);
// }
for (const key in myObject) {
  console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(key);           // key of array starts from 0 and it is numeric
}

for (const key in programming) {
 console.log(programming[key]);
    
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")

// for (const key in map) {
//     console.log(key);    //map is not iterable so this doesn't give any value in forin loop
    
// }
