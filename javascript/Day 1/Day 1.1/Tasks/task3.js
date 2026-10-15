// global scope 
let myname = "Tahir";

function showname() {
    console.log(myname); 
}

showname();
console.log(myname);

// function scope 

function showname() {
    let myname = "Tahir";
    console.log(myname); 
}

showname();

// block scope
if (true) {
    let myname = "Tahir";
    console.log(myname); 
}

// var vs let inside an if block

if (true) {
  var x = 10;
  let y = 20;
}

console.log(x);
// console.log(y);