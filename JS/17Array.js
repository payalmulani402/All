/*
    Array and its method
    length -> return a length of Array
    push -> Enter the element at Array of end position
    pop -> remove the element at end position
    shift -> remove the element at first position
    unshift -> enter the element at first position
    concat => merge two array
    sort => sorting the array
    reverse => reverse array
*/
// let arr = [1, 2.5, 3, 4, 5, "hello", "wrold", true, false]
// let arr = new Array(1,2,3,4)
// let arr = [];
// arr[0] = "hello",
// arr[1] = 15
// console.log(arr[5]);
// arr[50] = 'Skill';
// arr.length = 99
// console.log(arr);
// console.log(arr[30]);
// console.log(arr.length);




// let arr = [1,2,3,4,5];
// console.log(arr);
// arr.push(10);
// console.log(arr);
// console.log(arr.length);


// arr.pop();
// arr.pop();
// arr.pop();

// arr.shift();
// arr.shift();

// arr.unshift(500);

// let arr1 = [10,11,12,13];
// let arr2 = [110,111,112,113];
// arr = arr.concat(arr2,arr1);


let arr = [15, 80, 26, 10, 85, 14, 12];
arr = arr.sort((a, b) => a - b);

arr.reverse();
console.log(arr);