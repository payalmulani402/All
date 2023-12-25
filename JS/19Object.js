// Object   -> key = value


// 1. object creating as a variable
// let person = {
//     name: "Skill",
//     age: 10,
//     email: "hello@test.com",
//     hello: function(){
//         return `${this.name} is ${this.age}`
//     }
// };
// console.log(typeof(person));
// console.log(person);
// console.log(person.name);       // accessing elements
// console.log(person.hello());       // accessing elements
// console.log(person["age"]);      // accessing elements
// let x = "email";
// console.log(person[x]);


// 2. Object Create
// let test = new Object();
// test.name = "Hello";        // add new property of object
// test.email = "hello@test.in"
// test.abc = function(){
//     console.log('Hello Wolrd');
// }
// // test.abc();
// delete test.email;
// console.log(test);


// 3. Nested Object
// let person  = {
//     name: "Skill",
//     age: 25,
//     email: "hello@test.in",
//     address: {
//         city: "Surat",
//         state: "Gujarat",
//         country: "India"
//     }
// };

// console.log(person.address.city);


// assign method
// let person = {
//     name: "Skill",
//     age: 10,
//     email: "hello@test.com"
// };
// let abc = {};
// Object.assign(abc, person);

// console.log(abc);