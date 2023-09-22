
 let months = ['Jan', 'Feb', 'Mar','Apr', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// export a constant
 const year = 2015;

// export a class
 class us {
  constructor(name) {
    this.name = name;
  }
}
const kishan = new us("kishan");
console.log(kishan);

export {months,year,us}

  // function sayHi(user) {
  //     alert(`Hello, ${user}!`);
  //   }
    
  //   function sayBye(user) {
  //     alert(`Bye, ${user}!`);
  //   }
    
  //   export {sayHi, sayBye};
