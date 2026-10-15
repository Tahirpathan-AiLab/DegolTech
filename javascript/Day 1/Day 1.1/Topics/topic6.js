/* 
Topic 6: Block Scope
*/

if(true) {
    let message = "Hello, World!";
    const score = 100;

    console.log(message, score); // This will work because we are inside the block where the variables are defined.     
}


if (true) {
  var first = 10;
  let second = 20;
}

console.log(first); // This will work because var has function scope
//console.log(second); // This will throw an error because let has block scope