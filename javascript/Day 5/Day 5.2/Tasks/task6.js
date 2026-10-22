const students = [
  { name: "Asha", marks: 80 },
  { name: "Ravi", marks: 65 },
  { name: "Neha", marks: 90 },
  { name: "Amit", marks: 72 }
];

const totalMarks = students.reduce((total, student) => total + student.marks, 0);
const averageMarks = totalMarks / students.length;
const studentsAbove70 = students.filter(student => student.marks >= 70);

console.log(averageMarks);
console.log(studentsAbove70);
