const students = [
  { name: "Asha", marks: 82 },
  { name: "Ravi", marks: 67 },
  { name: "Neha", marks: 91 }
];

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

console.log(getTopStudent(students));
