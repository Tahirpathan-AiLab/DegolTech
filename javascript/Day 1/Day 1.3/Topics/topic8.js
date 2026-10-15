const students = [
  { name: "Asha", marks: 82 },
  { name: "Ravi", marks: 67 },
  { name: "Neha", marks: 91 },
  { name: "Imran", marks: 48 },
  { name: "Meera", marks: 74 }
];

function getTotalMarks(studentList) {
  return studentList.reduce((total, student) => total + student.marks, 0);
}

function getAverageMarks(studentList) {
  if (studentList.length === 0) return null;
  return getTotalMarks(studentList) / studentList.length;
}

function getStudentResult(student) {
  return student.marks >= 50 ? "Pass" : "Fail";
}

function findStudentByName(studentList, name) {
  return studentList.find(student => student.name.toLowerCase() === name.toLowerCase());
}

function printStudentReport(studentList) {
  studentList.forEach(student => {
    console.log(`${student.name}: ${student.marks} marks - ${getStudentResult(student)}`);
  });
}

console.log("Total:", getTotalMarks(students));
console.log("Average:", getAverageMarks(students));
console.log("Found:", findStudentByName(students, "Neha"));
printStudentReport(students);
