const student = {
  name: "Ravi",
  marks: 75
};

const updatedStudent = { ...student, marks: 82 };
console.log(student.marks);
console.log(updatedStudent.marks);
