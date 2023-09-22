// ***** Asynchronous JavaScript ***** 

// --- Javascript setTimeout() ---

// The setTimeout() method executes a block of code after the specified time. The method executes the code only once.
{
    // setTimeout(function,  milliseconds)

    // function - a function containing a block of code
    // milliseconds - the time after which the function is executed
}

// The setTimeout() method returns an intervalID, which is a positive integer.
// Display a Text Once After 3 Second

// {
//     function greet() {
//         console.log('hey kishan');
//     }

//     setTimeout(greet, 3000);
//     console.log('this message is shown first');

//      // the setTimeout() method calls the greet() function after 3000 milliseconds (3 second).
// }


// The setTimeout() method returns the interval id. 
// {
//     function greet() {
//         console.log('hello kishan');
//     }
//     let intervalID = setTimeout(greet, 3000);
//     console.log('ID : ' + intervalID);
// }

// running time 
// {
//     setInterval(myFunction, 1000);

//     function myFunction() {
//         let d = new Date();
//         document.getElementById("demo").innerHTML =
//         d.getHours() + ":" +
//         d.getMinutes() + ":" +
//         d.getSeconds();
//     }
// }

// Display Time Every 3 Second
// {
//     function showTime() {
//         let date = new Date();
//         let time = date.toLocaleTimeString();
//         console.log(time);
//         setTimeout(showTime, 3000);
//     }
//     showTime();
// }


// --- JavaScript clearTimeout() ---

// As you have seen in the above example, the program executes a block of code after the specified time interval. 
// If you want to stop this function call, you can use the clearTimeout() method.

// The syntax of clearTimeout() method is
{
    // clearTimeout(intervalID);
}

// example 1:-
// {
//     // program to stop the setTimeout() method

//     let count = 0;
//     function increseCount() {
//         count += 1;
//         console.log(count);
//     }
//     let id = setTimeout(increseCount,3000);
//     clearTimeout(id);
//     console.log('setTimeout is stopped');

//     // the setTimeout() method is used to increase the value of count after 3 seconds. However, the clearTimeout() method stops the function call of the setTimeout() method. Hence, the count value is not increased.
//     //  You generally use the clearTimeout() method when you need to cancel the setTimeout() method call before it happens.
// }

// example 2:- start and stop counter
// {
//     let count = 0;
//     let timeOut;
//     let timeOn = 0;

//     function timecount() {
//         document.getElementById("demo1").innerHTML = count;
//         count++;
//         timeOut = setTimeout(timecount,1000);
//     }
//     function startcount() {
//         if(!timeOn) {
//             timeOn = 1;
//             timecount();
//         }
//     }
//     function stopcount() {
//         clearTimeout(timeOut);
//             timeOn = 0;
//     }
// }


// You can also pass additional arguments to the setTimeout() method. 
{
    // setTimeout(function, milliseconds, parameter1, ....paramenterN);
}
// When you pass additional parameters to the setTimeout() method, these parameters (parameter1, parameter2, etc.) will be passed to the specified function.

// {
//     function greet(name, lastname) {
//         console.log("hello" + " " + name + " " + lastname);
//     }

//     // passing argument to setTimeout
//     setTimeout(greet, 1000, "kishan", "bhalala");

//     // two parameters John and Doe are passed to the setTimeout() method. These two parameters are the arguments that will be passed to the function (here, greet() function) that is defined inside the setTimeout() method.

// }


// --- JavaScript CallBack Function ---

// A function is a block of code that performs a certain task when called. 
// {
//     function greet (name) {
//         console.log('hiii' + " - " + name);
//     }
//     greet('kishan');
// }

// Program with setTimeout()
// {
//     //  program that shows the delay in execution
//     function greet() {
//         console.log('hello world');
//     }

//     function sayname(name) {
//         console.log('hiii' + " - " + name);
//     }

//     setTimeout(greet, 2000);
//     sayname("kishan");
// }


// ****** JavaScript Promise and Promise Chaining  ******

// In JavaScript, a promise is a good way to handle asynchronous operations. 
// It is used to find out if the asynchronous operation is successfully completed or not.

// A promise may have one of three states :-
// Pending
// Fulfilled
// Rejected

// A promise starts in a pending state. That means the process is not complete. If the operation is successful, the process ends in a fulfilled state. And, if an error occurs, the process ends in a rejected state.
// For example, when you request data from the server by using a promise, it will be in a pending state. When the data arrives successfully, it will be in a fulfilled state. If an error occurs, then it will be in a rejected state.

// Create a Promise syntex :-
// To create a promise object, we use the Promise() constructor.
{
    // let promise = new Promise(function(resolve, reject){
    //     //do something
    // });

    // // The Promise() constructor takes a function as an argument. The function also accepts two functions resolve() and reject().

    // // If the promise returns successfully, the resolve() function is called. And, if an error occurs, the reject() function is called.
}

// Program with a Promise

// {
//     const count = true;

//     let countvalue = new Promise(function (resolve, reject) {
//         if (count) {
//             resolve("there is count value");
//         }
//         else {
//             reject("there is no count value");
//         }
//     });
//     console.log(countvalue);
// }


// --- JavaScript Promise Chaining ---

// Promises are useful when you have to handle more than one asynchronous task, one after another. For that, we use promise chaining.

// You can perform an operation after a promise is resolved using methods then(), catch() and finally().


// - JavaScript then() method -

// The then() method is used with the callback when the promise is successfully fulfilled or resolved.

// The syntax of then() method is

{
    // promiseObject.then(onFulfilled, onRejected);
}

// Chaining the Promise with then() method :-

 // the then() method is used to chain the functions to the promise. The then() method is called when the promise is resolved successfully.

 // You can chain multiple then() methods with the promise.

// {
//     // returns a promise
//     let countvalue = new Promise(function (resolve,reject) {
//         resolve("promise resolevd");
//     });

//     // executes when promise is resolved successfully
//     countvalue.then(function successvalue(result) {
//         console.log(result);
//     })

//     countvalue.then(function successvalue1() {
//         console.log("you can call multiple functions this way");
//     });
// }

// - JavaScript catch() method -

// The catch() method is used with the callback when the promise is rejected or if an error occurs.

// {
//     let countvalue = new Promise(function (resolve,reject) {
//         reject("promise rejected");
//     });

//     countvalue.then(
//         function a(result) {
//             console.log(result);
//         },
//     )
//     countvalue.catch(
//         function error(result) {
//             console.log(result);
//         }
//     );
// }


// - JavaScript finally() method - 

// {
//     // You can also use the finally() method with promises. The finally() method gets executed when the promise is either resolved successfully or rejected.

//     let countValue = new Promise(function (resolve, reject) {
//         // could be resolved or rejected   
//         resolve('Promise resolved'); 
//     });
//     // add other blocks of code
//     countValue.finally(
//         function greet() {
//             console.log('This code is executed.');
//         }
//     );
// }




  