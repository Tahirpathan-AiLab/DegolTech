const students = [
  { name: "Asha", marks: 85 },
  { name: "Ravi", marks: 42 },
  { name: "Neha", marks: 67 }
];

students.forEach(student => {
  const result = student.marks >= 50 ? "Pass" : "Try again";
  console.log(`${student.name}: ${result}`);
});
