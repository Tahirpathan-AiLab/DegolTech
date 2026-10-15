console.log('Failing code: console.log(course); const course = "MERN Stack";');
console.log("Why it fails: course is a const variable, so it cannot be accessed before its initialization. It is in the Temporal Dead Zone, and reading it there causes a ReferenceError.");

console.log("Corrected code output:");
const course = "MERN Stack";
console.log(course);
