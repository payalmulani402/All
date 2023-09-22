// *****  javascript Map method *****  

// new Map()	   Creates a new Map
// set()	       Sets the value for a key in a Map
// get()	       Gets the value for a key in a Map
// delete()	       Removes a Map element specified by the key
// has()	       Returns true if a key exists in a Map
// forEach()	   Calls a function for each key/value pair in a Map       (function lec ma chalse)
// entries()	   Returns an iterator with the [key, value] pairs in a Map

// Property   	Description :-
// size	        Returns the number of elements in a Map


// ---new Map() Method---
// You can create a Map by passing an Array to the new Map() constructor :- 
// {
//     // Create a Map
//     const fruits = new Map([
//         ["apples", 500],
//         ["bananas", 300],
//         ["oranges", 200]
//     ]);
//     document.getElementById("new").innerHTML = fruits.get("apples")
// }


// ---set() Method---
// // You can add elements to a Map with the set() method: 
// {
//     // Create a Map
//     const cars = new Map();

//     // Set Map Values
//     cars.set("innova", 300000);
//     cars.set("farari", "1.5crore");
//     cars.set("bmw", "50lacas");

//     document.getElementById("set1").innerHTML = cars.get("innova");
//     document.getElementById("set2").innerHTML = cars.get("farari");
//     document.getElementById("set3").innerHTML = cars.get("bmw");
// }


//  ---get() Method---
// // The get() method gets the value of a key in a Map:
// {
//     const vehical = new Map([
//         ["item-1" , "car"],
//         ["item-2" , "bus"],
//         ["item-3" , "truck"]
//     ]);
//     vehical.set("item-1" , "train");
//     document.getElementById("set4").innerHTML = vehical.get("item-1");
// }

// ---delete() method---
// The delete() method removes a Map element:
// {
//     const brand = new Map([
//         ["key1" , "nike"],
//         ["key2" , "addidas"],
//         ["key3" , "puma"],
//         ["key4" , "jordan"]
//     ]);

//     const d = brand.delete("key2");
//     document.getElementById("delet1").innerHTML = d;
//     document.getElementById("delet2").innerHTML = brand.size;
// }


// ---has() Method---
// The has() method returns true if a key exists in a Map:
// {
//     const number = new Map([
//         ["op-1", 10],
//         ["op-2", 20],
//         ["op-3", 30],
//         ["op-4", 40],
//         ["op-5", 50],
//     ]);
//     const has1 = number.has("op-1");
//     document.getElementById("hassss1").innerHTML = has1;

//     const has2 = number.has("op-6");
//     document.getElementById("hassss2").innerHTML = has2;
// }

// ---entries() method---
// {
//     const fruits = new Map([
//         ["f-1" , "greaps"],
//         ["f-2" , "apple"],
//         ["f-3" , "banana"],
//         ["f-4" , "kiwi"],
//     ]);

//     let mapfruits = "";

//     for(let x of fruits.entries())
//     {
//         mapfruits += x + "<br>";
//     }
//     document.getElementById("fruit").innerHTML = mapfruits;
// }


// --- size ---
// The size property returns the number of elements in a Map:
// {
//     const number = new Map([
//         ["op-1", 10],
//         ["op-2", 20],
//         ["op-3", 30],
//         ["op-4", 40],
//         ["op-5", 50],
//     ]);
//     const size = number.size;
//     document.getElementById("size").innerHTML = size;
// }
