// const coding = ["js", "ruby", "python", "cpp"]


// const values = coding.forEach(  (item) => {
//     console.log(item);
//     return item                // for each don't return values. it will give undefined
// }  )

// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// // const newNums = myNums.filter(  (num)  => num > 4)
// const newNums = myNums.filter(  (num)  => {
//    return num > 4                            // if we are using scopes i.e, {}........ we have to use 'return' to return the value otherwise it will give empty array
// }  )

// to return value using forEach =>

// const newNums = []

// myNums.forEach(  (num) => {         // using callback function of arrow
//     if (num > 4) {
//         newNums.push(num)
//     }
// })

// console.log(newNums);

// for each doesn't return value but filter does. Both are callbackfn function

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981,
     edition: 2004},
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, 
    edition: 2004},
    { title: 'Book Three', genre: 'History', publish: 1999,
     edition: 2008},
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, 
    edition: 2007},
    { title: 'Book Five', genre: 'Fiction', publish: 2009, 
    edition: 2010},
    { title: 'Book Six', genre: 'Science', publish: 1987, 
    edition: 2014},
    { title: 'Book Seven', genre: 'Fiction', publish: 1981, 
    edition: 2010},
    { title: 'Book Eight', genre: 'History', publish: 1986, 
    edition: 1996},
    { title: 'Book One', genre: 'Science', publish: 2011, 
    edition: 2016}
]

let userBooks = books.filter( (bk) => bk.genre === 'History')

userBooks = books.filter( (bk) =>  {
    return bk.publish >= 1995 && bk.genre === 'History'
} )
console.log(userBooks);

