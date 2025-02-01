// 

const myArr = [0, 1, 2, 3, 4, 5]
const myHeroes = ["thor", "ironman"]

const myArr2 = new Array(1, 2, 3, 4, 5)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(0)
// myArr.shift(7)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));
// console.log(myArr.indexOf(3));

const newArr = myArr.join()

// console.log(myArr);
// console.log( typeof newArr);

// silce, splice

console.log("A", myArr);
const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C", myArr);
console.log(myn2);


/*
  Function of slice :The slice() method of Array instances returns
   a shallow copy of a portion of an array into
    a new array object selected from start to end (end not included)
     where start and end represent the index of items in that array.
      The original array will not be modified

      
  Function of splice :The splice() method of Array instances changes 
  the contents of an array by removing or replacing existing elements 
  and/or adding new elements in place.



  Difference :slice creates a new array without modifying the original array,
   while splice modifies the original array.
*/