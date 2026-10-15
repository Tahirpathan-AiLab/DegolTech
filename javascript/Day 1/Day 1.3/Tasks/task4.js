const students = [
  { name: "Asha", marks: 82 },
  { name: "Ravi", marks: 67 },
  { name: "Neha", marks: 91 },
  { name: "Imran", marks: 48 },
  { name: "Kabir", marks: "absent" }
];

function getHighestScoringStudent(studentList) {
  if (studentList.length === 0) {
    return null;
  }

  let highestStudent = null;

  for (let i = 0; i < studentList.length; i++) {
    const student = studentList[i];

    if (typeof student.marks === "number") {
      if (highestStudent === null || student.marks > highestStudent.marks) {
        highestStudent = student;
      }
    }
  }

  return highestStudent;
}

function getPassingStudents(studentList) {
  const passingStudents = [];

  for (let i = 0; i < studentList.length; i++) {
    const student = studentList[i];

    if (typeof student.marks === "number" && student.marks >= 50) {
      passingStudents.push(student);
    }
  }

  return passingStudents;
}

function countPassingStudents(studentList) {
  let count = 0;
  const passingStudents = getPassingStudents(studentList);

  for (let i = 0; i < passingStudents.length; i++) {
    count++;
  }

  return count;
}

console.log("Highest scorer:", getHighestScoringStudent(students));
console.log("Passing students:", getPassingStudents(students));
console.log("Number of passing students:", countPassingStudents(students));
console.log("Highest scorer in empty list:", getHighestScoringStudent([]));
console.log("Pass count in empty list:", countPassingStudents([]));
console.log("Kabir's marks are skipped because they are not a number.");
