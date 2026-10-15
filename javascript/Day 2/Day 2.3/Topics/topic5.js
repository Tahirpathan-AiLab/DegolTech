const students = [
  { name: "Asha", marks: 45 },
  { name: "Ravi", marks: 80 },
  { name: "Neha", marks: 90 }
];

const passedStudentNames = students
  .filter(student => student.marks >= 50)
  .map(student => student.name);

console.log(passedStudentNames);
