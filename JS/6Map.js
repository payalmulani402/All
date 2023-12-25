// Map methods -> Array
/*
    set() -> set a new map key and values pair
    get() -> get a Map key -> value
    has() -> return true / false
    delete() -> delete a key and value pair
    entires() -> all key and values pair
    forEach() -> itreate for map
    size -> return size of Map (length)
*/

// const Data = new Map([
//     ["Audi", 20],
//     ["BMW", 30],
//     ["Ferari", 40],
//     ["Tata", 50],
// ])

// console.log(Data);

// Data.set("Suzuki", 90);

// console.log(Data);

// console.log(Data.get("BMW"))
// console.log(Data.has("hello"))
// console.log(Data.delete("BMW"))
// console.log(Data.entries());
// console.log(Data.size);


// let a = "";

// Data.forEach(function(value, key){
//     a += key + " - " + value + "\n";
// })

// console.log(a);



const hello = new Map();        // init
hello.set("car",500);
hello.set("bike",900);
hello.set("truck",300);
hello.set("bus",200);
// console.log(hello);
console.log(hello.entries());
