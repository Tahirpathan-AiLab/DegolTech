const students = [
  { name: "Asha", marks: 65 },
  { name: "Ravi", marks: 80 },
  { name: "Neha", marks: 55 },
  { name: "Imran", marks: 40 }
];

students
  .filter(student => student.marks >= 70)
  .forEach(student => {
    console.log(student.name);
  });
