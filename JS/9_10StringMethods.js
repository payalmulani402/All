// // array of character
// let a = "Hello World";
// let b = 'Javascript learning'
// console.log(a)
// console.log(b)
// let c = `SkillQode`

// a = 'Hello "World"'
// b = "its\" new begininig"
// console.log(a)
// console.log(b)
// console.log(c)



/*
    String Methods
    1. length  
    2. slice(start, end) => includes start
    3. substring(start, end)  
    4. substr(start, length)
    5. toUpperCase()
    6. toLowerCase()
    7. concat() => merge two string

    8. replace() => replace the word first match
    9. replaceAll() => replace the word all match
    10. trim() => remove all extra space both side
    11. trimStart() => remove all extra space start side
    12. trimEnd() => remove all extra space end side
    13. padStart() => extra character print
    14. padEnd() => extra character print
    15. charAt() => return index character
    16. charCodeAt( q   ) => retur0n ASCII value
    17. split() => convert to array
*/
// let result
// let txt = "How are you guys?"
// let result = txt.length;

// result = txt.slice(5,9);
// console.log(result);
// result = txt.slice(6);
// result = txt.slice(-15,-9);

// result = txt.substr(5,9);
// result = txt.substr(-15,3);


// result = txt.substring(-5,9);
// result = txt.substring(9);


// result = txt.toUpperCase()
// result = txt.toLowerCase()

// let a = "Hello";
// let b = "world";
// result = a.concat("\n"+b);
// console.log(result);


let result;

// let data = 'Hi, how are you ?, You are fine????';
// // data = data.replace("you", "hello");     // first match only
// // data = data.replace(/you/i, "hello");    // case in-sensitive
// // data = data.replace(/you/g, "hello");       // gloally match
// data = data.replaceAll("you", "hello");
// console.log(data);


// let a = "       Hello world       ";
// console.log(a.length);
// // a = a.trim();
// // a = a.trimStart();
// // a = a.trimEnd();
// console.log(a.length);
// console.log(a);


// let b = "15";
// let b = 15;
// b = b.toString();
// // result = b.padStart(5,"A");
// result = b.padEnd(5,"x");
// console.log(result);        // xxxx5


// let txt = "SkillQode";
// // result = txt.charAt(5); //i
// result = txt.charCodeAt(8); //i
// console.log(result);



let data = "He,llo, Wor,ld g,uys";
result = data.split(",");
console.log(result)