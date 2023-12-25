// splice method => splice(position, removeElements, optional)
// let num = [45, 12, 5, 59, 100, 26, 60];
// num.splice(2, 0, "hello");
// num.splice(2, 3, "hello");
// num.splice(2, 3);
// console.log(num);


// slice Method
// // let abc = num.slice(2);
// let abc = num.slice(2,6);
// console.log(abc);

// forEach method
// let num = [45, 12, 5, 59, 100, 26, 60];
// let txt = "";

// num.forEach((val)=> {
//     txt += val + " ";
// })
// console.log(txt);

// map method
// let num = [45, 12, 5, 59, 100, 26, 60];

// let aaa = num.map((val)=> {
//     return val * 3;
// })
// console.log(aaa);


// every method
// let num = [45, 122, 51, 59, 100, 26, 60];
// let txt = num.every((val)=> {
//     return val>15;
// })
// console.log(txt);


//some method
// let num = [45, 12, 5, 59, 100, 26, 60];
// let txt = num.some((val)=> {
//     return val>15;
// })
// console.log(txt);


// filter method
// let num = [45, 12, 5, 59, 100, 26, 60];
// let txt = num.filter((val)=> {
//     return val<15;
// })
// console.log(txt);

// reduce method / reduceRight method
// let num = [45, 12, 5, 59, 100, 26, 60];
// let txt = num.reduceRight((total,val)=> {
//     return total + val;
// })
// console.log(txt);

// // find method
// let num = [45, 12, 5, 59, 100, 26, 60];
// let txt = num.find((val)=> {
//     return val<15;
// })
// console.log(txt);

// findIndex method
// let num = [45, 12, 5, 59, 100, 26, 60];
// let txt = num.findIndex((val)=> {
//     return val<15;
// })
// console.log(txt);

// entries method
// let num = [45, 12, 5, 59];
// let a = num.entries();
// console.log(a.next().value);
// console.log(a.next().value);
// console.log(a.next().value);
// console.log(a.next().value);


// includes method
// let num = [45, 12, 5, 59];
// console.log(num.includes(12));

// Max and Min method
// let num = [45, 12, 5, 59, 100, 26, 60];
// let hello = (arr) => {
//     return Math.min.apply(null, arr);
// }
// let hello = (arr) => {
//     return Math.max.apply(null, arr);
// }
// console.log(hello(num));


// copyWithIn
let num = [45, 12, 5, 59];
let a = num.copyWithin(1,0,2);
console.log(num);  