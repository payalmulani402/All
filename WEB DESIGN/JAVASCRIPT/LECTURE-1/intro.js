// what is javascript

// javascript is dynamic computer programing language. it is lightweight and most commonly
// used as a part of web pages,whose implementations allow client-side script to interact
// with the user and make dynamic pages. it is an interpreted programing language with object-oriented capabilities.

// javascript was first known as livescript, but netscape changed its name to javascript, possibly becauase of the excitement being 
// generated by java. javascript made its first appearance in netscape 2.0 in 1995 with the name livescript. the general-purpose core 
// of the language has been embedded in netscape, internet explorer, and other web browsers.

// complementry to and integrated with html.
// open and cross-platform

//****** why javascript ******//
// html to defined the content web pages 
// css to specify the layout of web pages 
// javascript to program the behavior of web pages 


// javascript value
// the javascript syntax defines two types of values;

// fixed values are called literals.
// variable values are called variables

// HTML is the markup language that we use to structure and give meaning to our web content, 
//      for example defining paragraphs, headings, and data tables, or embedding images and videos in the page.

// CSS is a language of style rules that we use to apply styling to our HTML content,
//     for example setting background colors and fonts, and laying out our content in multiple columns.

// JavaScript is a scripting language that enables you to create dynamically updating content, 
// control multimedia, animate images, and pretty much everything else. 
// (Okay, not everything, but it is amazing what you can achieve with a few lines of JavaScript code.)


//The latest ECMAScript(ES6) standard defines following data types: Out of which six data types are Primitive(predefined). 

// Boolean.         true and false.
// null.            A special keyword denoting a null value. (Because JavaScript is case-sensitive, null is not the same as Null, NULL, or any other variant.)
// undefined.       A top-level property whose value is not defined.
// Number.          An integer or floating point number. For example: 42 or 3.14159.
// BigInt.          An integer with arbitrary precision. For example: 9007199254740992n.
// String.          A sequence of characters that represent a text value. For example: "Howdy".
// Symbol.          A data type whose instances are unique and immutable.



// using consol in javascript
// {
//     console.log("hello world");
//     console.log("hello javascript");
//     console.log("80");
//     var a=50;
// }

// javascript language case-sensitive
// variable in javascript
// {
//     names="css"; 
//     console.log(names);
//     names="kishan";
//     console.log(names);

//     var Names="website";
//     var names="javascript";
//     console.log(names);

//     var thisis="50 ";
//     var thatis="25";
//     console.log(thisis + thatis);

//     var box1="colthes";
//     var box1="toys";
//     console.log(box1);
// }

// new html element add in though javascript
// {
//     var newelement=document.createElement("h6");
//     newelement.textContent="bhalala kishan";
//     document.body.appendChild(newelement); 

//     var newelement=document.createElement("marquee");
//     newelement.textContent="hello world";
//     document.body.appendChild(newelement); 

//     var newelement=document.createElement("p");
//     newelement.textContent="kishan bhalala";
//     document.body.appendChild(newelement); 

// }

// window alert() in javascript
// {
//     window.alert("warning");
//     alert("how are you");
//     alert('pause!');
// }

// windows prompt() in javascript
// {
//     var age = prompt('i am here');
//     var names = prompt("what is your name");
//     var input = prompt("and who are you");
// }

// using the DOM API 
// {
//     var a = 40;
//     var b = "hi, i am javascript don't afraid of me."
//     var b = 30;
//     document.getElementById("demo1").innerHTML = a;
//     document.getElementById("demo2").innerHTML = b;
// }

// let variable (blockscope variables)
// {
//     let boxx1 = "toys1";
//     let boxx2 = "clothes1";
//     boxx1 = "toys2";
//     boxx2 = "clothes2";
//     boxx2="foo";
//     document.getElementById("demo3").innerHTML=boxx2;
// }

// const variable (blockscope variables)
// {
//     const toys="bus";
//     const toys1="car";
//     document.getElementById("demo4").innerHTML=toys;
//     document.getElementById("demo4").innerHTML=toys1;
// }

// document.write('hello javascript');
// js comment 

//single-line comments (//)
/* multi-line comments */


// Template literals

// var _nameone = "5";
// var name20 = '5';

// console.log(nameone+nametwo);

//  alert(`${_nameone} + ${nametwo}`); 


// Rules for Naming JavaScript Variables

// {
//     //valid
//     let a = 'hello';
//     let _a = 'hello';
//     let $a = 'hello';
// }
{
    //invalid
    // Let 1a = 'hello'; // this gives an error
}

// JavaScript is case-sensitive. So y and Y are different variables

// {
//     let y = "hi";
//     let Y = 5;

//     console.log(y);
//     console.log(Y);
// }

// Keywords cannot be used as variable names.

{
    //invalid
    // let new = 5; // Error! new is a keyword.
}




    // name must start with a letter (a to z or A to Z),underscore( _ ), or doller( $ ) sign.
    // after first letter we can use digits (0 to 9), for example value1.
    // javascript variables are case sensitive,  for example x and x are differnt variables.
