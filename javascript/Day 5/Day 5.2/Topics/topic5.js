const students = [
  { name: "Asha", marks: 80 },
  { name: "Ravi", marks: 65 },
  { name: "Neha", marks: 90 }
];

const totalMarks = students.reduce((sum, student) => sum + student.marks, 0);
const averageMarks = totalMarks / students.length;
const passedStudents = students.filter(student => student.marks >= 70);

console.log(averageMarks);
console.log(passedStudents);
