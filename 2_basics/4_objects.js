//const tinderUser = new Object() // singleton object
const tinderUser = {}// non singleton object
//both results are same but only of them is singleton object
tinderUser.id = "123"
tinderUser.name = "sam"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "tamanna",
            lastname: "parween"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

//const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1,...obj2,...obj4}
//console.log(obj3);


const users =[
    {
        id: 1,
        email:"t@gmail.com"
    },
    {
        id: 1,
        email:"t@gmail.com"
    },
    {
        id: 1,
        email:"t@gmail.com"
    }
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));
// console.log(tinderUser.hasOwnProperty('isLogged'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "somename"
}

// course.courseInstructor

const {courseInstructor: Instructor} = course // deconstructing of object
// console.log(courseInstructor); // OR
console.log(Instructor);

// const navbar = (props.company) => { /// props used in react 

// }
// navbar(comapny = "somename")
// by deconstructing syntax will be 
// const navbar = ({company}) => {}
    
/*
this is a json syntax in context of object
{
    "name": "somename",
    "coursename": "js in hindi",
    "price": "free"
}*/

// api in context of array
[
    {},
    {},
    {}
]