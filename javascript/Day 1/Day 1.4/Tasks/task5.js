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

function getTopStudent(studentList) {
  if (studentList.length === 0) {
    return undefined;
  }

  let topStudent = studentList[0];

  for (let i = 1; i < studentList.length; i++) {
    if (studentList[i].marks > topStudent.marks) {
      topStudent = studentList[i];
    }
  }

  return topStudent;
}

function printStudentReport(studentList) {
  for (let i = 0; i < studentList.length; i++) {
    const student = studentList[i];
    console.log(student.name + ": " + student.marks + " - " + getStudentResult(student));
  }
}

console.log("Total:", getTotalMarks(students));
console.log("Average:", getAverageMarks(students));
console.log("Top student:", getTopStudent(students).name);
console.log("Imran's result:", getStudentResult(findStudentByName(students, "Imran")));
console.log("Empty average:", getAverageMarks([]));
console.log("Top student in empty list:", getTopStudent([]));
printStudentReport(students);
