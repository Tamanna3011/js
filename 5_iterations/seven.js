const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumbers.map( (num) => num + 10 )      // map automatically returns value

// chaining, where where more than one method() can be combined 
// in chaining the value of first method passes to the 2nd method

const newNums = myNumbers
                .map((num) => num * 10 )
                .map( (num) => num + 1 )
                .filter( (num) => num >= 40 )

console.log(newNums);

