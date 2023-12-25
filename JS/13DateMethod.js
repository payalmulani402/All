/*  Month -> 0 - 11     0 - january, 11 - december
    Date Methods
    new Date();
    new Date(date string)
    new Date(year, month)
    new Date(year, month,day)
    new Date(year, month,day, hours)
    new Date(year, month, day, hours, minitues)
    new Date(year, month, day , hours, minutes, seconds)
    new Date(year, month, day , hours, minutes, seconds, miliseconds)
    new Date(year)
*/
let data, result;
// data = new Date();
// console.log(data);

// data = new Date("22-08-2022");
// console.log(data);

// data = new Date(2022,3);
// console.log(data);



/*******************  Get Method  ******************* */
// data = new Date();
// result = data.getFullYear();
// result = data.getMonth();
// result = data.getDate();
// result = data.getHours();
// result = data.getMinutes();
// result = data.getSeconds();
// result = data.getMilliseconds();
// result = data.getTime();    // return miliseconds 1970 to up to date
// result = data.getTimezoneOffset();    // -330
// console.log(result);


/*******************  Set Method  ******************* */
data = new Date();
// data.setFullYear(2020);

data.setMilliseconds(1000000000000)
console.log(data);