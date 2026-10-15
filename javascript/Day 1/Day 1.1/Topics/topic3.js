/*
Topic 3: var, let, and const
*/

let age = 20;
age = 21;

console.log(age); 

const city = "Anand";

// city = "Surat"; // This will throw an error because we cannot reassign a const variable.

const student = { name: "Rahul", marks: 75 };

student.marks = 90; // This is allowed because we are modifying the property of the object, not reassigning the variable itself.

console.log(student.marks); 