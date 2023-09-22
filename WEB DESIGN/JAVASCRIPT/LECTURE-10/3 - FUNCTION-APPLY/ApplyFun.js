// ***** Javascript Function apply() *****

// apply() Syntax
// {
//     func.apply(thisArg, argsArray)
// }

// thisArg - The value of this which is provided while calling func.
// argsArray (optional) - An array containing the arguments to the function.


// 1 : apply() Method to call a Function
// {
//      // object definition
//     const personName = {
//         firstName : "kishan",
//         lastName : "bhalala",
//     };

//     // function definition
//     function greet(wish, message) {
//         return `${this.lastName} ${message} ${wish}`
//     }

//     // calling greet() function by passing two arguments
//     let result = greet.apply(personName, ["hello", "how are you"]);

//     console.log(result);
// }


// 2: apply() for Function Borrowing
// {
//     const car = {
//         name : "BMW",
//         price:"25 lacs",

//         detail() {
//             return `The ${this.name} is of ${this.color} color.`;
//         },
//     };
//     const bike = {
//         name : "harly devidson",
//         color : "black",
//     };

//     // bike is borrowing description() method from car using apply()
//     let result = car.detail.apply(bike);

//     console.log(result);
// }


// 3: apply() to Append two Arrays
// {
//     let color1 = ["red", "green", "pink"];
//     let color2 = ["blue", "yellow"];

//     // appending two arrays color1 and color2
//     let x = color1.push.apply(color1, color2);

//     console.log(color1);
// }


// 4 : Using apply() with built-in functions
// {
//     const num = [22, 3, 4, 1, 66, 76, 44, 56, 34, 87, 90];

//     // using apply() with Math object 
//     let max = Math.max.apply(null,num);
//     console.log(max);

//     // without using apply() with Math object 
//     let max1 = Math.max(5, 1, 4, 3, 4, 6, 8);
//     console.log(max1); 

//  // The value null is a JavaScript literal representing null or an "empty" value, 
//  //  i.e. no object value is present. It is one of JavaScript's primitive values.

// }


// others program 
// {
//     function sum() {
//         let sum = 0;

//         for(let i = 0; i < arguments.length; i++) {
//             sum += arguments[i];
//         }
//         return sum;
//     }
//     const result = sum.apply(null, [2,3,4]);
//     console.log(result);
// }