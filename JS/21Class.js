// // Class
// class person {
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     hello(){
//         return ('Hello SkillQode');
//     }
//     newAge(){
//         return this.age + 10;
//     }
// };

// let x = new person('Peter', 25);

// console.log(x.name)
// console.log(x.age)
// console.log(x.hello())
// console.log(x.newAge())


// rest operator => ...
// rest operator used in function like this array
// function product(...args){
//     let s = 1;
//     for(let i of args){
//         s *= i;
//     }
//     return s;
// }
// a = product(10,5);
// console.log(a);

// let arr1 = [ 1,2,3];
// let arr2 = [...arr1];
// console.log(arr1);
// console.log(arr2);

// arr1.push(4);
// console.log(arr1);
// console.log(arr2);

// let a = { x: 1, y: 2 }
// let b = { z: 1 }
// let c = {a, ...b};
// // console.log(c);

// a.s = 5;
// console.log(a);
// console.log(c);



// Function Generator
// function* generator(){
//     yield 1;
//     yield 2;
//     return '3'
// }


// let hello = generator();
// console.log(hello.next().value);
// console.log(hello.next().value);
// console.log(hello.next().value);


// function Call Method
// function greet(){
//     return `${this.name}'s age is ${this.age}`;
// }

// let person = {
//     name: "Twinkle",
//     age: 29
// };

// x = greet.call(person);
// console.log(x);


// Apply method
// function greet(city,state){
//     return `${this.name}'s age is ${this.age} and lives in ${city},${state}`;
// }

// let person = {
//     name: "Twinkle",
//     age: 29
// };

// x = greet.apply(person,['Surat','Gujarat']);
// console.log(x);



// Bind method
function greet(){
    return `${this.name}'s age is ${this.age}`;
}

let person = {
    name: "Twinkle",
    age: 29
};
x = greet.bind(person);
console.log(x());      