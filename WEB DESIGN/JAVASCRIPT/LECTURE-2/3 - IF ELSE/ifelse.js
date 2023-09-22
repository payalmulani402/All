// javascript if---else statement 
{
    // if statement
    // if... else statement
    // if... else if statement
    // switch statement
}

// 1.. if statement
// {
//     if(expression){
//         statement(s) to be executed if expression is true
//     }
// }
// {
//     var age = "19";
//     if (age >= 18) {
//         document.write("<b>Qualifies for driving</b>");
//     }
// }

// 2.. if... else statement
// {
//     if (expression) {
//         statement(s) to be executed if expression is true
//     }
//     else{
//         statement(s) to be executed if expression is false
//     }
// }
// {
//     var age = "15";
//     if (age >= 18) {
//         document.write("<b>Qualifies for driving</b>");
//     }
//     else{
//         document.write("<b>Qualifies not for driving</b>");
//     }
// }

// 3.. if... else if statement
// the if... else if... statement is an advanced form of if else that allows
// javascript to make a correct decision out of several condition.
// {
//     if (expression 1) {
//         statement(s) to be executed if expression 1 is true
//     }
//     else if (expression 2) {
//         statement(s) to be executed if expression 2 is true
//     }
//     else if (expression 3) {
//         statement(s) to be executed if expression 3 is true
//     }
//     else {
//         statement(s) to be executed if no expression 1 is true
//     }
// }

// there is nothing special about this code. it is just a series of if statements,
// where each if is a part of the else clause of the previous statement. statement (s) are
// executed based on the true condition, if none of the conditions is true, then the else
// block is executed.

// {
//     var book = "economics";

//     if (book == "history") {
//         document.write("<b>history book</b>")
//     }
//     else if (book == "maths") {
//         document.write("<b>maths book</b>")
//     }
//     else if (book == "economics") {
//         document.write("<b>eco book</b>")
//     }
//     else {
//         document.write("<b>unknown book</b>")
//     }
// }

//4.. switch statement 
// if input =1, "y", "yes" output = continue...
// if input =0, "n", "no" output = end...

// let input = 0;
// {
//     if (input === 1) {
//         document.write("continue...")
//     }
//     else if (input === "y") {
//         document.write("continue...")
//     }
//     else if (input === "yes") {
//         document.write("continue...")
//     }
//     else if (input === 0) {
//         document.write("end...")
//     }
//     else if (input === "n") {
//         document.write("end...")
//     }
//     else if (input === "no") {
//         document.write("end...")
//     }
//     else{
//         document.write("wrong input")
//     }
// }

// === comparison 
// {
//     let input = "n";

//     switch (input) {
//         case 1:
//             document.write("continue 1..")
//             break;
//         case "y":
//             document.write("continue y..")
//             break;
//         case "yes":
//             document.write("continue yes..")
//             break;
//         case 0:
//             document.write("continue 0..")
//             break;
//         case "n":
//             document.write("continue n..")
//             break;
//         case "no":
//             document.write("continue no..")
//             break;

//         default:
//             document.write("wrong input..")
//             break;
//     }
// }