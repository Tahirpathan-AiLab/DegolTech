const students = [
  { name: "Asha", marks: 82 },
  { name: "Ravi", marks: 67 },
  { name: "Neha", marks: 91 },
  { name: "Imran", marks: 48 },
  { name: "Meera", marks: 74 }
];

function getTotalMarks(studentList) {
  let total = 0;

  for (let i = 0; i < studentList.length; i++) {
    total = total + studentList[i].marks;
  }

  return total;
}

function getAverageMarks(studentList) {
  if (studentList.length === 0) {
    return null;
  }

  return getTotalMarks(studentList) / studentList.length;
}

function getStudentResult(student) {
  if (student.marks >= 50) {
    return "Pass";
  }

  return "Fail";
}

function findStudentByName(studentList, name) {
  for (let i = 0; i < studentList.length; i++) {
    if (studentList[i].name === name) {
      return studentList[i];
    }
  }

  return undefined;
}

function printStudentReport(studentList) {
  if (studentList.length === 0) {
    console.log("No students found");
    return;
  }

  for (let i = 0; i < studentList.length; i++) {
    const student = studentList[i];
    console.log(student.name + ": " + student.marks + " marks - " + getStudentResult(student));
  }
}

console.log("Total marks:", getTotalMarks(students));
console.log("Average marks:", getAverageMarks(students));
console.log("Asha's result:", getStudentResult(students[0]));
console.log("Find Ravi:", findStudentByName(students, "Ravi"));
printStudentReport(students);
console.log("Empty list average:", getAverageMarks([]));
