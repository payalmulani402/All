// --- javascript while loop ---  

// the javascript while loop iterates the elements for the infinite number of times. 
// it should be used if number of iteration is not known.

// while (condition) {
//     code to be executed
//      increment
// }

// example
// {
//     let a = 1;

//     while (a <= 10) {
//         document.write(a +"<br>");
//         a++;
//     }
// }
// {
//     let a = 1;
//     let sum = 0;

//     while (a <= 10) 
//     {
//         if(a % 2 == 0)
//         {
//             sum = sum + a;
//         }
//         a++;
//     }
//     document.write(sum);
// }

// --- javascript do while loop --- 

// the javascript do while loop iterates the elements for the infinite number of times like while loop.
// but, code is executed at least once whether condition is true or false

// do{
//     code to be executed
//      increment
// }while (condition);

// example
// {
//     let a = 0;
//     do{
//         document.write(a +"<br>");
//         a++;
//     }while (a <= 10)
// }

// --- javascript for loop --- 

// the javascript for loop iterates the elements for the fixed number of times.
// it should be used if number of iteration is known.

// {
//     for(initialization; condition: increment)
//     {
//         code to be executed
//     }
// }

// example
// {
//     for(let i=0; i<=5; i++)
//     {
//         document.write(i +"<br>");
//     }
// }



// -------------------------------//
// -------------------------------//


// --- The For Of Loop ---

// The for...of loop was introduced in the later versions of JavaScript ES6.

// The for..of loop in JavaScript allows you to iterate over iterable objects (arrays, sets, maps, strings etc).

{
    // for (variable of iterable) {
    //     // code block to be executed
    //   }
}
//   iterable - an iterable object (array, set, strings, etc).
//   element - items in the iterable

{
    // // for...of with Arrays

    // // array
    // const students = ['John', 'Sara', 'Jack'];

    // // using for...of
    // for ( let element of students ) {

    //     // display the values
    //     console.log(element);
    // }
}

{
    // // for...of with Strings
    // const string = 'code';

    // // using for...of loop
    // for (let i of string) {
    //     console.log(i);
    // }
}

{
    // // for...of with Sets
    // // define Set
    // const set = new Set([1, 2, 3]);

    // // looping through Set
    // for (let i of set) {
    //     console.log(i);
    // }
}

{
    // // for...of with Maps
    // // define Map
    // let map = new Map();

    // // inserting elements
    // map.set('name', 'Jack');
    // map.set('age', '27');

    // // looping through Map
    // for (let [key, value] of map) {
    //     console.log(key + ' - ' + value);
    // }
}


// --- The For In Loop ---

{
    // for (key in object) {
    //     // code block to be executed
    // }
}

// Iterate Through an Object :-

{
    // const student = {
    //     name: 'Monica',
    //     class: 7,
    //     age: 12
    // }
    
    // // using for...in
    // for ( let key in student ) {
    
    //     // display the properties
    //     console.log(`${key} => ${student[key]}`);
    // }
}

{
    // Update Values of Properties :-
    
    // const salaries= {
    //     Jack : 24000,
    //     Paul : 34000,
    //     Monica : 55000
    // }
    
    // // using for...in
    // for ( let i in salaries) {
    
    //     // add a currency symbol
    //     let salary = "$" + salaries[i];
    
    //     // display the values
    //     console.log(`${i} : ${salary}`);
    // }
}

{
    // You can also use for...in loop to iterate over string values.

    // const string = 'code';

    // // using for...in loop
    // for (let i in string) {
    //     console.log(string[i]);
    // }
}

{
    // for...in with Arrays :-

    // // define array
    // const arr = [ 'hello', 1, 'JavaScript' ];

    // // using for...in loop
    // for (let x in arr) {
    //     console.log(arr[x]);
    // }

    // // You should not use for...in to iterate over an array where the index order is important.

    // // One of the better ways to iterate over an array is using the for...of loop.
}



/*  --- JavaScript forEach() ---  */

/* The forEach() method calls a function and iterates over the elements of an array. The forEach() method can also be used on Maps and Sets. */

{
    // array.forEach(function(currentValue, index, arr));

    // function(currentValue, index, arr) - a function to be run for each element of an array
    // currentValue - the value of an array
    // index (optional) - the index of the current element
    // arr (optional) - the array of the current elements
}

{
    /* forEach with Arrays */ 

    // let students = ['John', 'Sara', 'Jack'];

    // // using forEach
    // students.forEach(myFunction);

    // function myFunction(item) {

    //     console.log(item);
    // }

    // the forEach() method takes myFunction() function that displays each element of a students array.
}

/* Updating the Array Elements */

/* the forEach() method is used to iterate over an array, it is quite simple to update the array elements. */

{
    // let students = ['John', 'Sara', 'Jack'];

    // // using forEach
    // students.forEach(myFunction);

    // function myFunction(item, index, arr) {

    //     // adding strings to the array elements
    //     arr[index] = 'Hello ' + item;
    // }

    // console.log(students);
}


/* for...of with Sets */
{
    // // define Set
    // const set = new Set([1, 2, 3]);

    // // looping through Set
    // set.forEach(myFunction);

    // function myFunction(item) {
    //     console.log(item);
    // }
}

/* forEach with Maps */
{
    // let map = new Map();

    // // inserting elements
    // map.set('name', 'Jack');
    // map.set('age', '27');

    // // looping through Map
    // map.forEach (myFunction);

    // function myFunction(value, key) {
        
    //     console.log(key + '- ' + value);
    // }
}